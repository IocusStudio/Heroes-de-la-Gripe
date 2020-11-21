class Scene9 extends Phaser.Scene{
    constructor(){
        super('puntosfinal');
    }

    create() {
        this.selecsound = this.sound.add('character');
        this.add.image(0, 0, 'panwin').setOrigin(0,0);
        
        logo = this.add.bitmapText(228, 8, 'pixel', 'Te has convertido en un'+
        '\n\n      Héroe de la Gripe!', 50).setTint(0xF00909)
        logo2 = this.add.bitmapText(230, 10, 'pixel', 'Te has convertido en un'+
        '\n\n      Héroe de la Gripe!', 50).setTint(0xE7BB09) ///(0xE7BB09)

        info1 = this.add.bitmapText(150, 140, 'pixel', 'Ahora tienes el poder para prevenirla' ,38).setTint(0xFFFFFF)
       
        /*jua =*/ this.add.bitmapText(434, 226, 'pixel', 'PUNTAJES! ',  70).setTint(0x000000);
        /*nic = */this.add.bitmapText(440, 220, 'pixel', 'PUNTAJES! ',  70).setTint(0xe07707);
        this.add.bitmapText(446, 304, 'pixel', 'Etapa 1: ' + plevel1, 50).setTint(0x000000);
        this.add.bitmapText(450, 300, 'pixel', 'Etapa 1: ' + plevel1, 50).setTint(0xd6d604);
        this.add.bitmapText(446, 364, 'pixel', 'Etapa 2: ' + plevel2, 50).setTint(0x000000);
        this.add.bitmapText(450, 360, 'pixel', 'Etapa 2: ' + plevel2, 50).setTint(0xe32914);
        this.add.bitmapText(446, 424, 'pixel', 'Etapa 3: ' + plevel3, 50).setTint(0x000000);
        this.add.bitmapText(450, 420, 'pixel', 'Etapa 3: ' + plevel3, 50).setTint(0x3238a8);
        plevelfinal = plevel1 + plevel2 + plevel3;
        this.add.bitmapText(421, 504, 'pixel', 'Total.  ' + plevelfinal, 60 ).setTint(0x000000);
        this.add.bitmapText(425, 500, 'pixel', 'Total.  ' + plevelfinal, 60 ).setTint(0x039e08);
        
        this.finalsound = this.sound.add('scorewin');
        this.finalsound.play();

        menu = this.add.image(1050, 682,'madera').setScale(0.32,0.8)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menu()} );
        this.add.bitmapText(950, 672, 'pixel','CONTINUAR', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(948, 670, 'pixel','CONTINUAR', 30).setTint(0x404FFA);
    }

    

    menu() {
      pausacont = 0;
      reiniciarcont = 0;
      perdiste = 0;
      velociplayer = 159.99999;
      velocivirus = 165;
      this.scene.start('hse');
    }
}


