# curl -X PUT \
#   -H "X-Parse-Application-Id: BetDAREiiaig5uxPY68P" \
#   -H "X-Parse-Master-Key: REEUfRx0pB98ciTTQamPQWRKc" \
#   -H "Content-Type: application/json" \
#   -d '{"__op": "Delete"}' \
# https://dare-server.herokuapp.com/parse/hooks/functions/ultrahookDevTest

curl -X GET \
	-H "X-Parse-Application-Id: BetDAREiiaig5uxPY68P" \
  	-H "X-Parse-Master-Key: REEUfRx0pB98ciTTQamPQWRKc" \
  	-H "Content-Type: application/json" \
https://dare-server.herokuapp.com/parse/hooks/functions

# curl -X POST \
# 	-H "X-Parse-Application-Id: BetDAREiiaig5uxPY68P" \
# 	-H "X-Parse-Master-Key: REEUfRx0pB98ciTTQamPQWRKc" \
# 	-H "Content-Type: application/json" \
# 	-d '{"functionName":"ultrahookDevTest","url":"http://server.dare.ultrahook.com"}' \
# https://dare-server.herokuapp.com/parse/hooks/functions
