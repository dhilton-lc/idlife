// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.cycle2
//= require jquery.cycle2.carousel
//= require_tree .
//= require bootstrap

$(document).ready(function(){
	//About page sliders
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	    // advance the other slideshow
	    slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('#slider-thumbs .cycle-slide').click(function(){
	    var index = $('#thumbs').data('cycle.API').getSlideIndex(this);
	    slideshows.cycle('goto', index);
	});

});