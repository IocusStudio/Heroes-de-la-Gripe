class Scene23 extends Phaser.Scene {
    constructor() {
      super('pontos');
    }

    create() {
      this.selecsound = this.sound.add('character');
      this.add.image(0,0,'panwin').setOrigin(0, 0);
      
     
      this.add.bitmapText(205, 55, 'pixel', 'Heróis da gripe', 80).setTint(0xF00909)
      this.add.bitmapText(210, 50, 'pixel', 'Heróis da gripe', 80).setTint(0xE7BB09)
       
      perdiste = 0;
      velociplayer = 159.99999;
      velocivirus = 165;

      var puntajefinal = this.add.bitmapText(334, 356, 'pixel', 'PONTO: ' + puntos,  80).setTint(0x000000);
      this.add.bitmapText(340, 350, 'pixel', 'PONTO: ' + puntos,  80).setTint(0x05CFFC);
      

      if (victoria >= 1 ){
        this.finalsound = this.sound.add('scorewin');
        this.finalsound.play();
        victoriaText = this.add.bitmapText(374,206, 'pixel', 'NÍVEL COMPLETO!', 50).setTint(0x000000);//sombra del texto
        this.add.bitmapText(380,200, 'pixel', 'NÍVEL COMPLETO!', 50).setTint(0xFD8E65);
        
        restartButton =this.add.image(1100, 610,'madera').setScale(0.3,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.reiniciarp()} );
        this.add.bitmapText(997, 603, 'pixel','REINICIAR', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(1000, 600, 'pixel','REINICIAR', 30).setTint(0xF74A86);

        menup = this.add.image(200, 610,'madera').setScale(0.32,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menup()} );
        this.add.bitmapText(46, 604, 'pixel','MENU PRINCIPAL', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(50, 600, 'pixel','MENU PRINCIPAL', 30).setTint(0x404FFA);

        var level8 = this.add.image(645, 515,'madera').setScale(0.35,0.95)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.level8() });
        this.add.bitmapText(508, 502, 'pixel','CONTINUAR', 40).setTint(0x000000);//sombra del texto
        this.add.bitmapText(510, 500, 'pixel','CONTINUAR', 40).setTint(0x9EFF00);
      }

      else {
        this.add.image(0, 0, 'panloos').setOrigin(0,0);
        this.finalsound = this.sound.add('scoreloose');
        this.finalsound.play();
        victoriaText = this.add.bitmapText(325, 206, 'pixel', 'VOCÊ INFECTOU', 70).setTint(0x000000);
        this.add.bitmapText(319,200, 'pixel', 'VOCÊ INFECTOU', 70).setTint(0xd10d06);;

        restartButton = this.add.image(645, 415,'madera').setScale(0.3,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.reiniciarp()} );
        this.add.bitmapText(508, 402, 'pixel','REINICIAR', 40).setTint(0x000000);//sombra del texto
        this.add.bitmapText(510, 400, 'pixel','REINICIAR', 40).setTint(0x9EFF00);
        
        menup = this.add.image(645, 612,'madera').setScale(0.32,0.8)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menup()} );
        this.add.bitmapText(498, 602, 'pixel','MENU PRINCIPAL', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(500, 600, 'pixel','MENU PRINCIPAL', 30).setTint(0x3874A4);
      };
    }

    reiniciarp() {
      puntos = 0;
      victoria = 0;
      mochilacaida = 0;
      if (reiniciarcont === 0){
        this.scene.start('juego7');
      }else if (reiniciarcont === 1){
        this.scene.start('juego8');
      }else if(reiniciarcont ===2){
        this.scene.start('juego9');
      };
    }

    menup() {
      pausacont = 0;
      reiniciarcont = 0;
      perdiste = 0;
      victoria = 0;
      puntos = 0;
      this.scene.start('comecao');
    }

    level8(){
      puntos = 0;
      
      if(victoria === 3){
        victoria = 0;
        reiniciarcont = 0;
        this.scene.start('pontofinal');
      }else if(victoria === 2){
        victoria = 0;
        reiniciarcont = 2;
        this.scene.start('juego9');
      }else{
        victoria = 0;
        reiniciarcont = 1;
        this.scene.start('juego8');
      }
    }
    
}
  