class highscore extends Phaser.Scene{
    constructor(){
        super('hsi');
    }

    create() {
        this.selecsound = this.sound.add('character');
        this.add.image(0, 0, 'podio').setOrigin(0,0);
        logo = this.add.bitmapText(380, 55, 'pixel', 'Flu Heroes', 70).setTint(0xF00909)
       logo2 = this.add.bitmapText(385, 50, 'pixel', 'Flu Heroes', 70).setTint(0xE7BB09)

        this.add.bitmapText(530, 147, 'pixel', 'RANKING ',  40).setTint(0x000000);
        this.add.bitmapText(536, 141, 'pixel', 'RANKING ',  40).setTint(0xe07707);
        
        this.finalsound = this.sound.add('scorewin');
        this.finalsound.play();

        if(plevelfinal <= juan){
            this.add.bitmapText(420, 530, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 430, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 330, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0x000000);
            this.add.bitmapText(428, 230, 'pixel', 'NICO:  ' + nico, 60 ).setTint(0x000000);

            this.add.bitmapText(426, 524, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x08ff10);
            this.add.bitmapText(431, 424, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x03A6B0);
            this.add.bitmapText(431, 324, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0xD0D308);
            this.add.bitmapText(436, 224,'pixel', 'NICO:  ' + nico, 60 ).setTint(0xD30808);
           
        } else if(plevelfinal >= juan && plevelfinal < lucho){
            this.add.bitmapText(420, 430, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 530, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 330, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0x000000);
            this.add.bitmapText(428, 230, 'pixel', 'NICO:  ' + nico, 60 ).setTint(0x000000);

            this.add.bitmapText(426, 424, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x08ff10);
            this.add.bitmapText(431, 524, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x03A6B0);
            this.add.bitmapText(431, 324, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0xD0D308);
            this.add.bitmapText(436, 224, 'pixel', 'NICO:  ' + nico, 60 ).setTint(0xD30808);
        } else if(plevelfinal >= lucho && plevelfinal < nico){
            this.add.bitmapText(420, 330, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 530, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 430, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0x000000);
            this.add.bitmapText(428, 230, 'pixel', 'NICO:  ' + nico, 60 ).setTint(0x000000);

            this.add.bitmapText(426, 324, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x08ff10);
            this.add.bitmapText(431, 524, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x03A6B0);
            this.add.bitmapText(431, 424, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0xD0D308);
            this.add.bitmapText(436, 224, 'pixel', 'NICO:  ' + nico, 60 ).setTint(0xD30808);
        } else if(plevelfinal >= nico){
            this.add.bitmapText(420, 230, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 530, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x000000);
            this.add.bitmapText(425, 430, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0x000000);
            this.add.bitmapText(428, 330, 'pixel', 'NICO:  ' + nico, 60 ).setTint(0x000000);

            this.add.bitmapText(420, 224, 'pixel', 'YOU:  ' + plevelfinal, 60 ).setTint(0x08ff10);
            this.add.bitmapText(431, 524, 'pixel', 'JUAN:  ' + juan, 60 ).setTint(0x03A6B0);
            this.add.bitmapText(431, 424, 'pixel', 'LUCHO:  ' + lucho, 60 ).setTint(0xD0D308);
            this.add.bitmapText(436, 324, 'pixel', 'NICO:  ' + nico, 60 ).setTint(0xD30808);
        };



        menu = this.add.image(1050, 682,'madera').setScale(0.32,0.8)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menu()} );
        this.add.bitmapText(953, 672, 'pixel','MAIN MENU', 30).setTint(0x000000);//sombra del texto
        this.add.bitmapText(955, 670, 'pixel','MAIN MENU', 30).setTint(0x404FFA);
    }

    menu() {
        pausacont = 0;
      reiniciarcont = 0;
      perdiste = 0;
      victoria = 0;
      velociplayer = 159.99999;
      velocivirus = 165;
      puntos = 0;
      this.scene.start('start');
    }
}
