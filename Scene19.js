class Scene19 extends Phaser.Scene{
    constructor(){
        super('finalscore');
    }

    create() {
        this.selecsound = this.sound.add('character');
        this.add.image(0, 0, 'panwin').setOrigin(0,0);
        logo = this.add.bitmapText(248, 8, 'pixel', 'You have become a true'+
        '\n\n              Flu Hero!', 50).setTint(0xF00909)
        logo2 = this.add.bitmapText(250, 10, 'pixel', 'You have become a true'+
        '\n\n              Flu Hero!', 50).setTint(0xE7BB09) 

        info1 = this.add.bitmapText(170, 140, 'pixel', 'Now you have the power to prevent it' ,38).setTint(0xFFFFFF)
       
        this.add.bitmapText(454, 226, 'pixel', 'SCORES! ',  70).setTint(0x000000);
        this.add.bitmapText(460, 220, 'pixel', 'SCORES! ',  70).setTint(0xe07707);
        this.add.bitmapText(466, 304, 'pixel', 'Level 1: ' + plevel1, 50).setTint(0x000000);
        this.add.bitmapText(470, 300, 'pixel', 'Level 1: ' + plevel1, 50).setTint(0xd6d604);
        this.add.bitmapText(466, 364, 'pixel', 'Level 2: ' + plevel2, 50).setTint(0x000000);
        this.add.bitmapText(470, 360, 'pixel', 'Level 2: ' + plevel2, 50).setTint(0xe32914);
        this.add.bitmapText(466, 424, 'pixel', 'Level 3: ' + plevel3, 50).setTint(0x000000);
        this.add.bitmapText(470, 420, 'pixel', 'Level 3: ' + plevel3, 50).setTint(0x3238a8);
        plevelfinal = plevel1 + plevel2 + plevel3;
        this.add.bitmapText(441, 504, 'pixel', 'Total.  ' + plevelfinal, 60 ).setTint(0x000000);
        this.add.bitmapText(445, 500, 'pixel', 'Total.  ' + plevelfinal, 60 ).setTint(0x039e08);
        
        this.finalsound = this.sound.add('scorewin');
        this.finalsound.play();

        menui = this.add.image(1050, 682,'madera').setScale(0.32,0.8)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menui() });
        this.add.bitmapText(950, 672, 'pixel','CONTINUE', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(948, 670, 'pixel','CONTINUE', 30).setTint(0x404FFA);
    }


    menui() {
        pausacont = 0;
      reiniciarcont = 0;
      perdiste = 0;
      victoria = 0;
      velociplayer = 159.99999;
      velocivirus = 165;
      puntos = 0;
      this.scene.start('hsi');
    }
}


