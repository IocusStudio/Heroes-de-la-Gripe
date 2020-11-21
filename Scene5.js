var creditosimg;
class Scene5 extends Phaser.Scene{
    constructor(){
        super('creditos');
    }
    create(){

        creditosimg = this.add.image(0,0, 'creditos').setOrigin(0,0);
        
        jua = this.physics.add.image(280, 500, 'lospi').setOrigin(0,0);
        luc = this.physics.add.image(0, 2400, 'gra').setOrigin(0,0);
        
        nic = this.physics.add.image(0,0, 'cope').setOrigin(0,0);
        logo = this.add.bitmapText(200, 55, 'pixel', 'Héroes de la gripe', 70).setTint(0xF00909);
        logo2 = this.add.bitmapText(205, 50, 'pixel', 'Héroes de la gripe', 70).setTint(0xE7BB09);
        infotext = this.add.bitmapText(480, 140, 'pixel', 'Créditos', 50).setTint(0xffffff);
        
        
        nic.body.immovable = true;
        nic.body.allowGravity = false
        this.physics.add.collider(luc,nic);
        
        creditosimg.setInteractive();
        creditosimg.setInteractive().on('pointerdown', () => {this.scene.start('inicio')});
        
        
        }
        update(){
            jua.setVelocityY(-50);
            luc.setVelocityY(-50);
            
        }
        };

