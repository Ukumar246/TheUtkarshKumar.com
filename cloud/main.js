Parse.Cloud.define('hello', function(request, response) {
	response.success('Hello from the server');
});

/**
	@params: 
			+	user_location_lat	$GeoPoint
			+	user_location_lon	$GeoPoint
			+	place_id			$:String 	- Google Place ID 
			+ 	place_name 			:String 	- Google Place name 
			+  	place_location_lon	:GeoPoint 	- Location of the place. 
			+  	place_location_lat	:GeoPoint 	- Location of the place. 
			+ 	place_type			:[String]	- The types of this place. 
			+ 	place_website		:String		- Website for this place. 
			+ 	place_address		:String 
*/

Parse.Cloud.define('check-in', function(request, response){
	Parse.Cloud.useMasterKey();			// <<-- Use with extreme security precaution

	//Extract Data
	var user_location_lat = request.params.user_location_lat;
	var user_location_lon = request.params.user_location_lon;

	var place_id		  = request.params.place_id;

	var place_location_lat = request.params.place_location_lat;
	var place_location_lon = request.params.place_location_lon;
	
	
	var dist = distance(user_location_lat, user_location_lon, place_location_lat, place_location_lon);
	
	var DISTANCE_LIMIT = process.env.DISTANCE_LIMIT || 30.0;
	
	console.log("[check-in] check into google place ", place_id);
	console.log("[check-in] distance: ", dist,
				"[check-in] LIMIT: ", DISTANCE_LIMIT);

	// Distance Filter
	if (dist > DISTANCE_LIMIT){
		response.error('Distance exceeds '+ DISTANCE_LIMIT+' meter limit for check in feature');
		return;
	}

	// find place in db 
	checkForPlaceInDB(place_id, function(result, error){	
        if (result != null){
        	// We found this place so check the user into it
            console.log("[check-in] checking in to existing place...");
            checkInUser(request.user, result, function(status, push_sent, error_string){
            	if (status == true && push_sent == true){

		            response.success('checked in to place '+result.id+'. push notif sent');
            	}
		       	else{	// Status is false here - so something big failed - not push
				
					response.error(error_string);
				}
            });
        }
        else{	
			console.log("[check-in] registering new place on db...");

            // Place not found - A create place, B check user in
       	    var PlaceClass = Parse.Object.extend("Place");
            var newPlace = new PlaceClass();

            // Set Fields for new Place
            newPlace.set("name", request.params.place_name);
            newPlace.set("placeId", place_id);
            newPlace.set("address", request.params.place_address);
            //newPlace.set("types", request.params.place_types);

            var point = new Parse.GeoPoint({latitude: place_location_lat, longitude: place_location_lon});
            newPlace.set("location", point);

            newPlace.save(null, {
                success: function(place) {
                    // New Place was saved
                    console.log('[check-in] new place registed on db with id ' + place.id);

                    checkInUser(request.user, place, function(status, push_sent, error_string) {
                        if (status == true && push_sent == true) {
                            var success_str = 	'checked in to place '+
                            					place.id + 
                            					'. push notif sent';

                            console.log('[check-in] done. \t' + success_str);
                        	response.success(success_str);

                        } else { // Status is false here - so something big failed - not push
                            
                            console.log('[check-in] error.', response);
                            response.error(error_string);
                        }
                    });
                },
                error: function(place, error) {
                    // Return bad resp
                    var error_string = 'failed to register this place on our DB.\nerror message: ' + error.message;
                    console.error('[check-in] ' + error_string);
                    response.error(error_string);
                }
            });

		}
	});
/* 
	Check the User In 
	-NOTE: THis function Returns on callback @param
	@param: callback <function(status, push_sent, error_string)>
*/
	function checkInUser(user, place, callback){
    	// Find users in the same place
		var userQuery = new Parse.Query(Parse.User); userQuery.equalTo("checkedIn", place);
		// Find devices associated with these users
		var pushQuery = new Parse.Query(Parse.Installation); pushQuery.matchesQuery('user', userQuery);
		
		// Send push notifications
		Parse.Push.send({
		  where: pushQuery,
		  data: {
		  	alert: "New user just checked in to this place!",
			badge: "Increment",
			sound: "cheering.caf",
			title: "Dare New Activity"
		  }
		}, { useMasterKey: true })
		.then(function() {
		  	// Push sent!
		  	console.log("[check-in] push notifications sent!");
		  
		  	// Save User:

		  	// Time Stamp User
        	var time = new Date();
      		user.set("lastCheckInTime", time);		
		  	
		  	user.set("checkedIn", place);
			user.save().then(function(obj) {
				// Everything Done:
				console.log('[check-in] saved user data!');
				callback(true, true, null);
				
			}, function(error) {
			    // saving the user failed.
			    var error_str = 'failed to save user data.\nerror code: ' + error.message;
	            console.error('[check-in] ' + error_str);
	            
	            callback(false, true, error_str);
			});
		}, function(error) {
		  // There was a problem :(
		  var error_str = "push notification error: " + error.message;
		  console.error("[check-in] "+error_str);
		  
		  callback(false, false, error_str);return;

		});
	}

	//Haversine formula betwen two lat lon points
	function distance(lat1, lon1, lat2, lon2)
	{
		var p = 0.017453292519943295;    // Math.PI / 180
		var c = Math.cos;
		var a = 0.5 - c((lat2 - lat1) * p)/2 + 
		      c(lat1 * p) * c(lat2 * p) * 
		      (1 - c((lon2 - lon1) * p))/2;

		return 12742 * Math.asin(Math.sqrt(a)) * 1000; // Answer in meters
	}

	function checkForPlaceInDB(place_id, callback)
	{	// Find the place with same place id in database
		var PlaceClass = Parse.Object.extend("Place");
		var query = new Parse.Query(PlaceClass);
		query.equalTo("placeId", place_id);

		query.first({
		  success: function(result) {
            callback(result, null);
		  },
		  error: function(error) {
		    console.error("[check-in] Error: " + error.message);
            callback(null, error);
		  }
		});	
	}
});