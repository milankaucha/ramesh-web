$(document).ready(function(){


      var header = $(".header");

	    $(window).scroll(function() {  

	        var scroll = $(window).scrollTop();
	    
	        if (scroll > 100) {
	            header.addClass("header_fixed");	            
	        } 
	        if(scroll < 1) {
	            header.removeClass("header_fixed");
	        } 
	    
	    });

});