///////////////////////////////////////////////////////
//   
//   jQuery Plugin to for bread-crumbs
//   Part of NetTalk by CapeSoft 
//   (c) 2021
//
///////////////////////////////////////////////////////
//
//  Takes a <ul> and turns it into breadcrumbs, mostly via CSS
//
(function( $, undefined ) {

$.widget( "ui.ntbreadcrumbs", {
	options: {
	    id: '',
		ulClass: 'nt-bread',
		liClass: 'nt-left nt-whole-crumb',
		leftClass: 'nt-left nt-crumb-left',
		rightClass: 'nt-left nt-crumb-right',
		aClass: 'nt-left nt-crumb nt-fakeget '  ,
		firstAClass: 'nt-crumb-first ui-corner-left ',
		middleAClass: '',
		lastAClass:  'nt-crumb-last ui-corner-right '
	},

//------------------------------------------------------
	_create: function() {
	  var _this = this;
	},
//------------------------------------------------------
	addCrumb: function(text,url,css) {
		if(url=='' || url==undefined){
			url = '#'
		}
		var numLi = $("#" + this.options.id + ' li').length
		if ( numLi == 0 ) {
			// add first crumb
			$("#" + this.options.id).append('<li class="'+ css + ' ' + this.options.liClass +'">' +
											'<a class="' + this.options.aClass + this.options.firstAClass + this.options.lastAClass + '" href="' + url + '">' + text + '</a>' + 
											'</li>');
		} else {
			// update current last crumb
			$("#" + this.options.id + ' li:last-child').append('<div class="' + this.options.rightClass+ '"></div>')
			$("#" + this.options.id + ' li:last-child a').removeClass(this.options.lastAClass).addClass(this.options.middleAClass)
			// and add new last crumb
			numLi += 1
			$("#" + this.options.id).append('<li class="'+ css + ' ' + this.options.liClass +'">' +
											'<div class="' + this.options.leftClass+ '"></div>' +
											'<a class="' + this.options.aClass + this.options.lastAClass + '" href="' + url + '">' + text + '</a>' +
											'</li>');
		}	
	},
//------------------------------------------------------
	removeCrumb: function(cid) {
		var numLi = $("#" + this.options.id + ' li').length;
		if(cid==undefined){
			cid=numLi;
		}
		if (cid==1){
			// first
			$("#" + this.options.id + ' li:first-child').remove()
			$("#" + this.options.id + ' li:first-child div:first').remove()
			$("#" + this.options.id + ' li:first-child a').removeClass(this.options.middleAClass).addClass(this.options.firstAClass)
		} else if (cid==numLi){		
			// last			
			$("#" + this.options.id + ' li:last-child').remove()
			$("#" + this.options.id + ' li:last-child a').removeClass(this.options.middleAClass).addClass(this.options.lastAClass)
			$("#" + this.options.id + ' li:last-child div:last').remove()
		} else {
			// middle 
			$("#" + this.options.id + ' li:nth-child('+cid+')').remove()
		}
	},
//------------------------------------------------------
	removeAllCrumbs: function() {
		$("#" + this.options.id + ' li').remove()
	},	
//------------------------------------------------------
	replaceCrumb: function(cid,newtext) {
		$("#" + this.options.id + ' li:nth-child('+cid+') a').html(newtext)
	}	
//------------------------------------------------------
});

$.extend( $.ui.ntbreadcrumbs, {
	version: "@VERSION"
});

})( jQuery );

///////////////////////////////////////////////////////
// end ntwiz
///////////////////////////////////////////////////////
