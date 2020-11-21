class Scene3 extends Phaser.Scene {
    constructor() {
      super('puntos');
    }

    create() {
      this.selecsound = this.sound.add('character');
      this.add.image(0,0,'panwin').setOrigin(0, 0);
      
     
      this.add.bitmapText(150, 55, 'pixel', 'Héroes de la gripe', 80).setTint(0xF00909)
      this.add.bitmapText(155, 50, 'pixel', 'Héroes de la gripe', 80).setTint(0xE7BB09)
       
      perdiste = 0;
      velociplayer = 159.99999;
      velocivirus = 165;

      var puntajefinal = this.add.bitmapText(274, 356, 'pixel', 'PUNTAJE: ' + puntos,  80).setTint(0x000000);
      this.add.bitmapText(280, 350, 'pixel', 'PUNTAJE: ' + puntos,  80).setTint(0x05CFFC);
      

      if (victoria >= 1 ){
        this.finalsound = this.sound.add('scorewin');
        this.finalsound.play();
        victoriaText = this.add.bitmapText(374,206, 'pixel', 'NIVEL SUPERADO!', 50).setTint(0x000000);//sombra del texto
        this.add.bitmapText(380,200, 'pixel', 'NIVEL SUPERADO!', 50).setTint(0xFD8E65);
        
        restartButton =this.add.image(1100, 610,'madera').setScale(0.3,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.reiniciar()} );
        this.add.bitmapText(997, 603, 'pixel','REINICIAR', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(1000, 600, 'pixel','REINICIAR', 30).setTint(0xF74A86);

        menu = this.add.image(200, 610,'madera').setScale(0.32,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menu() });
        this.add.bitmapText(47, 603, 'pixel','MENÚ PRINCIPAL', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(50, 600, 'pixel','MENÚ PRINCIPAL', 30).setTint(0x404FFA);

        var level2 = this.add.image(645, 515,'madera').setScale(0.35,0.95)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.level2()} );
        this.add.bitmapText(506, 504, 'pixel','CONTINUAR', 40).setTint(0x000000);//sombra del texto
        this.add.bitmapText(510, 500, 'pixel','CONTINUAR', 40).setTint(0x9EFF00);
      }

      else {
        this.add.image(0, 0, 'panloos').setOrigin(0,0);
        this.finalsound = this.sound.add('scoreloose');
        this.finalsound.play();
        victoriaText = this.add.bitmapText(235, 206, 'pixel', 'TE HAS CONTAGIADO', 70).setTint(0x000000);
        this.add.bitmapText(229,200, 'pixel', 'TE HAS CONTAGIADO', 70).setTint(0xd10d06);;
     

        restartButton = this.add.image(648, 415,'madera').setScale(0.3,0.9)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.reiniciar()} );
        this.add.bitmapText(508, 402, 'pixel','REINICIAR', 40).setTint(0x000000);//sombra del texto
        this.add.bitmapText(510, 400, 'pixel','REINICIAR', 40).setTint(0x9EFF00);
        
        menu = this.add.image(648, 612,'madera').setScale(0.32,0.8)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menu()} );
        this.add.bitmapText(498, 602, 'pixel','MENÚ PRINCIPAL', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(500, 600, 'pixel','MENÚ PRINCIPAL', 30).setTint(0x3874A4);
      };
    }

    reiniciar() {
      puntos = 0;
      victoria = 0;
      mochilacaida = 0;
      if (reiniciarcont === 0){
        this.scene.start('juego');
      }else if (reiniciarcont === 1){
        this.scene.start('juego2');
      }else if(reiniciarcont ===2){
        this.scene.start('juego3');
      };
    }

    menu() {
      pausacont = 0;
      reiniciarcont = 0;
      perdiste = 0;
      victoria = 0;
      puntos = 0;
      this.scene.start('inicio');
    }

    level2(){
      puntos = 0;
      
      if(victoria === 3){
        victoria = 0;
        reiniciarcont = 0;
        this.scene.start('puntosfinal');
      }else if(victoria === 2){
        victoria = 0;
        reiniciarcont = 2;
        this.scene.start('juego3');
      }else{
        victoria = 0;
        reiniciarcont = 1;
        this.scene.start('juego2');
      }
    }
    
}
