class Scene13 extends Phaser.Scene {
    constructor() {
      super('score');
    }

    create() {
      this.selecsound = this.sound.add('character');
      this.add.image(0,0,'panwin').setOrigin(0, 0);
      
     
      this.add.bitmapText(350, 55, 'pixel', 'Flu Heroes', 80).setTint(0xF00909)
      this.add.bitmapText(355, 50, 'pixel', 'Flu Heroes', 80).setTint(0xE7BB09)
       
      perdiste = 0;
      velociplayer = 159.99999;
      velocivirus = 165;

      var puntajefinal = this.add.bitmapText(334, 356, 'pixel', 'SCORE: ' + puntos,  80).setTint(0x000000);
      this.add.bitmapText(340, 350, 'pixel', 'SCORE: ' + puntos,  80).setTint(0x05CFFC);
      

      if (victoria >= 1 ){
        this.finalsound = this.sound.add('scorewin');
        this.finalsound.play();
        victoriaText = this.add.bitmapText(354,206, 'pixel', 'LEVEL COMPLETED!', 50).setTint(0x000000);//sombra del texto
        this.add.bitmapText(360,200, 'pixel', 'LEVEL COMPLETED!', 50).setTint(0xFD8E65);
        
        restartButton =this.add.image(1080, 610,'madera').setScale(0.28,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.restart()} );
        this.add.bitmapText(997, 603, 'pixel','RESTART', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(1000, 600, 'pixel','RESTART', 30).setTint(0xF74A86);

        menui = this.add.image(205, 610,'madera').setScale(0.28,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menui() });
        this.add.bitmapText(106, 604, 'pixel','MAIN MENU', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(110, 600, 'pixel','MAIN MENU', 30).setTint(0x404FFA);

        var level5 = this.add.image(638, 515,'madera').setScale(0.30,0.95)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.level5()} );
        this.add.bitmapText(518, 502, 'pixel','CONTINUE', 40).setTint(0x000000);//sombra del texto
        this.add.bitmapText(520, 500, 'pixel','CONTINUE', 40).setTint(0x9EFF00);
      }

      else {
        this.add.image(0, 0, 'panloos').setOrigin(0,0);
        this.finalsound = this.sound.add('scoreloose');
        this.finalsound.play();
        victoriaText = this.add.bitmapText(111, 206, 'pixel', 'YOU HAVE BEEN INFECTED', 70).setTint(0x000000);
        this.add.bitmapText(105,200, 'pixel', 'YOU HAVE BEEN INFECTED', 70).setTint(0xd10d06);;

        restartButton = this.add.image(630, 415,'madera').setScale(0.25,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.restart()} );
        this.add.bitmapText(527, 402, 'pixel','RESTART', 40).setTint(0x000000);//sombra del texto
        this.add.bitmapText(529, 400, 'pixel','RESTART', 40).setTint(0x9EFF00);
        
        menui = this.add.image(632, 612,'madera').setScale(0.25,0.8)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menui()} );
        this.add.bitmapText(538, 602, 'pixel','MAIN MENU', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(540, 600, 'pixel','MAIN MENU', 30).setTint(0x3874A4);
      };
    }

    restart() {
      puntos = 0;
      victoria = 0;
      mochilacaida = 0;
      if (reiniciarcont === 0){
        this.scene.start('juego4');
      }else if (reiniciarcont === 1){
        this.scene.start('juego5');
      }else if(reiniciarcont ===2){
        this.scene.start('juego6');
      };
    }

    menui() {
      pausacont = 0;
      reiniciarcont = 0;
      perdiste = 0;
      victoria = 0;
      puntos = 0;
      this.scene.start('start');
    }

    level5(){
      puntos = 0;
      
      if(victoria === 3){
        victoria = 0;
        reiniciarcont = 0;
        this.scene.start('finalscore');
      }else if(victoria === 2){
        victoria = 0;
        reiniciarcont = 2;
        this.scene.start('juego6');
      }else{
        victoria = 0;
        reiniciarcont = 1;
        this.scene.start('juego5');
      }
    }
    
}
  