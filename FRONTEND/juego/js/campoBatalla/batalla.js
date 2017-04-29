var personajeJugador;//guarda el sprite del personaje elegido
var personajeComputadora//guarda el sprite del personaje asignado a un escenario
var cursores;//crea cursores
var counter;
var ti;
var danoH;//daño del heroe
var danoV; //daño del villano
var musicButton;

//arreglo para saber que accion esta ejecutando el Heroe
//[Defensa,ataqueNormal,ataquePersonalidad]
var movH;

//arreglo para saber que accion esta ejecutando el villano
//[Defensa,ataqueNomal,ataquePersonalidad,ataquePlagio]
var movV;

var ataquePlagio;
var ataquePersonalidadV;
var idPJ="idPDos";
var idPC="idPDos";
//es  200 es temporal y varia dependiendo de la pantalla 
var costoAtaqueJ=personajesBuenos[idPJ].energia*200;
var costoAtaqueC=personajesMalos[idPJ].energia[0]*200;
var costoPlagioC=personajesMalos[idPJ].energia[1]*200;
var ataquePersonalidadJ;
var ataquePersonalidadC;
var secuencia;//pregunta si el villano esta realizando un movimiento
var movimientoComputadora;//lleva el movimiento que realiza el villano
var primeImpacto;//se usa para que el ataque plagio solo reste vida una vez
var indice;//decide que secuencia de ataque realiza el villano
var fondogame;
var joystick;
var button;

