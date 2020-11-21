class logos extends Phaser.Scene{
    constructor(){
        super("logos");
	}
    create(){
     var logo1 = this.add.sprite(640,350,'l1').setScale(2.5).anims.play('l1',true).on('animationcomplete', ()=> logo1.anims.play('l2', true))
     .on('animationcomplete', ()=> {logo1.destroy(), logo1 = this.add.sprite(640,350,'l2').setScale(2.5).anims.play('l3',true)
     .on('animationcomplete', ()=> logo1.anims.play('l4', true))
     .on('animationcomplete', ()=> {logo1.destroy(), logo1 = this.add.sprite(640,350,'l4').setScale(2.5).anims.play('l5',true)
     .on('animationcomplete', ()=> logo1.anims.play('l6', true))
     .on('animationcomplete', ()=> {logo1.destroy(), logo1 = this.add.sprite(640,350,'l6').setScale(2.5).anims.play('l7',true)
     .on('animationcomplete', ()=> logo1.anims.play('l8', true))
     .on('animationcomplete', ()=> {logo1.destroy(), logo1 = this.add.sprite(640,350,'l8').setScale(2.5).anims.play('l9',true)
     .on('animationcomplete', ()=> logo1.anims.play('l10', true))
     .on('animationcomplete', ()=> {logo1.destroy(), logo1 = this.add.sprite(640,350,'l9').setScale(2.5).anims.play('l10',true)
     .on('animationcomplete', ()=> {logo1.destroy(), logo1 = this.add.sprite(640,350,'l10').setScale(2.5).anims.play('l11',true)
     .on('animationcomplete', ()=> {logo1.destroy(),logo1 = this.add.sprite(640,360,'l10').anims.play('r1',true)
     .on('animationcomplete', ()=> logo1.anims.play('r2', true))
     .on('animationcomplete', ()=> {logo1.destroy(),logo1 = this.add.sprite(640,360,'r2').anims.play('r2',true)
     .on('animationcomplete', ()=> logo1.anims.play('r-3', true))
     .on('animationcomplete', ()=> {logo1.destroy(),logo1 = this.add.sprite(640,360,'r-3').anims.play('r-3',true)
     .on('animationcomplete', ()=> logo1.anims.play('r3', true))
     .on('animationcomplete', ()=> {logo1.destroy(),logo1 = this.add.sprite(640,360,'r3').anims.play('r3',true)
     .on('animationcomplete', ()=> logo1.anims.play('r4', true))
     .on('animationcomplete', ()=> {logo1.destroy(),logo1 = this.add.sprite(640,360,'r4').anims.play('r4',true)
     .on('animationcomplete', ()=> logo1.anims.play('r5', true))
     .on('animationcomplete', ()=> {logo1.destroy(),logo1 = this.add.sprite(640,360,'r5').anims.play('r5',true)
     .on('animationcomplete', ()=> {logo1.destroy(),this.scene.start('cargapan')})

    })
    })
    })
    })
    })
    })    
    })
    })
    })    
    })
    })    
    })

    }
    
}    