///////////////////////////////////////////////////////
//   
//   jQuery UI Plugin for getUserMedia API
//   Part of NetTalk by CapeSoft 
//   (c) 2019 
//   Does not support IE. Supports Edge, and others.
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntcam", {
	options: {
		id: '',					// contains div name 
		procedure:'',			// the form procedure. Used to upload the image to.
		takeShotButtonId:'',	// button ID - takes a picture when clicked.
		imageId:'',				// <img> element to receive photo when snapshot is taken.
		video:true,
		audio:false,
		autoUpload:true,		//auto upload shots when taken
		width:120,
        height:0,
        streaming:false,
		videoElement: null,
		htracker: null,
		begin:0, // begin on init
		snapshot: document.createElement('canvas')
	},
    snapshots: [],

    stream: null,

//------------------------------------------------------
	hasGetUserMedia: function() {
		return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
	},

//------------------------------------------------------
	_create: function() {      
		//navigator.getUserMedia = (	navigator.getUserMedia || 
		//						navigator.webkitGetUserMedia || 
		//						navigator.mediaDevices.getUserMedia || 
		//						navigator.msGetUserMedia || 
		//						navigator.mozGetUserMedia || 
		//						false);
		//
		//window.AudioContext = (window.AudioContext || window.webkitAudioContext);
		//window.URL = (window.URL ||	window.webkitURL);	
	},
//------------------------------------------------------
	_init: function() {
		this.bindEvents();
		if (this.options.begin){
			this.begin()
		}
	},	
//------------------------------------------------------
	begin: function() {
		this.start();		
	},	
//------------------------------------------------------
	bindEvents: function() {
		var _this=this;
		if (this.options.takeShotButtonId){
			$('#' + this.options.takeShotButtonId).on('click',function(e){_this.takeSnapshot(e)});
		}
		return this;		
	},	
//------------------------------------------------------
	setButton: function(id,action) {
		var _this=this;
		switch(action){		
			case 1:  //Take Pic   
				$('#' + id).on('click',function(e){_this.takeSnapshot(e)});
				break;		
			case 2:  //Upload Pic   
				$('#' + id).on('click',function(e){_this.uploadSnapshot(_this.options.snapshot)});
				break;		
		}	
	},
//------------------------------------------------------
	linkAudio: function() {
		this.audioCtx = new window.AudioContext();
		this.audioStream = this.audioCtx.createMediaStreamSource(this.stream);
		var biquadFilter = this.audioCtx.createBiquadFilter();
		this.audioStream.connect(biquadFilter);
		biquadFilter.connect(this.audioCtx.destination);
		return this;
	},	
//------------------------------------------------------	
	takeSnapshot: function() {
		var	ctx = this.options.snapshot.getContext('2d');

		this.options.snapshot.width  = this.options.videoElement.videoWidth;
		this.options.snapshot.height = this.options.videoElement.videoHeight;

		ctx.drawImage(this.options.videoElement, 0, 0, this.options.videoElement.videoWidth, this.options.videoElement.videoHeight);

		this.snapshots.push(this.options.snapshot);
		this.showSnapshot(this.options.snapshot);
		if (this.options.autoUpload){
			this.uploadSnapshot(this.options.snapshot);
		}	
		ctx = null;
		return this;
	},	
//------------------------------------------------------	
	showSnapshot: function(snapshot) {
		$("#" + this.options.imageId).attr('src',snapshot.toDataURL('image/png'));
		return this;
	},	
//------------------------------------------------------	
	uploadSnapshot: function(snapshot) {
		$.post(this.options.procedure + '_' + this.options.id + '_value','_event_=accepted&ajax=1&_name_=' + this.options.id + '&_image_=' + snapshot.toDataURL('image/png'));
		return this;
	},		
//------------------------------------------------------
	error: function(err) {
		this.options.error = err;
	},	
//------------------------------------------------------	
	start: function() {
		var _this=this;
		if (this.hasGetUserMedia()) {
			const constraints = {
				video: this.options.video,
				audio: this.options.audio
			};
			_this.options.videoElement = document.querySelector('#' + this.options.id)
			navigator.mediaDevices.getUserMedia(constraints)
				.then(function(stream){
						_this.stream = stream;
						_this.options.videoElement.srcObject = stream;
						_this.options.videoElement.onloadedmetadata = function(e) {
							_this.options.videoElement.play;
						}	
					}).catch(function(err){
						console.log('NT-Cam: Error getting stream ' + err + '. Perhaps some other tab is already using the camera?')
					})	
		} else {
			console.log('NT-Cam: getUserMedia() is not supported by your browser');
		}	
		return this;
	},	
//------------------------------------------------------
	stop: function() {
		this.stream.stop();
		return this;
	}	
//------------------------------------------------------
});

$.extend( $.ui.ntcam, {
	version: "@VERSION"
});

})( jQuery );
