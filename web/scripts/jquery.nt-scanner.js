var ntb;
(function( $, undefined ) {

$.widget("ui.ntscanner", {
   // default options
        options: {
			id:"",
			videoId:"",
			canvasId:"",
			resultId:"",
			onDetected:function(code,format){},
			boundingColor:"#FF3B58",
			format: "qrcode",
			followUrl:0,
			minimumTimeGap:0,
			onScanned: function(){},
			soundUrl:""
		},
		state:{
			video:null,
			canvasElement:null,
			canvas:null,
			audioId:null,
			audio:null,
			active:false
		},		
		status: {
			lastData : null,
			lastData1 : null,
			lastData2 : null,
			lastData3 : null
		},
        QuaggaConfig: {
            inputStream: {
                type : "LiveStream",
				name: "",
				target: "",
                constraints: {
                    width: {min: 640},
                    height: {min: 480},
                    aspectRatio: {min: 1, max: 100},
                    facingMode: "environment" // or user
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 4,
            frequency: 10,
            decoder: {
                readers : [{
                    format: "code_128_reader",
                    config: {}
                }]
            },
            locate: true
        },
		
		//------------------------------------------------------
		_create: function() {
			this.init()
		},		
		//------------------------------------------------------
        init: function() {
			ntb = this;
			if (this.options.soundUrl){
				this.state.audioId = this.options.id + '_sound'
				$('#' + this.options.id).append('<audio id="'+this.state.audioId+'"></audio>')			
				this.state.audio = document.getElementById(this.state.audioId);
				this.state.audio.src = this.options.soundUrl;
			}
			if (this.options.begin){
				this.begin()
			}
		},
		//------------------------------------------------------
		begin: function(){
			if (this.options.format=='qrcode'){
				this.initQRcode()
			} else {
				this.initQuagga()
			}			
        },
		//------------------------------------------------------
		vibrate: function(){
			if ("vibrate" in navigator){  // Vibration API supported
				navigator.vibrate(1000);
			}
        },		
		//------------------------------------------------------
		playSound: function(src){
			if(src){
				this.state.audio.src = src;
			}
			if (this.state.audio && this.state.audio.src){
				this.state.audio.play();
			}	
        },		
		//------------------------------------------------------
		initQRcode: function(){
			if (!this.options.videoId){
				this.options.videoId = this.options.id + '_video'
				$('#' + this.options.id).append('<video id="'+this.options.videoId+'"></video>')
			}
			if (!this.options.canvasId){				
				this.options.canvasId = this.options.id + '_canvas'
				$('#' + this.options.id).append('<canvas id="'+this.options.canvasId+'"></canvas>')
			}			
			this.state.video = document.getElementById(this.options.videoId);
			this.state.canvasElement = document.getElementById(this.options.canvasId);
			this.state.canvas = this.state.canvasElement.getContext("2d");
			this.startCamera()
        },
		//------------------------------------------------------
        initQuagga: function() {
			var _this = this;
			this.QuaggaConfig.inputStream.target = '#' + this.options.id
			this.QuaggaConfig.decoder.readers[0].format = this.options.format				
            Quagga.init(_this.QuaggaConfig, function(err) {
                if (err) {
                    console.log(err);
                } else {
					_this.initCameraSelection();
					_this.options.videoId = _this.options.id + '_video'
					_this.options.canvasId = _this.options.id + '_canvas'
					$('#' + _this.options.id).find('video').attr('id',_this.options.videoId)
					$('#' + _this.options.id).find('canvas').attr('id',_this.options.canvasId)
					_this.state.video = document.getElementById(_this.options.videoId);
					_this.state.canvasElement = document.getElementById(_this.options.canvasId);
					_this.state.canvas = _this.state.canvasElement.getContext("2d");
					_this.start();
				}
			})	
        },
		//------------------------------------------------------
		start: function(){
			if (this.options.format=='qrcode'){
				this.startCamera()
			} else {
				Quagga.start();
			}
        },
		//------------------------------------------------------
		stop: function(){
			if (this.options.format=='qrcode'){
				this.stopCamera()
			} else {
				Quagga.stop();
			}
			this.state.active = false;
        },		
		//------------------------------------------------------
		startCamera: function(){
			// Use facingMode: environment to attemt to get the front camera on phones
			this.state.active = true;
			var _this = this;
			navigator.mediaDevices.getUserMedia({
					video: { facingMode: "environment" } 
				}).then(function(stream) {
					_this.state.video.srcObject = stream;
					_this.state.video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
					_this.state.video.play();
					requestAnimationFrame(ntbCheckAnimationFrame);
				});					
        },		
		//------------------------------------------------------
		stopCamera: function(){
			var track = this.state.video.srcObject.getTracks()[0]
			track.stop()
		},	
		//------------------------------------------------------
		checkAnimationFrame: function(result){
			if (this.state.video.readyState === this.state.video.HAVE_ENOUGH_DATA) {
				this.state.canvasElement.height = $('#' + this.options.videoId).height()
				this.state.canvasElement.width = $('#' + this.options.videoId).width()
				if (this.state.canvasElement.height  == 0){
					return;
				}
				this.state.canvas.drawImage(this.state.video, 0, 0, this.state.canvasElement.width, this.state.canvasElement.height);
				var imageData = this.state.canvas.getImageData(0, 0, this.state.canvasElement.width, this.state.canvasElement.height);
				// is it dark?
				if (this.options.format=='qrcode'){
					var qrcode = jsQR(imageData.data, imageData.width, imageData.height, {
						inversionAttempts: "dontInvert",
					});
					if (qrcode) {
						this.drawBoundary(qrcode)
						this.onDetectedQR(qrcode.data)
					}
				} else { // barcode
					if (result) {				
						if (result.box) {
							var xFactor =  $('#' + this.options.videoId).width() / this.state.video.videoWidth;
							var yFactor =  $('#' + this.options.videoId).height() / this.state.video.videoHeight;
							this.drawPath(result.box,xFactor,yFactor,this.options.boundingColor);
						}
					}				
				}				
			}		
		},	
		//------------------------------------------------------
		drawPath: function drawPath(path,xFactor,yFactor,color) {
			this.state.canvas.beginPath();
			this.state.canvas.moveTo(path[0][0] * xFactor, path[0][1] * yFactor);
			for (var j = 1; j < path.length; j++) {
				this.state.canvas.lineTo(path[j][0] * xFactor, path[j][1] * yFactor);
			}
			this.state.canvas.closePath();
			this.state.canvas.strokeStyle = color;
			this.state.canvas.lineWidth = 4;
			this.state.canvas.stroke();	
		},	
		//------------------------------------------------------
		drawBoundary: function(qrcode){		
			this.drawLine(qrcode.location.topLeftCorner, qrcode.location.topRightCorner, this.options.boundingColor);
			this.drawLine(qrcode.location.topRightCorner, qrcode.location.bottomRightCorner, this.options.boundingColor);
			this.drawLine(qrcode.location.bottomRightCorner, qrcode.location.bottomLeftCorner, this.options.boundingColor);
			this.drawLine(qrcode.location.bottomLeftCorner, qrcode.location.topLeftCorner, this.options.boundingColor);
		},
		//------------------------------------------------------
        drawLine: function(begin, end, color) {
			this.state.canvas.beginPath();
			this.state.canvas.moveTo(begin.x, begin.y);
			this.state.canvas.lineTo(end.x, end.y);
			this.state.canvas.lineWidth = 4;
			this.state.canvas.strokeStyle = color;
			this.state.canvas.stroke();
        },		
		//------------------------------------------------------
		onDetectedQR: function(data){
			if (data){
				if (this.status.lastData !== data){
					this.options.onDetected(data,'qrcode');
					this.vibrate()
					this.playSound()
					this.status.lastData = data;
					if (this.options.resultId){
						$('#'+this.options.resultId).val(data).trigger("change")						
					}
					if (this.options.onScanned){
						this.options.onScanned(data)
					}
					if (this.options.followUrl){
						window.location.href = data;	
					}
					if(this.options.minimumTimeGap){
						setTimeout("ntb.resetData()",this.options.minimumTimeGap);
					}
				}		
			}	
		},
		//------------------------------------------------------
		resetData: function(){
			this.status.lastData='';
		},
		//------------------------------------------------------
		// to prevent false reads we want 3 same-reads in a row.
		onDetectedBar: function(result){
			if (result && result.codeResult){
				var code = result.codeResult.code;
				if (this.status.lastData2 === code) {
					if (this.status.lastData1 === code) {
						if (this.status.lastData !== code) { // 3rd and later reads of the value, but only go in if this is a new value.
							this.options.onDetected(code,result.codeResult.format);
							this.vibrate()
							this.playSound()
							if (this.options.resultId){
								$('#'+this.options.resultId).val(code).trigger("change")						
							}
							if (this.options.onScanned){
								this.options.onScanned(code)
							}							
							this.status.lastData = code;
							if(this.options.minimumTimeGap){
								setTimeout("ntb.resetData()",this.options.minimumTimeGap);
							}							
						}
					} else {
						this.status.lastData1 = code // second read of this value
					}					
				} else {
					this.status.lastData2 = code  // first read of this value
					this.status.lastData1 = code	// only 2 reads required, set this to '' for 3 reads.
				}				
			}	
		},
		//------------------------------------------------------
        initCameraSelection: function(){
            var streamLabel = Quagga.CameraAccess.getActiveStreamLabel();
			var _this=this;

            return Quagga.CameraAccess.enumerateVideoDevices()
            .then(function(devices) {
                function pruneText(text) {
                    return text.length > 30 ? text.substr(0, 30) : text;
                }
				if(_this.options.deviceSelectionId){
					var $deviceSelection = document.getElementById('#' + _this.options.deviceSelectionId);
					while ($deviceSelection.firstChild) {
						$deviceSelection.removeChild($deviceSelection.firstChild);
					}
					
					devices.forEach(function(device) {
						var $option = document.createElement("option");
						$option.value = device.deviceId || device.id;
						$option.appendChild(document.createTextNode(pruneText(device.label || device.deviceId || device.id)));
						$option.selected = streamLabel === device.label;
						$deviceSelection.appendChild($option);
					});
				}	
            });
        },
				//------------------------------------------------------
		isItDark: function() {// courtesy of mmgp
											// https://stackoverflow.com/questions/13762864/image-dark-light-detection-client-sided-script
			var fuzzy = 0.1;
			var imageData = this.state.canvas.getImageData(0,0,this.state.canvasElement.width,this.state.canvasElement.height);
			var data = imageData.data;
			var r,g,b, max_rgb;
			var light = 0, dark = 0;

			for(var x = 0, len = data.length; x < len; x+=4) {
				r = data[x];
				g = data[x+1];
				b = data[x+2];

				max_rgb = Math.max(Math.max(r, g), b);
				if (max_rgb < 128){
					dark++;
				} else {
					light++;
				}	
			}

			var dl_diff = ((light - dark) / (this.state.canvasElement.width * this.state.canvasElement.height));
			if (dl_diff + fuzzy < 0){
				return true; /* Dark. */				
			} else {
				return false;  /* Not dark. */
			}	
		},
		//------------------------------------------------------
		setLight: function(turnOn){
		},
		//------------------------------------------------------
		onProcessed: function(result) {	
		},
		//------------------------------------------------------
		destroy: function() {
			$.Widget.prototype.destroy.apply(this, arguments); // default destroy
			// now do other stuff particular to this widget
		}
 });
//------------------------------------------------------
Quagga.onProcessed(function(result) {
	ntb.checkAnimationFrame(result)	
}),
//------------------------------------------------------
Quagga.onDetected(function(result) {
	ntb.onDetectedBar(result)
}); 
//------------------------------------------------------
function ntbCheckAnimationFrame(timestamp) {
	ntb.checkAnimationFrame()	
	if (ntb.state.active){
		requestAnimationFrame(ntbCheckAnimationFrame);
	}
} 
//------------------------------------------------------ 
$.extend( $.ui.ntscanner, {
        version: "@VERSION"
});

})( jQuery );
