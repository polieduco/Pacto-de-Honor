
var closeButton2;

var popup2;
var Mundo4 = {
    preload:function (){


       game.load.image('paradero','../img/Componentes/navegacionMapa//paraderoBogota.png');//dy
            game.load.image('fondo', '../img/Componentes/navegacionMapa/mapaNavegacionb.png');
  game.load.image('close', '../img/Componentes/navegacionMapa/orb.png');
        
        game.load.spritesheet('nivel1', '../img/Componentes/navegacionMapa/nivel1.png', 192,71);
        game.load.spritesheet('nivel2', '../img/Componentes/navegacionMapa/nivel2.png', 192,71);
        game.load.spritesheet('nivel3', '../img/Componentes/navegacionMapa/nivel3.png', 192,71);
        game.load.spritesheet('nivel4', '../img/Componentes/navegacionMapa/nivel4.png', 192,71);
        game.load.spritesheet('nivel5', '../img/Componentes/navegacionMapa/nivel5.png', 192,71);

  },  create:function(){
game.add.sprite(0, 0, 'fondo');
   //se agrega ventana emergente popup (medidas en x, medidas en y, nombre imagen)
popup2 = game.add.sprite(game.world.centerX, game.world.centerY, 'paradero');
// se agrega la posicion
 popup2.anchor.set(0.7);
 popup2.inputEnabled = true;
 
 //se crean dos variables las cuales daran la ubicacion del boton de cerrar el popup
  closeButton2 = game.add.button(95,-200, 'close',closeWindow, 0, 0, 0, 1);
     //se le da un tamaño
    closeButton2.scale.setTo(2, 2);
   //se agrega al popup
    popup2.addChild(closeButton2);

//se crean los 5 botones que son los que sirven para elejir nivel
var nivelButton = game.add.button (180, -250, 'nivel1', null, null, 2, 1, 0);//En el null va la funcion de cambio de estado para el mundo 1 nivel 1

    nivelButton.inputEnabled = true;
    nivelButton.input.priorityID = 1;
    nivelButton.input.useHandCursor = true;
//se agregan al popup
 popup2.addChild(nivelButton);
    

 var nivelButton1 = game.add.button (180, -170, 'nivel2', null ,null,2, 1, 0);//En el null va la funcion de cambio de estado para el mundo 1 nivel 2

    nivelButton1.inputEnabled = true;
    nivelButton1.input.priorityID = 1;
    nivelButton1.input.useHandCursor = true;

 popup2.addChild(nivelButton1);

 var nivelButton2 = game.add.button (180, -90, 'nivel3', null ,null,2, 1, 0);//En el null va la funcion de cambio de estado para el mundo 1 nivel 3

    nivelButton2.inputEnabled = true;
    nivelButton2.input.priorityID = 1;
    nivelButton2.input.useHandCursor = true;

 popup2.addChild(nivelButton2);

 var nivelButton3 = game.add.button (180, -10, 'nivel4', null ,null,2, 1, 0);//En el null va la funcion de cambio de estado para el mundo 1 nivel 4

    nivelButton3.inputEnabled = true;
    nivelButton3.input.priorityID = 1;
    nivelButton3.input.useHandCursor = true;

 popup2.addChild(nivelButton3);

 var nivelButton4 = game.add.button (180, 70, 'nivel5', null ,null,2, 1, 0);//En el null va la funcion de cambio de estado para el mundo 1 nivel 5

    nivelButton4.inputEnabled = true;
    nivelButton4.input.priorityID = 1;
    nivelButton4.input.useHandCursor = true;

 popup2.addChild(nivelButton4);
//se le da una escala al popup cuando sale
    popup2.scale.set(0.8);

function closeWindow() {

    game.state.start("navegacion");
    // crea una variable tween que lo que hara sera la funcion para cerrar el popup
    

}
    }
    }