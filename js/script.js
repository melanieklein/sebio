(function($){

	$(window).load(function() {

	  		var images = $('.retina');

	    	images.each(function(i) {

	     	$(this).width($(this).width() / 2);
	    	});

	});

	$('.dropdown').hide();
	$('.lienNav').hoverIntent( 
		function(){
			$('.dropdown', this).show();
		},
		function(){
			$('.dropdown', this).hide();
		});
		
	$(function() {
  		$('#hautPage a').click(function(){
   	 	$('html,body').animate({scrollTop:0}, 'slow');
    return false;
  });
});

})(jQuery);