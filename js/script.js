(function(e){"use strict";var t=function(){e(".lienNav").hoverIntent(function(){e(".dropdown",this).show()},function(){e(".dropdown",this).hide()})};var n=function(t){e("html,body").animate({scrollTop:0},"slow");return false};var r=function(t){e("#plus").show();e(".voirPlus").hide()};var i=function(t){e("#imgPanier").css("background-image","url('img/panierRempli.png')")};var s=function(t){e("#clicConnecter").slideDown()};var o=function(){var t=["Hygiène","Déodorants","Livres","Bébé","Déodorant à l'Aloe Vera","Bouteille d'eau filtrante","Clojure","Semelles pour chausson","Couverture de pluie","Gel douche","Beurre de karité","Bougie de massage","Crème confort visage","Couches lavables"];e("#tags").autocomplete({source:t})};var u=function(t){e(this).next(".plusInfos").slideDown()};e(function(){e(".dropdown").hide();t();e("#hautPage a").on("click",n);e("#plus").hide();e(".voirPlus").on("click",r);e(".ajoutPanier").on("click",i);e("#clicConnecter").hide();e(".seConnecter").on("click",s);o;e(".plusInfos").hide();e(".clicPlusInfos").on("click",u)})})(jQuery)