$(document).ready (function()
	{
		//on initialise le score et le temps restant
		var numScore=0;	
		var scde = 20;

		//si on a cliqué sur le bouton "commencer"
		$("#start").click(function(){
			//on desactive le bouton commencer
			$("#start").attr("disabled","disabled");

			//on lance l'apparition des taupes toutes les 1.5 secondes
			var jeu = setInterval(jouer,1500);
			//on code ce qui se passe pendant le jeu
			var tempsDeJeu = setInterval(function() {
					//le timer diminue
					scde--;
					//on affiche le temps restant
					$("#temps").html(scde);
					//si le jeu est terminé
					if (scde == 0) {
						//on arrete le jeu
						clearInterval(jeu);
						//on arrete le timer
						clearInterval(tempsDeJeu);
						//on dit que c'est terminé
						$("#finJeu").html("Fini!");
					};
					//toutes les secondes
				},1000);
		});

		function jouer(){
			//on initialise les valeurs aleatoires
			//la vitesse a laquelle apparaissent les taupes
			var vitesse = 300 + Math.floor(Math.random() * 600);
			//la durée d'exposition des taupes
			var duree = 500 + Math.floor(Math.random() * 1000);
			//le numero de la taupe
			var numeroDiv = 1 + Math.floor(Math.random() * 3);
			//si c'est la petite taupe
			if(numeroDiv==2)
			{
				//on la fait monter
				$("#taupe"+numeroDiv).animate({
				"marginTop": "-=50px"
				},vitesse)
				//on attend
				.delay(duree)
				//on la fait redescendre
				.animate({
					"marginTop": "+=50px"
				},vitesse);
				//si on avait précedemment clické et que la taupe setait cachée on la fait revenir
				$("#taupe"+numeroDiv).show();
			}
			//meme principe pour les autres taupes
			else
			{
				$("#taupe"+numeroDiv).animate({
				"marginTop": "-=100px"
				},vitesse)
				.delay(duree)
				.animate({
					"marginTop": "+=100px"
				},vitesse);
				$("#taupe"+numeroDiv).show();
			}
		}

		//quand on clique sur la taupe
		$("#taupe1").click(function(){
				//notre score augmente
				numScore ++;
				//on affiche le nouveau score
				$("#score").html(numScore);
				//la taupe file se cacher
				$("#taupe1").hide();
		});
		$("#taupe2").click(function(){
				numScore ++;
				$("#score").html(numScore);
				$("#taupe2").hide();
		});
		$("#taupe3").click(function(){
				numScore ++;
				$("#score").html(numScore);
				$("#taupe3").hide();

		});
		//si on veut remettre le plateau a zero
		$("#reset").click(function(){
			//on reinitialise le compteur de score et on laffiche
			numScore=0;
			$("#score").html(numScore);
			//on reinitialise le timer et on laffiche
			scde = 45;
			$("#temps").html(scde);
			//on enleve l'affichage du mot "fini!"
			$("#finJeu").html("");
			//on reactive le bouton start pour permettre de relancer une partie
			 $("#start").removeAttr("disabled");
		});
		
	});