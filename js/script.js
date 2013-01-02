(function($){

	$(window).load(function() {

	  		var images = $('.retina');

	    	images.each(function(i) {

	     	$(this).width($(this).width() / 2);
	    	});

	});

	
	$('.dropdown').hide();

	$('#hygiene').hover(function(){
		$('#hygiene .dropdown').show()
	},
	function(){
		$('#hygiene .dropdown').hide()
	});


	$('#hygiene .dropdown').hover(function(){
		$('#hygiene .dropdown').show()
	},
	function(){$('#hygiene .dropdown').hide()
	});

	$('#bienEtre').hover(function(){
		$('#bienEtre .dropdown').show()
	},
	function(){
		$('#bienEtre .dropdown').hide()
	});


	$('#bienEtre .dropdown').hover(function(){
		$('#bienEtre .dropdown').show()
	},
	function(){$('#bienEtre .dropdown').hide()
	});


		
	$(function() {
  		$('#hautPage a').click(function(){
   	 	$('html,body').animate({scrollTop:0}, 'slow');
    return false;
  });
});

})(jQuery);