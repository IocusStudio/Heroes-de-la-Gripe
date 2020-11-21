class Scene6 extends Phaser.Scene{
    constructor(){
        super('seleccion');
    }

create(){
    this.selecsound = this.sound.add('character');
    
    selecanims = 0;
    fondchecker = 0;
    this.add.image(400, 568, 'ground').setScale(1000).setTint(0x001a19);
    this.add.bitmapText(280, 21, 'pixel', 'SELECCIONA PERSONAJE',50).setTint(0xffffff);
    this.selecsound = this.sound.add('character');
    selecnene = this.physics.add.sprite(250, 375,'dude').setScale(9).setSize(32,60);
    selecnene.body.allowGravity = false;
    selecnene.anims.play('selecnene', true);
    selecnene.setInteractive();
    selecnene.on('pointerdown', () => {seleccion = 'nene',this.selecsound.play();selecanims = 1;
    if(fondchecker === 0){var fond= this.add.image(700,500, 'pausafondo').setScale(1.5).setAlpha(0.5);fondchecker=1;};
    jugar= this.add.image(595, 321,'madera').setScale(0.3,1.3).setInteractive()
    .on('pointerdown', () => {this.scene.start('selecnivel'),this.selecsound.play()});
    var jugartex= this.add.bitmapText(480,300, 'pixel', 'JUGAR', 60).setTint(0x21911d);
    noju= this.add.image(595, 621,'madera').setScale(0.3,1.3).setInteractive()
    .on('pointerdown', () => {this.scene.start('seleccion'),this.selecsound.play()});
    var nojutex= this.add.bitmapText(480,600, 'pixel', 'ATRÁS', 60).setTint(0xd10d06);
    ;} );

    selecnena = this.physics.add.sprite(990,375, 'nena').setScale(9).setSize(32,60);
    selecnena.body.allowGravity = false;
    selecnena.anims.play('selecnena', true);
    selecnena.setInteractive();
    selecnena.on('pointerdown', () => {seleccion = 'nena',this.selecsound.play(); selecanims = 2;
    if(fondchecker === 0){var fond= this.add.image(700,500, 'pausafondo').setScale(1.5).setAlpha(0.5);fondchecker=1;}
    jugar= this.add.image(595, 321,'madera').setScale(0.3,1.3).setInteractive()
    .on('pointerdown', () =>{ this.scene.start('selecnivel'),this.selecsound.play()});
    var jugartex= this.add.bitmapText(480,300, 'pixel', 'JUGAR', 60).setTint(0x21911d);
    noju= this.add.image(595, 621,'madera').setScale(0.3,1.3).setInteractive()
    .on('pointerdown', () => {this.scene.start('seleccion'),this.selecsound.play()});
    var nojutex= this.add.bitmapText(480,600, 'pixel', 'ATRÁS', 60).setTint(0xd10d06);
    ;} );

   

    this.add.image(30,15,'fatras').setScale(0.55).setOrigin(0,0)
    .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.scene.start('inicio')});


}
update(){
    if(selecanims === 1){
        selecnene.anims.play('rightn', true);
        selecnena.anims.play('selecnena', true);
        selecnena.disableInteractive();
        selecnene.setDepth(1);
    } else if(selecanims === 2){
        selecnena.anims.play('rightf', true);
        selecnene.anims.play('selecnene', true);
        selecnene.disableInteractive();
        selecnena.setDepth(1);
    }

}



}
