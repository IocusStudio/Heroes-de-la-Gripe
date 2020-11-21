class traduccion extends Phaser.Scene{
    constructor(){
        super('trad');
    }

create(){
this.selecsound = this.sound.add('character');
this.add.image(0, 0, 'traduc').setOrigin(0,0);
esp = this.add.image(246, 350,'madera').setAlpha(0.001).setScale(0.3,7).setInteractive()
.on('pointerdown', () => {this.scene.start('inicio'),this.selecsound.play() });

ing = this.add.image(638, 350,'madera').setAlpha(0.001).setScale(0.3,7).setInteractive()
.on('pointerdown', () => {this.scene.start('start'),this.selecsound.play()});

por = this.add.image(1028, 350,'madera').setAlpha(0.001).setScale(0.3,7).setInteractive()
.on('pointerdown', () => {this.scene.start('comecao'),this.selecsound.play()} );


}}