var batalla = {
	preload : function() {
		this.preloadBar=this.add.sprite(this.game.world.centerX,this.game.world.centerY,'barraCarga');
		this.load.setPreloadSprite(this.preloadBar);
		funcionesBatalla.cargar(idPJ,idPC);
        game.load.audio('sonidoBoton', '../img/Componentes/sonidos/Botones/1.mp3');
	},

	create : function() {	
        musicButton = game.add.audio('sonidoBoton');
		counter = 0;
		ti = 0;
		danoH=personajesBuenos[idPJ].daño;
		danoV=personajesMalos[idPC].daño;
		movH=[false,false,false];
		movV=[false,false,false,false];
		costoAtaqueJ=personajesBuenos[idPJ].energia*200;
		costoAtaqueC=personajesMalos[idPJ].energia[0]*200;
		costoPlagioC=personajesMalos[idPJ].energia[1]*200;
		secuencia=false;
 		movimientoComputadora="adelante";
		primeImpacto=false;

		
		
		ataquePersonalidadC = game.add.weapon(10, 'ataquePersonalidadV');
	 	fondogame = game.add.sprite(0, 0, 'fondo');
		personajeComputadora = game.add.sprite(650, 450, 'personajeComputadora');
		personajeComputadora.anchor.setTo(0.5);
		personajeJugador = game.add.sprite(150, 450, 'personajeJugador');
		personajeJugador.anchor.setTo(0.5);
		funcionesBatalla.iniciarSprite(personajeJugador);
		funcionesBatalla.iniciarSprite(personajeComputadora);

		if(dispositivoMovil){
			 //Add the VirtualGamepad plugin to the game
        	 gamepad = game.plugins.add(Phaser.Plugin.VirtualGamepad);
        	// Add a joystick to the game (only one is allowed right now)
        	 joystick = gamepad.addJoystick(125, 500, 1.2, 'gamepad');       
        	// Add a button to the game (only one is allowed right now)
        	 button = gamepad.addButton(600, 500, 1, 'gamepad');
			// cursores = game.input.keyboard.createCursorKeys();
			// esp = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		}else{
			cursores = game.input.keyboard.createCursorKeys();
			esp = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		}

		game.add.text(145,20,personajesBuenos[idPJ].nombre,{fill:'white'});
		game.add.text(460,20,personajesMalos[idPC].nombre,{fill:'white'});

		var avatarPersonajeComputadora = game.add.sprite(665, 30, 'avatarPersonajeComputadora');
		avatarPersonajeComputadora.scale.setTo(0.6);
		var avatarPersonajeJugador = game.add.sprite(10, 30, 'avatarPersonajeJugador');
		avatarPersonajeJugador.scale.setTo(0.6);        
        
		var pausa = game.add.button(365, 20, 'pausa', this.pausar,this);
		pausa.inputEnabled=true;
		//funcion para pausar
		pausa.events.onInputUp.add(function () {
            musicButton.play();
			funcionesBatalla.pausar()
        });
        game.input.onDown.add(unpause, self);
		//funcion para reaunudar
        function unpause(event){
            musicButton.play();
        	funcionesBatalla.unpause(event);
        }  
		pausa.scale.setTo(0.4, 0.4);
		text = game.add.text(365, 110, 'time: 99', {
			fill : "white",
			backgroundColor : 'rgba(0,0,0,0.5)'
		});
		vidaBlancoJugador = new Phaser.Rectangle(144, 53, 200, 20);//primer barra blanca de vida
		vidaNegroJugador = new Phaser.Rectangle(143, 52, 202, 22);//primer borde negro de vida 
		vidaRojoJugador = new Phaser.Rectangle(144, 53, 200, 20);//primer barra roja  de vida

		energiaBlancaJugador = new Phaser.Rectangle(144, 79, 200, 20);//primer barra blanca de energia
		energiaNegroJugador = new Phaser.Rectangle(143, 78, 202, 22);//primer borde negro de energia
		energiaVerdeJugador = new Phaser.Rectangle(144, 79, 200, 20);//primer barra verde de energia

		vidaBlancoComputadora = new Phaser.Rectangle(460, 53, 200, 20);//segunda barra blanca de vida
		vidaNegroComputadora = new Phaser.Rectangle(459, 52, 200, 22);//segunda borde negro de vida 
		vidaRojoComputadora = new Phaser.Rectangle(460, 53, 200, 20);//segunda barra roja		

		energiaBlancaComputadora = new Phaser.Rectangle(460, 79, 200, 20);
		energiaNegroComputadora = new Phaser.Rectangle(459, 78, 200, 22);
		energiaVerdeComputadora = new Phaser.Rectangle(460, 79, 200, 20);
		
        var botonPoder = game.add.button(145, 105, 'botonPoder', funcionesBatalla.clickBotonPoder, 1, 1, 0, 2);

   		
    },
    
	render : function() {
		game.debug.geom(vidaNegroJugador, '#000', false);
		game.debug.geom(vidaBlancoJugador, '#fff');
		game.debug.geom(vidaRojoJugador, 'rgb(222,6,6)');

		game.debug.geom(energiaNegroJugador, '#000', false);
		game.debug.geom(energiaBlancaJugador, '#fff');
		game.debug.geom(energiaVerdeJugador, 'rgb(0,255,0)');

		game.debug.geom(vidaNegroComputadora, '#000', false);
		game.debug.geom(vidaBlancoComputadora, '#fff');
		game.debug.geom(vidaRojoComputadora, 'rgb(222,6,6)');

		game.debug.geom(energiaNegroComputadora, '#000', false);
		game.debug.geom(energiaBlancaComputadora, '#fff');
		game.debug.geom(energiaVerdeComputadora, 'rgb(0,255,0)');
	},
	//se crea esta funcion para disminuir la barra de energia
    
	update : function() {
		indice=funcionesBatalla.numeroAleatorio(1,4);
		funcionesBatalla.cargarEnergia(energiaVerdeJugador);
		funcionesBatalla.cargarEnergia(energiaVerdeComputadora);
		if(dispositivoMovil)
			funcionesBatalla.joystick(joystick,button);
		else
			funcionesBatalla.movimientoJugador(energiaVerdeJugador);
        
        funcionesBatalla.guiaComputadora(movimientoComputadora);
		if(!secuencia)
			funcionesBatalla.llamarSecuencia(indice);	
		counter++;
		ti = parseInt(counter / 60);
		if (ti == 70) {
			funcionesBatalla.finJuego();
		}
		if (ti <= 70) {
			text.setText('time: ' + ti);
		} 
		game.physics.arcade.overlap(personajeJugador,ataquePlagio,funcionesBatalla.impactoPlagioC,false,this);
		game.physics.arcade.overlap(personajeJugador,ataquePersonalidadC.bullets,funcionesBatalla.impactoAtaqueComputadora,false,this);
		game.physics.arcade.overlap(personajeComputadora,ataquePersonalidadJ,funcionesBatalla.impactoAtaqueJugador,false,this);
        game.physics.arcade.collide(personajeJugador, personajeComputadora, funcionesBatalla.colision, null, this);
       }		
}