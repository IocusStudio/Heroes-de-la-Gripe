class Scene30 extends Phaser.Scene{
    constructor(){
        super('selecpalco');
    }

create(){
    this.selecsound = this.sound.add('character');

this.add.image(0, 0, 'selnivel').setOrigin(0,0);
this.add.bitmapText(365, 21, 'pixel', 'SELEÇÃO DE PALCO',50).setTint(0xffffff);
nivel1 = this.add.image(250, 362,'madera').setAlpha(0.001).setScale(0.28,5.8).setInteractive()
.on('pointerdown', () => {this.scene.start('juego7'),this.selecsound.play(),reiniciarcont =0 });

nivel2bloq = this.add.image(640, 362,'levelbloq').setAlpha(10)
if (plevel1 > 0){
    nivel2bloq.destroy(),
    nivel2 = this.add.image(642, 362,'madera').setAlpha(0.001).setScale(0.28,5.8).setInteractive()
    .on('pointerdown', () => {this.scene.start('juego8'),this.selecsound.play(), reiniciarcont =1} );
}

nivel3bloq = this.add.image(1031, 362,'levelbloq').setAlpha(10)
if (plevel2 > 0){
    nivel3bloq.destroy(),
    nivel3 = this.add.image(1032, 362,'madera').setAlpha(0.001).setScale(0.28,5.8).setInteractive()
    .on('pointerdown', () => {this.scene.start('juego9'),this.selecsound.play(), reiniciarcont =2} );
}

this.add.image(30,15,'fatras').setScale(0.55).setOrigin(0,0)
    .setInteractive().on('pointerdown', () =>{this.selecsound.play(), this.scene.start('selecao')});

}




}