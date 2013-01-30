( function ( $ ) {
	"use strict";

	//Global vars

	//methods

    $(window).load(function() {
	  		var images = $('.retina');
	    	images.each(function(i){
	     	$(this).width($(this).width() / 2);
	    	});
	});

	var dropdown = function(){
		$('.lienNav').hoverIntent( 
			function(){
				$('.dropdown', this).show();
			},
			function(){
				$('.dropdown', this).hide();
			}
		);
	};

	var topPage = function(e){
   	 	$('html,body').animate({scrollTop:0}, 'slow');
    	return false;
	};


	var seeMore = function(e){
		$('#plus').show();
		$('.voirPlus').hide();
	};

	var changeImg = function(e){
		$('#imgPanier').css('background-image',"url('img/panierRempli.png')");
	};

	var connexion = function(e){
		$('#clicConnecter').slideDown();
 	};


 	var autocompletion = function(){
	    var availableTags = [
	      "Hygiène",
	      "Déodorants",
	      "Livres",
	      "Bébé",
	      "Déodorant à l'Aloe Vera",
	      "Bouteille d'eau filtrante",
	      "Clojure",
	      "Semelles pour chausson",
	      "Couverture de pluie",
	      "Gel douche",
	      "Beurre de karité",
	      "Bougie de massage",
	      "Crème confort visage",
	      "Couches lavables"
	    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  };


  	$(function(){
  	//Routines
	$('.dropdown').hide();
	dropdown();
	$('#hautPage a').on('click', topPage);
	$('#plus').hide();
	$('.voirPlus').on('click', seeMore);
	$('.ajoutPanier').on('click', changeImg);
	$('#clicConnecter').hide();
	$('.seConnecter').on('click', connexion);
	autocompletion;
	});

})(jQuery);