// -------------------------------------------------------------------
function ntNotifications(){
this.whatever=1;
}

// -------------------------------------------------------------------
ntNotifications.prototype.display = function (id,title,body,icon,actions){
  Notification.requestPermission().then(function(permission){ 
	if (permission==='granted'){
		var hsw=0;
		try{
			if (hasServiceWorker){
					hsw=1
				}
			} 
		catch(e){}
		if (hsw){
			// has service worker
			navigator.serviceWorker.ready.then(function(registration){
				registration.showNotification(title,{
					tag:id,
					body:body,
					icon:icon,
					actions:actions
					//badge:"",		
				})
			})
		} else {
			// no service worker
			new Notification(title,{
				tag:id,
				body:body,
				icon:icon
				// actions are not allowed here as not a service worker.
				//badge:"",		
			})		
		}
	} else {
		console.log('Notifications permission not granted. [' + permission + ']')
	}	
  })
}	
// -------------------------------------------------------------------
ntNotifications.prototype.listen = function (){
	var _this=this;
	try{
		nts.watch("notification","","notification","notification","notification",function(json){
			if(json["value"]){
				var val = JSON.parse(json["value"])							
				_this.display(val["tag"],val["title"],val["body"],val["icon"],val["actions"])
			}	
		},"")
	} catch(e) {
		console.log('NetTalk WebSockets not enabled')
	}
}

// -------------------------------------------------------------------
ntNotifications.prototype.urlBase64ToUint8Array = function (base64String){
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// -------------------------------------------------------------------
ntNotifications.prototype.subscribe = function (){
	var pubkey = new Uint8Array([0x04,0x86,0xd5,0x00,0x28,0xc0,0xd9,0x14,0x89,0xe0,0xfa,0xde,0xf6,0x98,0xc8,0xaf,0x2c,0xee,0xa5,0xc2,0xdb,0x73,0x0b,0xad,0x00,0x7b,0x72,0x8f,0x2d,0x7e,0x2b,0x9e,0xf9,0xf5,0x75,0x65,0x7c,0x76,0x42,0x95,0x17,0xc6,0xdf,0x0e,0xf0,0x17,0xff,0x34,0x41,0xfa,0xd9,0x7c,0x07,0x64,0x8c,0xd7,0x7b,0x91,0x35,0xf0,0xc2,0x9e,0x91,0x8c,0xa1])
	
var VapidPublicKey2 =  new Uint8Array([0x04,0x44,0x52,0x1a,0xa7,0xd0,0x63,0xf6,0xa3,0x04,0x78,0x3f,0x35,0xfc,0x00,0xf9,0xce,0x6a,0xed,0x8e,0x4e,0x79,0x1b,0x0d,0x40,0x7d,0x52,0x07,0x48,0x23,0xab,0x89,0x7a,0x23,0x12,0x9a,0x74,0xf7,0x59,0x67,0xf5,0x16,0xdc,0x1d,0x9d,0x51,0xae,0xb2,0x43,0xd2,0x42,0xa7,0xfd,0x09,0x0f,0x58,0x05,0x51,0x04,0xea,0xf5,0x5d,0x37,0x97,0x3e]);	
	//console.log(pubkey)
	//console.log(VapidPublicKey2);
	var subscribeOptions = {
		userVisibleOnly: true,
		applicationServerKey: VapidPublicKey2
	}
	//console.log('vpk=' + subscribeOptions.applicationServerKey)
	
	
	navigator.serviceWorker.ready.then(function(registration){
		return registration.pushManager.subscribe(subscribeOptions);
	}).then(function(subscription){
		//console.log(subscription)
		var subJson = JSON.stringify(subscription)
		var subObject = JSON.parse(subJson)
		console.log(subJson)
		//console.log(subo.keys.auth)
		//console.log(sub)
		//console.log(subscription)
		//console.log('ep=' + subscription.endpoint)
		//console.log('auth=' + subscription["keys"])
		$.post('SetNotificationEndPoint','endpoint=' + subObject.endpoint + '&auth=' + subObject.keys.auth + '&p256dh=' + subObject.keys.p256dh)
		
	}).catch(function(error){
		console.log('error')
		console.log(error)
	});	
}	
// -------------------------------------------------------------------
var ntn = new ntNotifications();
