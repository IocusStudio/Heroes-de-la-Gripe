class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    create() {
      var video;
      
      
      

      ////música principal
     
      this.musicbackground=this.sound.add('musicmenu');
      this.musicbackground.loop = true;
      this.musicbackground.play();
      this.selecsound = this.sound.add('character');
    

     
      this.add.image(400, 568, 'ground').setScale(1000).setTint(0x001a19);
     
      ////sonido on/off
      S1 = this.add.image(1050, 70, 'musicon').setOrigin(0,0).setScrollFactor(0).setScale(0.6).setAlpha(0.000001);
      S2 = this.add.image(1050, 70, 'musicoff').setOrigin(0,0).setScrollFactor(0).setScale(0.6).setAlpha(0.000001);
      soni = this.add.image(1050, 70, 'musicon').setOrigin(0,0).setScrollFactor(0).setScale(0.6).setAlpha(0.000001)
      .setInteractive().on('pointerdown', ()=>{if(sonion ===0){ game.sound.mute = true;sonion = 1;}
          else if (sonion === 1){
            game.sound.mute= false;
            sonion = 0;
          }
        }
      );


      ////COMENZAR, CONOCER MÁS y CRÉDITOS 

      var logo = this.add.image(640, 250, 'logo').setScale(0.25)
     
      español = 1;
      timeText = this.add.bitmapText(490, 510, 'pixel', 'Comenzar', 50).setTint(0xffffff)
            
      scoreText = this.add.bitmapText(180, 580, 'pixel', 'Información sobre el virus', 50).setTint(0x3fad3b);
        
      creditosText = this.add.bitmapText(490, 650, 'pixel', 'Créditos', 50).setTint(0xecd313);

      
      //// Interacciones con escenas
      this.add.image(640, 530,'madera').setScale(0.3,0.7).setAlpha(0.0001)
      .setInteractive().on('pointerdown', () => { this.scene.start('seleccion'), this.musicbackground.stop(),this.selecsound.play()})

      this.add.image(640, 600,'madera').setScale(0.9,0.7).setAlpha(0.0001)
      .setInteractive().on('pointerdown', () => {this.scene.start('info'), this.musicbackground.stop(),this.selecsound.play()})

      this.add.image(640, 670,'madera').setScale(0.3,0.7).setAlpha(0.0001)
      .setInteractive().on('pointerdown', () => {this.scene.start('creditos'), this.musicbackground.stop(),this.selecsound.play()})

      this.add.image(100,70, 'idioma').setScale(0.6).setOrigin(0,0)
      .setInteractive().on('pointerdown', () => {this.scene.start('trad'), this.musicbackground.stop(),this.selecsound.play()})


    }

    update(){
      if(sonion===0){
        S2.setAlpha(0);
        S1.setAlpha(1);
      }else{
        S1.setAlpha(0);
        S2.setAlpha(1);
      }
    }
}
