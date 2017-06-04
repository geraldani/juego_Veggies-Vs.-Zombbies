//esperando a que la ventana esté cargada
window.addEventListener("load", function(){
	//se inicializa el framework
	var Q = window.Q = Quintus({development: true})
	.include("Sprites, Scenes")
	.setup({
		//tamaño de la pantalla
		width: 1080, 
		height: 720,
		scaleToFit: true //opcion para que se auto-escale dependiendo del tamaño de la pantalla
	});

	//se iniciliza el escenario, poniendo la imagen de fongo
	Q.scene("level", function(stage){//crea una escena
		var sprite1 = new Q.Sprite({//crea un sprite
			x: 1080/2, // se especifica la pocision desde donde partira la imagen de fondo
			y: 720/2, 
			asset: "background.png" //imagen de fondo (no se indica el nombre de la carpeta porque automaticamente Quintus sabes que la caprta se llama "images", este es el nombre que debe llevar la carpeta, de otro modo no funciona)
		});
		stage.insert(sprite1);//inserta el sprite
	});

	//carga el escnario en la pagina 
	Q.load("background.png, sun.png, zombie1.png", function(){
		Q.stageScene("level");//carga la escena
	});
});