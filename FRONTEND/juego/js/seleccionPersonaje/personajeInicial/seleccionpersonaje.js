var columns = 3;
var rows = 3;
var characterWidth = 80;
var characterHeight = 80;
var spacing = 70;
var characters = ['pantera','gallo','cierva','girafa','leon','canario','ruisenor','raton','hormiga'];
var l;
var startButton;

var seleccionpersonaje = function(game){};
seleccionpersonaje.prototype = {
     preload: function(){
          game.scale.pageAlignHorizontally = true;
          game.scale.pageAlignVertically = true;

          game.load.spritesheet('pantera', 'images/AnaPanteraButton.png', 125, 125, 3);
          game.load.spritesheet('gallo', 'images/AndresGalloButton.png', 125, 125, 3);
          game.load.spritesheet('cierva', 'images/CataCiervaButton.png', 125, 125, 3);
          game.load.spritesheet('girafa', 'images/DanielaGirafaButton.png', 125, 125, 3);
          game.load.spritesheet('leon', 'images/DanielLeonButton.png', 125, 125, 3);
          game.load.spritesheet('canario', 'images/FabianCanarioButton.png', 125, 125, 3);
          game.load.spritesheet('ruisenor', 'images/IvanRuisenorButton.png', 125, 125, 3);
          game.load.spritesheet('raton', 'images/PedroRatonButton.png', 125, 125, 3);
          game.load.spritesheet('hormiga', 'images/TatiHormigaButton.png', 125, 125, 3);
          game.load.spritesheet('button', 'images/SpriteButton.png', 150, 40);
     },
     create: function(){  
          game.stage.backgroundColor = "#2451A6"; 
          this.pageText = game.add.text(game.width / 2, 45, "Selección de Personaje", {font: "32px Roboto", fill: "#ffffff"})
          this.pageText.anchor.set(0.5);
          
          var rowLength = characterWidth * columns + spacing * (columns - 1);
          var leftMargin = (game.width - rowLength) / 2;
          var colHeight = characterHeight * columns + spacing * (columns - 1);
          var topMargin = (game.width - colHeight);
          l = 0;

          for(var i = 0; i < columns; i++){
               for(var j = 0; j < rows; j++){
                    for(l; l < characters.length; l++){
                         //thumb.scale.setTo(1.5);
                         var button = game.add.button(leftMargin + j * (characterWidth + spacing), topMargin - 350 + i * (characterHeight + spacing), characters[l], null, this, 2, 1, 0);
                         l = l + 1;
                         break;
                    }
               }
          }
          startButton = game.add.button(game.world.width / 2, 550, 'button', this.verbatalla, this, 2, 1, 0); // over, out, down, up
          startButton.anchor.set(0.5);
     },
     verbatalla : function () {
         this.state.start ("primer");
     }
}