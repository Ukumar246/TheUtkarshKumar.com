if (self.CavalryLogger) { CavalryLogger.start_js(["8sWPg"]); }

__d("PluginConnectButtonType",[],(function a(b,c,d,e,f,g){f.exports={BLUE_BASE:1,WHITE_BASE:2};}),null);
__d("PluginShareLogTypes",[],(function a(b,c,d,e,f,g){f.exports={IMPRESSION:"impression",CLICK:"click"};}),null);
__d('PlatformDialog',['DOMEventListener','DOMEvent','CSS','cx'],(function a(b,c,d,e,f,g,h,i,j,k){var l;m.getInstance=function(){'use strict';return l;};function m(n,o,p){'use strict';l=this;this.$PlatformDialog1=n;this.$PlatformDialog2=o;this.$PlatformDialog3=false;h.add(this.$PlatformDialog1,'submit',function(q){if(this.$PlatformDialog3){new i(q).kill();return;}this.$PlatformDialog3=true;if(p)j.addClass(n,"_32qa");}.bind(this));}m.prototype.getForm=function(){'use strict';return this.$PlatformDialog1;};m.prototype.getDisplay=function(){'use strict';return this.$PlatformDialog2;};m.prototype.hasBeenSubmitted=function(){'use strict';return this.$PlatformDialog3;};m.RESPONSE='platform/dialog/response';f.exports=m;}),null);
__d('PluginLoggedOutUserTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g,h,i,j){'use strict';function k(){this.clear();}k.prototype.log=function(){i.log('logger:PluginLoggedOutUserLoggerConfig',this.$PluginLoggedOutUserTypedLogger1,h.BASIC);};k.prototype.logVital=function(){i.log('logger:PluginLoggedOutUserLoggerConfig',this.$PluginLoggedOutUserTypedLogger1,h.VITAL);};k.prototype.clear=function(){this.$PluginLoggedOutUserTypedLogger1={};return this;};k.prototype.updateData=function(m){this.$PluginLoggedOutUserTypedLogger1=babelHelpers['extends']({},this.$PluginLoggedOutUserTypedLogger1,m);return this;};k.prototype.setHref=function(m){this.$PluginLoggedOutUserTypedLogger1.href=m;return this;};k.prototype.setIsSDK=function(m){this.$PluginLoggedOutUserTypedLogger1.is_sdk=m;return this;};k.prototype.setPluginAppID=function(m){this.$PluginLoggedOutUserTypedLogger1.plugin_app_id=m;return this;};k.prototype.setPluginName=function(m){this.$PluginLoggedOutUserTypedLogger1.plugin_name=m;return this;};k.prototype.setRefererURL=function(m){this.$PluginLoggedOutUserTypedLogger1.referer_url=m;return this;};k.prototype.setVC=function(m){this.$PluginLoggedOutUserTypedLogger1.vc=m;return this;};k.prototype.updateExtraData=function(m){m=j(i.serializeMap(m));i.checkExtraDataFieldNames(m,l);this.$PluginLoggedOutUserTypedLogger1=babelHelpers['extends']({},this.$PluginLoggedOutUserTypedLogger1,m);return this;};k.prototype.addToExtraData=function(m,n){var o={};o[m]=n;return this.updateExtraData(o);};var l={href:true,is_sdk:true,plugin_app_id:true,plugin_name:true,referer_url:true,vc:true};f.exports=k;}),null);
__d('ArbiterFrame',[],(function a(b,c,d,e,f,g){var h={inform:function i(j,k,l){var m=parent.frames,n=m.length,o;k.crossFrame=true;for(var p=0;p<n;p++){o=m[p];try{if(!o||o==window)continue;if(o.require){o.require('Arbiter').inform(j,k,l);}else if(o.ServerJSAsyncLoader)o.ServerJSAsyncLoader.wakeUp(j,k,l);}catch(q){}}}};f.exports=h;}),null);
__d('FormSubmit',['AsyncRequest','AsyncResponse','CSS','DOMQuery','Event','Form','Parent','trackReferrer'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={send:function q(r,s){var t=(m.getAttribute(r,'method')||'GET').toUpperCase();s=n.byTag(s,'button')||s;var u=n.byClass(s,'stat_elem')||r;if(j.hasClass(u,'async_saving'))return null;if(s&&(s.form!==r||s.nodeName!='INPUT'&&s.nodeName!='BUTTON'||s.type!='submit')){var v=k.scry(r,'.enter_submit_target')[0];v&&(s=v);}var w=m.serialize(r,s);m.setDisabled(r,true);var x=m.getAttribute(r,'ajaxify')||m.getAttribute(r,'action'),y=!!m.getAttribute(r,'data-cors');o(r,x);var z=new h().setAllowCrossOrigin(y).setURI(x).setData(w).setNectarModuleDataSafe(r).setReadOnly(t=='GET').setMethod(t).setRelativeTo(r).setStatusElement(u).setInitialHandler(m.setDisabled.bind(null,r,false)).setHandler(function(aa){l.fire(r,'success',{response:aa});}).setErrorHandler(function(aa){if(l.fire(r,'error',{response:aa})!==false)i.defaultErrorHandler(aa);}).setFinallyHandler(m.setDisabled.bind(null,r,false));z.send();return z;}};f.exports=p;}),null);
__d('Popup',[],(function a(b,c,d,e,f,g){var h={open:function i(j,k,l,m){var n=document.body,o='screenX' in window?window.screenX:window.screenLeft,p='screenY' in window?window.screenY:window.screenTop,q='outerWidth' in window?window.outerWidth:n.clientWidth,r='outerHeight' in window?window.outerHeight:n.clientHeight-22,s=Math.floor(o+(q-k)/2),t=Math.floor(p+(r-l)/2.5),u=['width='+k,'height='+l,'left='+s,'top='+t,'scrollbars'];return window.open(j,m||'_blank',u.join(','));}};f.exports=h;}),null);
__d('PopupLink',['DOMEvent','DOMEventListener','Popup'],(function a(b,c,d,e,f,g,h,i,j){var k={listen:function l(m,n,o){i.add(m,'click',function(p){new h(p).kill();j.open(m.href,n,o);});}};f.exports=k;}),null);
__d('PopupWindow',['DOMDimensions','DOMQuery','Layer','Popup','getViewportDimensions'],(function a(b,c,d,e,f,g,h,i,j,k,l){var m={_opts:{allowShrink:true,strategy:'vector',timeout:100,widthElement:null},init:function n(o){Object.assign(m._opts,o);setInterval(m._resizeCheck,m._opts.timeout);},_resizeCheck:function n(){var o=l(),p=m._getDocumentSize(),q=j.getTopmostLayer();if(q){var r=q.getRoot().firstChild,s=h.getElementDimensions(r);s.height+=h.measureElementBox(r,'height',true,true,true);s.width+=h.measureElementBox(r,'width',true,true,true);p.height=Math.max(p.height,s.height);p.width=Math.max(p.width,s.width);}var t=p.height-o.height,u=p.width-o.width;if(u<0&&!m._opts.widthElement)u=0;u=u>1?u:0;if(!m._opts.allowShrink&&t<0)t=0;if(t||u)try{window.console&&window.console.firebug;window.resizeBy(u,t);if(u)window.moveBy(u/-2,0);}catch(v){}},_getDocumentSize:function n(){var o=h.getDocumentDimensions();if(m._opts.strategy==='offsetHeight')o.height=document.body.offsetHeight;if(m._opts.widthElement){var p=i.scry(document.body,m._opts.widthElement)[0];if(p)o.width=h.getElementDimensions(p).width;}var q=b.Dialog;if(q&&q.max_bottom&&q.max_bottom>o.height)o.height=q.max_bottom;return o;},open:function n(o,p,q,r){return k.open(o,q,p,r);}};f.exports=m;}),null);
__d('Queue',[],(function a(b,c,d,e,f,g){var h={};function i(j){'use strict';this._opts=babelHelpers['extends']({interval:0,processor:null},j);this._queue=[];this._stopped=true;}i.prototype._dispatch=function(j){'use strict';if(this._stopped||this._queue.length===0)return;if(!this._opts.processor){this._stopped=true;throw new Error('No processor available');}if(this._opts.interval){this._opts.processor.call(this,this._queue.shift());this._timeout=setTimeout(this._dispatch.bind(this),this._opts.interval);}else while(this._queue.length)this._opts.processor.call(this,this._queue.shift());};i.prototype.enqueue=function(j){'use strict';if(this._opts.processor&&!this._stopped){this._opts.processor.call(this,j);}else this._queue.push(j);return this;};i.prototype.start=function(j){'use strict';if(j)this._opts.processor=j;this._stopped=false;this._dispatch();return this;};i.prototype.isStarted=function(){'use strict';return !this._stopped;};i.prototype.dispatch=function(){'use strict';this._dispatch(true);};i.prototype.stop=function(j){'use strict';this._stopped=true;if(j)clearTimeout(this._timeout);return this;};i.prototype.merge=function(j,k){'use strict';this._queue[k?'unshift':'push'].apply(this._queue,j._queue);j._queue=[];this._dispatch();return this;};i.prototype.getLength=function(){'use strict';return this._queue.length;};i.get=function(j,k){'use strict';var l;if(j in h){l=h[j];}else l=h[j]=new i(k);return l;};i.exists=function(j){'use strict';return j in h;};i.remove=function(j){'use strict';return delete h[j];};f.exports=i;}),null);
__d('TextInputControl',['DOMControl','Event','Input','debounce'],(function a(b,c,d,e,f,g,h,i,j,k){var l,m;l=babelHelpers.inherits(n,h);m=l&&l.prototype;function n(o){'use strict';m.constructor.call(this,o);var p=this.getRoot(),q=k(this.update.bind(this),0);i.listen(p,{input:q,keydown:q,paste:q});}n.prototype.setMaxLength=function(o){'use strict';j.setMaxLength(this.getRoot(),o);return this;};n.prototype.getValue=function(){'use strict';return j.getValue(this.getRoot());};n.prototype.isEmpty=function(){'use strict';return j.isEmpty(this.getRoot());};n.prototype.setValue=function(o){'use strict';j.setValue(this.getRoot(),o);this.update();return this;};n.prototype.clear=function(){'use strict';return this.setValue('');};n.prototype.setPlaceholderText=function(o){'use strict';j.setPlaceholder(this.getRoot(),o);return this;};f.exports=n;}),null);
__d('transferTextStyles',['Style'],(function a(b,c,d,e,f,g,h){var i={fontFamily:null,fontSize:null,fontStyle:null,fontWeight:null,lineHeight:null,wordWrap:null};function j(k,l){for(var m in i)if(Object.prototype.hasOwnProperty.call(i,m))i[m]=h.get(k,m);h.apply(l,i);}f.exports=j;}),null);
__d('TextMetrics',['DOM','Style','UserAgent','transferTextStyles'],(function a(b,c,d,e,f,g,h,i,j,k){function l(n){var o=n.clientWidth,p=i.get(n,'-moz-box-sizing')=='border-box';if(p&&j.isBrowser('Firefox < 29'))return o;var q=i.getFloat(n,'paddingLeft')+i.getFloat(n,'paddingRight');return o-q;}function m(n,o){'use strict';this.$TextMetrics1=n;this.$TextMetrics2=!!o;var p='textarea',q='textMetrics';if(this.$TextMetrics2){p='div';q+=' textMetricsInline';}this.$TextMetrics3=h.create(p,{className:q});k(n,this.$TextMetrics3);document.body.appendChild(this.$TextMetrics3);}m.prototype.measure=function(n){'use strict';var o=this.$TextMetrics1,p=this.$TextMetrics3;n=(n||o.value)+'...';if(!this.$TextMetrics2){var q=l(o);i.set(p,'width',Math.max(q,0)+'px');}if(o.nodeName==='TEXTAREA'){p.value=n;}else h.setContent(p,n);return {width:p.scrollWidth,height:p.scrollHeight};};m.prototype.destroy=function(){'use strict';h.remove(this.$TextMetrics3);};f.exports=m;}),null);
__d('TextAreaControl',['Arbiter','ArbiterMixin','CSS','DOMControl','Event','Style','TextInputControl','TextMetrics','classWithMixins','mixin'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s;function t(v,w){return m.getFloat(v,w)||0;}r=babelHelpers.inherits(u,p(n,q(i)));s=r&&r.prototype;function u(v){'use strict';s.constructor.call(this,v);this.autogrow=j.hasClass(v,'uiTextareaAutogrow');this.autogrowWithPlaceholder=j.hasClass(v,'uiTextareaAutogrowWithPlaceholder');this.width=null;l.listen(v,'focus',this._handleFocus.bind(this));}u.prototype.setAutogrow=function(v){'use strict';this.autogrow=v;return this;};u.prototype.onupdate=function(){'use strict';s.onupdate.call(this);this.updateHeight();};u.prototype.updateHeight=function(){'use strict';if(this.autogrow){var v=this.getRoot();if(!this.metrics)this.metrics=new o(v);if(typeof this.initialHeight==='undefined'){this.isBorderBox=m.get(v,'box-sizing')==='border-box'||m.get(v,'-moz-box-sizing')==='border-box'||m.get(v,'-webkit-box-sizing')==='border-box';this.borderBoxOffset=t(v,'padding-top')+t(v,'padding-bottom')+t(v,'border-top-width')+t(v,'border-bottom-width');this.initialHeight=v.offsetHeight-this.borderBoxOffset;}var w=null;if((!v.value||v.value.length===0)&&this.autogrowWithPlaceholder){w=this.metrics.measure(v.placeholder);}else w=this.metrics.measure();var x=Math.max(this.initialHeight,w.height);if(this.isBorderBox)x+=this.borderBoxOffset;if(this.maxHeight&&x>this.maxHeight){x=this.maxHeight;h.inform('maxHeightExceeded',{textArea:v});}if(x!==this.height){this.height=x;m.set(v,'height',x+'px');h.inform('reflow');this.inform('resize');}}else if(this.metrics){this.metrics.destroy();this.metrics=null;}};u.prototype.resetHeight=function(){'use strict';this.height=-1;this.update();};u.prototype.setMaxHeight=function(v){'use strict';this.maxHeight=v;};u.prototype.setAutogrowWithPlaceholder=function(v){'use strict';this.autogrowWithPlacedholder=v;};u.prototype._handleFocus=function(){'use strict';this.width=null;};u.getInstance=function(v){'use strict';return k.getInstance(v)||new u(v);};f.exports=u;}),null);
__d('resolveWindow',[],(function a(b,c,d,e,f,g){function h(i){var j=window,k=i.split('.');try{for(var m=0;m<k.length;m++){var n=k[m],o=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(n);if(o){j=j.frames[o[1]];}else if(n==='opener'||n==='parent'||n==='top'){j=j[n];}else return null;}}catch(l){return null;}return j;}f.exports=h;}),null);
__d('XD',['Arbiter','DOM','DOMDimensions','Log','PHPQuerySerializer','URI','Queue','isFacebookURI','isInIframe','resolveWindow'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r='fb_xdm_frame_'+location.protocol.replace(':',''),s={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1000,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6000},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function u(v){this._opts=babelHelpers['extends']({},this._opts,v);if(this._opts.autoResize)this._startResizeMonitor();h.subscribe('Connect.Unsafe.resize.ack',function(w,x){if(!x.id)x.id=this._resizeCount;if(x.id>this._lastResizeAckId)this._lastResizeAckId=x.id;}.bind(this));},getQueue:function u(){if(!this._queue)this._queue=new n();return this._queue;},setChannelUrl:function u(v){this.getQueue().start(function(w){return this.send(w,v);}.bind(this));},send:function u(v,w){w=w||this._opts.channelUrl;if(!w){this.getQueue().enqueue(v);return;}var x={},y=new m(w);Object.assign(x,v,l.deserialize(y.getFragment()));var z=new m(x.origin).getOrigin(),aa=q(x.relation.replace(/^parent\./,'')),ba=50,ca=function da(){var ea=aa.frames[r];try{ea.proxyMessage(l.serialize(x),z);}catch(fa){if(--ba){setTimeout(da,100);}else k.warn('No such frame "'+r+'" to proxyMessage to');}};ca();},_computeSize:function u(){var v=j.getDocumentDimensions(),w=0;if(this._opts.resizeWidth){var x=document.body;if(x.clientWidth<x.scrollWidth){w=v.width;}else{var y=x.childNodes;for(var z=0;z<y.length;z++){var aa=y[z],ba=aa.offsetLeft+aa.offsetWidth;if(ba>w)w=ba;}}w=Math.max(w,s.forced_min_width);}v.width=w;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=i.create('div');i.appendContent(document.body,this._shrinker);v.height=Math.max(this._shrinker.offsetTop,0);}return v;},_startResizeMonitor:function u(){var v,w=document.documentElement;if(this._opts.hideOverflow){w.style.overflow='hidden';document.body.style.overflow='hidden';}var x=function(){var y=this._computeSize(),z=Date.now(),aa=this._lastResizeAckId<this._resizeCount&&z-this._resizeTimestamp>this._opts.resizeAckTimeout;if(!v||this._opts.expectResizeAck&&aa||this._opts.allowShrink&&v.width!=y.width||!this._opts.allowShrink&&v.width<y.width||this._opts.allowShrink&&v.height!=y.height||!this._opts.allowShrink&&v.height<y.height){v=y;this._resizeCount++;this._resizeTimestamp=z;var ba={type:'resize',height:y.height,ackData:{id:this._resizeCount}};if(y.width&&y.width!=0)ba.width=y.width;try{if(o(new m(document.referrer))&&p()&&window.name&&window.parent.location&&window.parent.location.toString&&o(new m(window.parent.location))){var da=window.parent.document.getElementsByTagName('iframe');for(var ea=0;ea<da.length;ea=ea+1)if(da[ea].name==window.name){if(this._opts.resizeWidth)da[ea].style.width=ba.width+'px';da[ea].style.height=ba.height+'px';}}this.send(ba);}catch(ca){this.send(ba);}}}.bind(this);x();setInterval(x,this._opts.resizeTimeout);}},t=babelHelpers['extends']({},s);f.exports.UnverifiedXD=t;f.exports.XD=s;b.UnverifiedXD=t;b.XD=s;}),null);
__d('Plugin',['Arbiter','ArbiterFrame'],(function a(b,c,d,e,f,g,h,i){var j={CONNECT:'platform/plugins/connect',DISCONNECT:'platform/plugins/disconnect',ERROR:'platform/plugins/error',RELOAD:'platform/plugins/reload',DIALOG:'platform/plugins/dialog',connect:function k(l,m){var n={identifier:l,href:l,story_fbid:m};h.inform(j.CONNECT,n);i.inform(j.CONNECT,n);},disconnect:function k(l,m){var n={identifier:l,href:l,story_fbid:m};h.inform(j.DISCONNECT,n);i.inform(j.DISCONNECT,n);},error:function k(l,m){h.inform(j.ERROR,{action:l,content:m});},reload:function k(l){h.inform(j.RELOAD,{reloadUrl:l||''});i.inform(j.RELOAD,{reloadUrl:l||''});},reloadOtherPlugins:function k(l,m){i.inform(j.RELOAD,{reloadUrl:'',reload:l||'',identifier:m||''});}};f.exports=j;}),null);
__d('StrSet',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$StrSet2={};this.$StrSet1=0;if(i)this.addAll(i);}h.prototype.add=function(i){'use strict';if(!Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){this.$StrSet2[i]=true;this.$StrSet1++;}return this;};h.prototype.addAll=function(i){'use strict';i.forEach(this.add,this);return this;};h.prototype.remove=function(i){'use strict';if(Object.prototype.hasOwnProperty.call(this.$StrSet2,i)){delete this.$StrSet2[i];this.$StrSet1--;}return this;};h.prototype.removeAll=function(i){'use strict';i.forEach(this.remove,this);return this;};h.prototype.toArray=function(){'use strict';return Object.keys(this.$StrSet2);};h.prototype.toMap=function(i){'use strict';var j={};Object.keys(this.$StrSet2).forEach(function(k){j[k]=typeof i=='function'?i(k):i||true;});return j;};h.prototype.contains=function(i){'use strict';return Object.prototype.hasOwnProperty.call(this.$StrSet2,i);};h.prototype.count=function(){'use strict';return this.$StrSet1;};h.prototype.clear=function(){'use strict';this.$StrSet2={};this.$StrSet1=0;return this;};h.prototype.clone=function(){'use strict';return new h(this);};h.prototype.forEach=function(i,j){'use strict';Object.keys(this.$StrSet2).forEach(i,j);};h.prototype.map=function(i,j){'use strict';return Object.keys(this.$StrSet2).map(i,j);};h.prototype.some=function(i,j){'use strict';return Object.keys(this.$StrSet2).some(i,j);};h.prototype.every=function(i,j){'use strict';return Object.keys(this.$StrSet2).every(i,j);};h.prototype.filter=function(i,j){'use strict';return new h(Object.keys(this.$StrSet2).filter(i,j));};h.prototype.union=function(i){'use strict';return this.clone().addAll(i);};h.prototype.intersect=function(i){'use strict';return this.filter(function(j){return i.contains(j);});};h.prototype.difference=function(i){'use strict';return i.filter(function(j){return !this.contains(j);}.bind(this));};h.prototype.equals=function(i){'use strict';var j=function n(o,p){return o===p?0:o<p?-1:1;},k=this.toArray(),l=i.toArray();if(k.length!==l.length)return false;var m=k.length;k=k.sort(j);l=l.sort(j);while(m--)if(k[m]!==l[m])return false;return true;};f.exports=h;}),null);
__d('PlatformBaseVersioning',['PlatformVersions','getObjectValues','StrSet','invariant'],(function a(b,c,d,e,f,g,h,i,j,k){var l=new j(i(h.versions)),m=location.pathname,n=m.substring(1,m.indexOf('/',1)),o=l.contains(n)?n:h.versions.UNVERSIONED;function p(s,t){if(t==h.versions.UNVERSIONED)return s;l.contains(t)||k(0);if(s.indexOf('/')!==0)s='/'+s;return '/'+t+s;}function q(s){if(l.contains(s.substring(1,s.indexOf('/',1))))return s.substring(s.indexOf('/',1));return s;}var r={addVersionToPath:p,getLatestVersion:function s(){return h.LATEST;},versionAwareURI:function s(t){return t.setPath(p(t.getPath(),o));},versionAwarePath:function s(t){return p(t,o);},getUnversionedPath:q};f.exports=r;}),null);
__d('PlatformWidgetEndpoint',['PlatformBaseVersioning'],(function a(b,c,d,e,f,g,h){function i(n,o){return h.versionAwarePath('/dialog'+'/'+n+(o?'/'+o:''));}function j(n,o){return h.versionAwarePath('/plugins'+'/'+n+(o?'/'+o:''));}function k(n){return /^\/plugins\//.test(h.getUnversionedPath(n));}function l(n){return /^\/dialog\//.test(h.getUnversionedPath(n));}var m={dialog:i,plugins:j,isPluginEndpoint:k,isDialogEndpoint:l};f.exports=m;}),null);
__d('PluginFlyout',['Arbiter','Button','CSS','DOM','DOMEvent','DOMEventListener','Focus','FormSubmit','Plugin','TextAreaControl','csx'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=h.SUBSCRIBE_NEW,t=h.subscribe,u=h.inform,v=function x(y,z){return m.add(y,'click',z);};function w(x,y,z){var aa=this,ba=t(p.CONNECT,function(event,ca){h.unsubscribe(ba);aa.init(x,y,z);aa.connect(event,ca);},s);t(p.DIALOG,function(){aa.init(x,y,z);aa.toggle();},s);}Object.assign(w.prototype,{init:function x(y,z,aa){if(this.initialized)return;this.initialized=true;k.appendContent(y,JSON.parse(aa));var ba=k.find(y,'form'),ca=k.find(ba,"._56zw"),da=k.find(ba,"._56zx"),ea=k.find(ba,"._42x4"),fa=q.getInstance(ea);m.add(ea,'keyup',function(ja){i.setEnabled(ca,!!fa.getValue());});m.add(window,'keydown',function(ja){if(ja.keyCode===27)ha();});m.add(ba,'submit',function(ja){new l(ja).kill();o.send(ba);});var ga=z==='tiny'?k.find(document.body,'.pluginPostFlyoutPrompt'):null;this.flyout=y;this.form=ba;this.post_button=ca;this.prompt=ga;var ha=this.hide.bind(this),ia=this.show.bind(this);v(da,function(ja){new l(ja).kill();ha();});if(ga)v(ga,function(ja){new l(ja).kill();ia();});t(p.CONNECT,this.connect.bind(this),s);t(p.DISCONNECT,function(){ha();},s);t(w.SUCCESS,function(){ha();if(ga)j.hide(ga);},s);t(p.ERROR,function(event,ja){if(ja.action!=='comment')return;k.setContent(k.find(ba,"._56zy"),ja.content);j.hide(ca);},s);},connect:function x(event,y){if(y.crossFrame)return;if(this.prompt)j.show(this.prompt);if(!y.story_fbid)this.show();},show:function x(){this.shown=true;j.show(this.flyout);j.show(this.post_button);var y=k.scry(this.form,"._5jjo");if(y){n.set(y[0]);}else n.set(this.form.comment);u(w.SHOW);},hide:function x(){this.shown=false;j.hide(this.flyout);u(w.HIDE);},toggle:function x(){if(this.shown){this.hide();}else this.show();}});Object.assign(w,{SUCCESS:'platform/plugins/flyout/success',SHOW:'platform/plugins/flyout/show',HIDE:'platform/plugins/flyout/hide',success:function x(){u(w.SUCCESS);}});f.exports=w;}),null);
__d('PluginMessage',['DOMEventListener'],(function a(b,c,d,e,f,g,h){var i={listen:function j(){h.add(window,'message',function(event){if(/\.facebook\.com$/.test(event.origin)&&/^FB_POPUP:/.test(event.data)){var k=JSON.parse(event.data.substring(9));if('reload' in k&&/^https?:/.test(k.reload))document.location.replace(k.reload);}});}};f.exports=i;}),null);
__d('PluginOptin',['DOMEvent','DOMEventListener','PluginMessage','PopupWindow','URI','UserAgent_DEPRECATED','PlatformWidgetEndpoint','PluginLoggedOutUserTypedLogger'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(q,r){Object.assign(this,{return_params:l.getRequestURI().getQueryData(),login_params:{},optin_params:{},plugin:q,api_key:r});this.addReturnParams({ret:'optin'});this.login_params.nux=false;delete this.return_params.hash;}Object.assign(p.prototype,{addReturnParams:function q(r){Object.assign(this.return_params,r);return this;},addLoginParams:function q(r){Object.assign(this.login_params,r);return this;},addOptinParams:function q(r){Object.assign(this.optin_params,r);return this;},start:function q(){var r=this.api_key||127760087237610,s=new l(n.dialog('plugin.optin')).addQueryData(this.optin_params).addQueryData({app_id:r,secure:l.getRequestURI().isSecure(),social_plugin:this.plugin,return_params:JSON.stringify(this.return_params),login_params:JSON.stringify(this.login_params)});if(m.mobile()){s.setSubdomain('m');}else s.addQueryData({display:'popup'});if(this.return_params.act!==null&&this.return_params.act==='send')new o().setPluginAppID(r).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();this.popup=k.open(s.toString(),420,450);j.listen();return this;}});p.starter=function(q,r,s,t){var u=new p(q);u.addReturnParams(r||{});u.addLoginParams(s||{});u.addOptinParams(t||{});return u.start.bind(u);};p.listen=function(q,r,s,t,u){i.add(q,'click',function(v){new h(v).kill();p.starter(r,s,t,u)();});};f.exports=p;}),null);
__d('PluginConnectButton',['Arbiter','CSS','DOM','DOMDimensions','DOMEvent','DOMEventListener','Focus','FormSubmit','PlatformWidgetEndpoint','Plugin','PluginConnectButtonType','PluginFlyout','PluginOptin','Style','URI','csx','cx','getElementPosition'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){var z=h.SUBSCRIBE_NEW,aa=h.subscribe,ba=function da(ea,fa){return m.add(ea,'click',fa);};function ca(da){this.config=da;this.busy=false;var ea=j.find(da.form,'.pluginConnectButton');this.buttons=ea;this.node_connected=j.find(ea,'.pluginConnectButtonConnected');this.node_disconnected=j.find(ea,'.pluginConnectButtonDisconnected');var fa=function(ha){new l(ha).kill();if(!this.busy){this.submit();this.busy=this.canpersonalize;}}.bind(this);ba(this.node_disconnected,fa);if(da.buttontype===r.BLUE_BASE){ba(j.find(ea,'.pluginButtonX button'),fa);}else if(da.buttontype===r.WHITE_BASE)ba(this.node_connected,fa);ba(this.node_connected,function(ha){return h.inform(q.DIALOG,ha);});var ga=this.update.bind(this);aa(q.CONNECT,ga,z);aa(q.DISCONNECT,ga,z);aa(q.ERROR,this.error.bind(this),z);aa('Connect.Unsafe.xd/reposition',this.flip.bind(this));aa(s.HIDE,this.hideFlyout.bind(this));if(da.autosubmit)setTimeout(this.submit.bind(this),0);}Object.assign(ca.prototype,{update:function da(ea,event){this.busy=false;var fa=this.config;if(event.identifier!==fa.identifier)return;var ga=ea===q.CONNECT,ha=p.plugins(fa.plugin);ha+='/'+(!ga?'connect':'disconnect');i[ga?'show':'hide'](this.node_connected);i[ga?'hide':'show'](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==='button'){var ja=ga?this.node_connected:this.node_disconnected,ka=j.find(ja,'button');ka.disabled=false;n.set(ka);}}catch(ia){}fa.connected=ga;fa.form.setAttribute('action',ha);fa.form.setAttribute('ajaxify',ha);},error:function da(event,ea){this.busy=false;if(ea.action in {connect:1,disconnect:1}){j.setContent(this.buttons,ea.content);var fa=j.scry(this.buttons,'.confirmButton');if(fa.length===1)n.set(fa[0]);}},submit:function da(){if(!this.config.canpersonalize)return this.login();o.send(this.config.form);this.fireStateToggle();},fireStateToggle:function da(){var ea=this.config;if(ea.connected){q.disconnect(ea.identifier);}else q.connect(ea.identifier);},login:function da(){var ea=this.config.plugin;new t(ea,v.getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).addLoginParams({social_plugin_action:this.config.pluginaction}).start();},flip:function da(ea,fa){var ga=j.scry(document.body,"._4xn8");if(ga.length===0){return;}else ga=ga[0];var ha=j.scry(this.config.form,'.pluginConnectButtonConnected .pluginButtonIcon'),ia=u.get(ha[0],'display')!=='none'?ha[0]:ha[1],ja=j.find(document.body,'.pluginConnectButtonLayoutRoot'),ka;if(fa.type==='reposition'){i.addClass(ja,"_1f8a");u.set(ja,'padding-left',450-ja.offsetWidth+'px');i.removeClass(ja,"_1f8b");ka=y(ia).x+k.getElementDimensions(ia).width/2-6;}else{i.addClass(ja,"_1f8b");u.set(ja,'padding-left','0px');i.removeClass(ja,"_1f8a");ka=6;}u.set(ga,'left',ka+'px');},hideFlyout:function da(){n.set(this.connected?this.node_disconnected:this.node_connected);}});f.exports=ca;}),null);
__d('UnverifiedXD',['XD'],(function a(b,c,d,e,f,g){var h=c('XD').UnverifiedXD;f.exports=h;}),null);
__d('PluginResize',['Locale','Log','UnverifiedXD','getOffsetParent','getStyleProperty'],(function a(b,c,d,e,f,g,h,i,j,k,l){function m(q){q=q||document.body;var r=0,s=k(q);if(h.isRTL()&&s){r=s.offsetWidth-q.offsetLeft-q.offsetWidth;}else if(!h.isRTL())r=q.offsetLeft;return n(q)+r;}function n(q){return Math.ceil(parseFloat(l(q,'width')))||q.offsetWidth;}function o(q){q=q||document.body;return q.offsetHeight+q.offsetTop;}function p(q,r,event,s){this.calcWidth=q||m;this.calcHeight=r||o;this.width=undefined;this.height=undefined;this.reposition=!!s;this.event=event||'resize';}Object.assign(p.prototype,{resize:function q(){var r=this.calcWidth(),s=this.calcHeight();if(r!==this.width||s!==this.height){i.debug('Resizing Plugin: (%s, %s, %s, %s)',r,s,this.event,this.reposition);this.width=r;this.height=s;j.send({type:this.event,width:r,height:s,reposition:this.reposition});}return this;},auto:function q(r){setInterval(this.resize.bind(this),r||250);return this;}});p.auto=function(q,event,r){return new p(m.bind(null,q),o.bind(null,q),event).resize().auto(r);};p.autoHeight=function(q,r,event,s){return new p(function(){return q;},o.bind(null,r),event).resize().auto(s);};p.getElementWidth=n;f.exports=p;}),null);
__d('PluginConnectButtonResize',['DOMDimensions','DOMQuery','PluginResize','Style','getElementPosition'],(function a(b,c,d,e,f,g,h,i,j,k,l){function m(n,o,p){if(p)k.set(n,'width',p+'px');j.auto(n,'resize.flow');function q(){var r=i.scry(document.body,'.uiTypeaheadView')[0];if(!r)return {x:0,y:0};var s=l(r),t=h.getElementDimensions(r);return {x:s.x+t.width,y:s.y+t.height};}new j(function(){return (Math.max(j.getElementWidth(n),o&&o.offsetWidth,q().x));},function(){return (Math.max(n.offsetHeight,o?o.offsetHeight+o.offsetTop:0,q().y));},'resize.iframe',true).resize().auto();}f.exports=m;}),null);
__d('PluginConnectButtonWrapIconButton',['Arbiter','DOM','Event','Focus','FormSubmit','PlatformWidgetEndpoint','Plugin','PluginOptin','URI'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q={_connected:false,_form:HTMLElement,_href:String,_button:Object,_plugin:String,_submitRequest:Object,initializeButton:function r(s,t,u,v,w,x,y,z,aa,ba){this._connected=u;this._form=s;this._href=x;this._button=t;this._plugin=y;this._submitRequest=null;this._connecttip=aa;this._disconnecttip=ba;if(v){j.listen(s,'click',function(ca){ca.preventDefault();this.submit();}.bind(this));if(w)setTimeout(function(){this.submit();this._button.toggleButton();}.bind(this),0);h.subscribe(n.CONNECT,this._updatePlugin.bind(this));h.subscribe(n.DISCONNECT,this._updatePlugin.bind(this));h.subscribe(n.ERROR,function(ca,da){return this._handleError(da);}.bind(this));}else j.listen(this._form,'click',function(ca){ca.preventDefault();new o(y,p.getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).addLoginParams({social_plugin_action:z}).start();});},submit:function r(){if(this._submitRequest!==null){this._submitRequest.clearStatusIndicator();this._submitRequest.abort();}this._submitRequest=l.send(this._form);if(this._connected){n.disconnect(this._href);}else n.connect(this._href);},_updatePlugin:function r(s,t){if(t.identifier!==this._href)return;var u=s===n.CONNECT;if(u!==this._button.isActivated())this._button.toggleButton();this._connected=u;this._toggleFormAction();this._button.setTitle(u?this._disconnecttip:this._connecttip);},_toggleFormAction:function r(){var s=m.plugins(this._plugin)+'/'+(this._connected?'disconnect':'connect');this._form.setAttribute('action',s);this._form.setAttribute('ajaxify',s);},_handleError:function r(s){i.setContent(this._form,s.content);var t=i.scry(this._form,'.confirmButton');if(t.length===1)k.set(t[0]);}};f.exports=q;}),null);
__d('PluginConnection',['Arbiter','CSS','Plugin'],(function a(b,c,d,e,f,g,h,i,j){var k=function l(){};Object.assign(k.prototype,{init:function l(m,n,o,event){event=event||j.CONNECT;this.identifier=m;this.element=n;this.css=o;h.subscribe([j.CONNECT,j.DISCONNECT],function(p,q){if(m===q.href)i[p===event?'addClass':'removeClass'](n,o);return true;});return this;},connected:function l(){return i.hasClass(this.element,this.css);},connect:function l(){return h.inform(j.CONNECT,{href:this.identifier},h.BEHAVIOR_STATE);},disconnect:function l(){return h.inform(j.DISCONNECT,{href:this.identifier},h.BEHAVIOR_STATE);},toggle:function l(){return this.connected()?this.disconnect():this.connect();}});k.init=function(l){for(var m,n=0;n<l.length;n++){m=new k();m.init.apply(m,l[n]);}};f.exports=k;}),null);
__d('formatNumber',['intlNumUtils'],(function a(b,c,d,e,f,g,h){function i(j,k){return h.formatNumber(j,k);}i.withThousandDelimiters=h.formatNumberWithThousandDelimiters;f.exports=i;}),null);
__d('intlSummarizeNumber',['fbt','formatNumber'],(function a(b,c,d,e,f,g,h,i){function j(k){var l=arguments.length<=1||arguments[1]===undefined?0:arguments[1];k=parseFloat(k.toFixed(l));if(Math.abs(k)<1000)return i(k,l);k=parseFloat((k/1000).toFixed(l||1));if(Math.abs(k)<1000)return String(h._("{number}K",[h.param('number',i(k,l||k%1&&1))]));k=parseFloat((k/1000).toFixed(l||1));if(Math.abs(k)<1000)return String(h._("{number}M",[h.param('number',i(k,l||k%1&&1))]));k=parseFloat((k/1000).toFixed(l||1));return String(h._("{number}B",[h.param('number',i(k,l||k%1&&1))]));}f.exports=j;}),null);
__d('PluginIconButton',['CSS','DOM','Event','intlSummarizeNumber','invariant','fbt'],(function a(b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p,q,r,s){'use strict';r===null||q!==null||l(0);this.$PluginIconButton1=o;this.$PluginIconButton2=q;this.$PluginIconButton3=r;this.$PluginIconButton4=s;if(p===false){j.listen(o,'click',function(){return this.toggleButton();}.bind(this));j.listen(o,'toggle',function(){return this.toggleButton();}.bind(this));if(this.$PluginIconButton4)j.listen(o,'mouseout',function(){return h.removeClass(this.$PluginIconButton1,'stop_hoverx');}.bind(this));}}n.prototype.toggleButton=function(){'use strict';if(h.hasClass(this.$PluginIconButton1,'active')===false){h.addClass(this.$PluginIconButton1,'active');if(this.$PluginIconButton4)h.addClass(this.$PluginIconButton1,'stop_hoverx');this.$PluginIconButton5(true);h.addClass(this.$PluginIconButton1,'is_animating');setTimeout(function(){return h.removeClass(this.$PluginIconButton1,'is_animating');}.bind(this),240);}else{h.removeClass(this.$PluginIconButton1,'active');this.$PluginIconButton5(false);}};n.prototype.setTitle=function(o){'use strict';this.$PluginIconButton1.setAttribute('title',o);};n.prototype.$PluginIconButton5=function(o){'use strict';var p=function q(r){return m._("{count}",[m.param('count',k(r,0))]);};if(this.$PluginIconButton3!=null&&this.$PluginIconButton3<1000){this.$PluginIconButton3=o?this.$PluginIconButton3+1:this.$PluginIconButton3-1;i.setContent(this.$PluginIconButton2,p(this.$PluginIconButton3));}};n.prototype.isActivated=function(){'use strict';return h.hasClass(this.$PluginIconButton1,'active');};f.exports=n;}),null);
__d('PluginReturn',['Arbiter','Log','PlatformDialog','Plugin','URI','invariant','PlatformWidgetEndpoint'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n){h.subscribe(j.RESPONSE,function(event,p){if(p.error_code){i.debug('Plugin Return Error (%s): %s',p.error_code,p.error_message||p.error_description);return;}k.reload(p.plugin_reload);});var o={auto:function p(){h.subscribe(k.RELOAD,function(event,q){var r=typeof q=='object'?q.reloadUrl:q;o.reload(r);});},syncPlugins:function p(){h.subscribe(k.RELOAD,function(event,q){if(q.crossFrame)o.reload(q.reloadUrl,q.reload,q.identifier);});},reload:function p(q,p,r){var s=l.getRequestURI().removeQueryData('ret').removeQueryData('act').removeQueryData('hash').addQueryData('reload',p).addQueryData('id',r);if(q){var p=new l(q);n.isPluginEndpoint(p.getPath())||m(0);s.setPath(p.getPath()).addQueryData(p.getQueryData());}window.location.replace(s.toString());}};f.exports=o;}),null);
__d("XSharePluginLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/platform\/plugin\/share\/logging\/",{});}),null);
__d('PluginShareActions',['AsyncRequest','Event','UnverifiedXD','PluginShareLogTypes','XSharePluginLoggingController'],(function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';var m={init:function n(o,p,q,r,s,t,u){i.listen(s,'click',function(v){new h().setURI(l.getURIBuilder().getURI()).setData({app_id:t,href:o,layout:p,event:k.CLICK,has_iframe:q,referer_url:r,new_ui:u}).send();});},triggerMobileIframe:function n(o,p){i.listen(p,'click',function(q){j.send({type:'shareTriggerMobileIframe',data:JSON.stringify({href:o})});});}};f.exports=m;}),null);
__d('PluginXDReady',['Arbiter','UnverifiedXD'],(function a(b,c,d,e,f,g,h,i){var j={handleMessage:function k(l){if(!l.method)return;try{h.inform('Connect.Unsafe.'+l.method,JSON.parse(l.params),h.BEHAVIOR_PERSISTENT);}catch(m){}}};b.XdArbiter=j;i.send({xd_action:'plugin_ready',name:window.name});f.exports=null;}),null);