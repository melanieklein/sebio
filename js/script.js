(function($){

	$(window).load(function() {

	  		var images = $('.retina');

	    	images.each(function(i) {

	     	$(this).width($(this).width() / 2);
	    	});

	});

	
	$('.dropdown').hide();

	$('#hygiene').hover(function(){
		$('.dropdown').show()
	},
	function(){
		$('.dropdown').hide()
	});


	$('.dropdown').hover(function(){
		$('.dropdown').show()
	},
	function(){$('.dropdown').hide()
	});


		
	$(function() {
  		$('#hautPage a').click(function(){
   	 	$('html,body').animate({scrollTop:0}, 'slow');
    return false;
  });
});

})(jQuery);