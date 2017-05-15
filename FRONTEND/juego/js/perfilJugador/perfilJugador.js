var speedMult = 0.2;
var friction = 0.99
var character1;
var character2;
var music;
var musicButton;
var NicknamePerfil;

var perfilJugador = function(game){};
    perfilJugador.prototype = {
        preload : function(){
            game.load.image('avatar', datosperfil["datos"].avatar);
		    game.load.spritesheet('boton-personaje', '../img/Componentes/botones/boton-personaje.png');
            game.load.spritesheet('boton-jefes', '../img/Componentes/botones/boton-jefes.png');
            game.load.spritesheet('boton-trofeo', '../img/Componentes/botones/boton-trofeo.png');
            game.load.spritesheet('boton-alfanumerico', '../img/Componentes/botones/boton-alfanumerico.png');
        },

        create : function (){
            NicknamePerfil = datosperfil["datos"].nickname;
            MundoPerfil = datosperfil["datos"].mundo;
            NivelPerfil = datosperfil["datos"].nivel;
            MonedasPerfil = datosperfil["datos"].monedas;
            musicButton = game.add.audio('sonidoBoton');
            game.stage.backgroundColor = "#2451A6";
		    game.add.sprite(80, 50,'avatar').scale.setTo(0.8);            
		
            game.add.button(5, 5,'botonVolver', this.verNavegacion, 1, 1, 0, 2);
            game.add.button(90, 290,'boton-personaje', null, 0, 0, 0, 0);
            game.add.button(450, 290,'boton-jefes', null, 0, 0, 0, 0);
            game.add.button(90, 450,'boton-trofeo', this.verLogros, 0, 0, 0, 0);
            game.add.button(450, 450,'boton-alfanumerico', this.verAlfanumercios, 0, 0, 0, 0);

            game.add.text(400, 50, "Perfil del usuario", {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            game.add.text(400, 130, "Nickname: " + NicknamePerfil, {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            game.add.text(590, 130, "Mundo: " +MundoPerfil, {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            game.add.text(360, 200, "Nivel: " +NivelPerfil, {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            game.add.text(590, 200, "Monedas: " +MonedasPerfil, {font: "25px Roboto", fill: "#ffffff"}).anchor.set(0.5);
            
            boot.verificarMusica("menu");
        },
        
        verNavegacion: function(){
            game.state.start("navegacion");
            sonidoBoton.play();
        },
        
        verLogros: function(){
            game.state.start("logros");
            sonidoBoton.play();
        },
        verAlfanumercios:function(){
            game.state.start("desbloqueoPersonaje");
            sonidoBoton.play();
        },
        update : function(){

	   }
}