

$(document).ready(function(){

  $(".slider_one").owlCarousel(
  	{
    	loop:true,
    	margin:70,
    	nav:false,
    	responsiveClass:true,
    	responsive:{
        	0:{
            	items:1,
            	dots:true,
            	autoHeight:true
        	},
        	600:{
            	items:2,
        	},
        	1000:{
            	items:3,
            	loop:false
        	}
    	}
	});

	$( "#schedule_button" ).click(function() {
  		$( "schedule" ).slideToggle( 400, function(){});
	});

});






