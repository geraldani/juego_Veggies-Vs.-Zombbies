//esperando a que la ventana esté cargada
window.addEventListener("load", function(){
	//se inicializa el framework
	var Q = window.Q = Quintus({development: true})
	.include("Sprites, Scenes, 2D")
	.setup({
		//tamaño de la pantalla
		width: 1080, 
		height: 720,
		scaleToFit: true //opcion para que se auto-escale dependiendo del tamaño de la pantalla
	});
	//desactivando la gravedad
	Q.gravityX = 0;
	Q.gravityY = 0;

	//Constantes
	Q.SPRITE_SUN = 2;
	Q.SPRITE_ZOMBIE = 4;
	Q.SPRITE_PLANT = 8;
	Q.SPRITE_BULLET = 16;
	Q.SPRITE_GROUND = 32;

	//creando una clase, o expandiedno la clase sprite
	Q.Sprite.extend("Zombie", {
		init: function(p) {//el constructor de la clase
			this._super(p, {
				asset: "zombie4.png",
				type: Q.SPRITE_ZOMBIE,
				vx: -20
			});
			this.add("2d");
		}
	});

	//se iniciliza el escenario, poniendo la imagen de fondo (sprite inicial del fondo)
	Q.scene("level", function(stage){//crea una escena
		var sprite1 = new Q.Sprite({//crea un sprite
			x: 1080/2, // se especifica la pocision desde donde partira la imagen de fondo
			y: 720/2, 
			asset: "background.png", //imagen de fondo (no se indica el nombre de la carpeta porque automaticamente Quintus sabes que la caprta se llama "images", este es el nombre que debe llevar la carpeta, de otro modo no funciona)
			type: Q.SPRITE_GROUND
		});

		//creando instancias de la clase zombie
        var sprite2 = new Q.Zombie({x: 500, y: 600 });    
        var sprite3 = new Q.Zombie({x: 700, y: 100 });
      	var sprite4 = new Q.Zombie({x: 700, y: 600 });
      	var sprite5 = new Q.Zombie({x: 300, y: 500 });

      	//inserta los sprites
		stage.insert(sprite1);
		stage.insert(sprite2);
		stage.insert(sprite3);
		stage.insert(sprite4);
		stage.insert(sprite5);
	});

	//carga el escnario en la pagina 
	Q.load("background.png, sun.png, zombie4.png", function(){
		Q.stageScene("level");//carga la escena
	});
});