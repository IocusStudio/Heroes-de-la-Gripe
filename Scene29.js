class Scene29 extends Phaser.Scene{
    constructor(){
        super('pontofinal');
    }

    create() {
        this.selecsound = this.sound.add('character');
        this.add.image(0, 0, 'panwin').setOrigin(0,0);
        logo = this.add.bitmapText(338, 8, 'pixel', 'Você se tornou um'+
        '\n\n  Herói da Gripe!', 50).setTint(0xF00909)
        logo2 = this.add.bitmapText(340, 10, 'pixel', 'Você se tornou um'+
        '\n\n  Herói da Gripe!', 50).setTint(0xE7BB09) 

        info1 = this.add.bitmapText(170, 140, 'pixel', 'Agora você tem o poder a preveni-la' ,38).setTint(0xFFFFFF)
       
        this.add.bitmapText(454, 226, 'pixel', 'PONTOS! ',  70).setTint(0x000000);
        this.add.bitmapText(460, 220, 'pixel', 'PONTOS! ',  70).setTint(0xe07707);
        this.add.bitmapText(465, 304, 'pixel', 'Palco 1: ' + plevel1, 50).setTint(0x000000);
        this.add.bitmapText(470, 300, 'pixel', 'Palco 1: ' + plevel1, 50).setTint(0xd6d604);
        this.add.bitmapText(466, 364, 'pixel', 'Palco 2: ' + plevel2, 50).setTint(0x000000);
        this.add.bitmapText(470, 360, 'pixel', 'Palco 2: ' + plevel2, 50).setTint(0xe32914);
        this.add.bitmapText(466, 424, 'pixel', 'Palco 3: ' + plevel3, 50).setTint(0x000000);
        this.add.bitmapText(470, 420, 'pixel', 'Palco 3: ' + plevel3, 50).setTint(0x3238a8);
        plevelfinal = plevel1 + plevel2 + plevel3;
        this.add.bitmapText(441, 504, 'pixel', 'Total.  ' + plevelfinal, 60 ).setTint(0x000000);
        this.add.bitmapText(445, 500, 'pixel', 'Total.  ' + plevelfinal, 60 ).setTint(0x039e08);
        
        this.finalsound = this.sound.add('scorewin');
        this.finalsound.play();

        menup = this.add.image(1050, 682,'madera').setScale(0.32,0.8)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menup()} );
        this.add.bitmapText(950, 672, 'pixel','CONTINUAR', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(948, 670, 'pixel','CONTINUAR', 30).setTint(0x404FFA);
    }


    menup() {
        pausacont = 0;
      reiniciarcont = 0;
      perdiste = 0;
      victoria = 0;
      velociplayer = 159.99999;
      velocivirus = 165;
      puntos = 0;
      this.scene.start('hsp');
    }
}


