class cargalogos extends Phaser.Scene{
    constructor(){
        super("cargalogos");
	}

    preload(){
        //Logo
        this.load.spritesheet('l1', 'assets/1.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l2', 'assets/2.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l3', 'assets/3.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l4', 'assets/4.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l5', 'assets/5.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l6', 'assets/6.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l7', 'assets/7.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l8', 'assets/8.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l9', 'assets/9.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l10', 'assets/10.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('l11', 'assets/11.png',{frameWidth: 640, frameHeight: 360});
        this.load.spritesheet('r1', 'assets/equiporayman1.png',{frameWidth: 265, frameHeight: 350});
        this.load.spritesheet('r2', 'assets/equiporayman2.png',{frameWidth: 265, frameHeight: 350});
        this.load.spritesheet('r3', 'assets/equiporayman3.png',{frameWidth: 265, frameHeight: 350});
        this.load.spritesheet('r4', 'assets/equiporayman4.png',{frameWidth: 265, frameHeight: 350});
        this.load.spritesheet('r5', 'assets/equiporayman5.png',{frameWidth: 265, frameHeight: 350});

        this.load.image('cargavirus', 'assets/cargapan.png');
        
        this.load.on('complete', this.completo, {scene:this.scene});
    }

    create(){
        this.anims.create({
            key: 'l1',
            frames: this.anims.generateFrameNumbers('l1', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l2',
            frames: this.anims.generateFrameNumbers('l2', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l3',
            frames: this.anims.generateFrameNumbers('l3', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l4',
            frames: this.anims.generateFrameNumbers('l4', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l5',
            frames: this.anims.generateFrameNumbers('l5', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l6',
            frames: this.anims.generateFrameNumbers('l6', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l7',
            frames: this.anims.generateFrameNumbers('l7', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l8',
            frames: this.anims.generateFrameNumbers('l8', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l9',
            frames: this.anims.generateFrameNumbers('l9', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l10',
            frames: this.anims.generateFrameNumbers('l10', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'l11',
            frames: this.anims.generateFrameNumbers('l10', { start: 3, end: 7 }),
            frameRate:1,
        });
        this.anims.create({
            key: 'r1',
            frames: this.anims.generateFrameNumbers('r1', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'r2',
            frames: this.anims.generateFrameNumbers('r2', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'r3',
            frames: this.anims.generateFrameNumbers('r3', { start: 0, end: 1 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'r-3',
            frames: [ { key: 'r3', frame: 4 },{ key: 'r3', frame: 3 },{ key: 'r3', frame: 2 },{ key: 'r3', frame: 1 },{ key: 'r3', frame: 0 } ],
            frameRate:18,
        });
        this.anims.create({
            key: 'r4',
            frames: this.anims.generateFrameNumbers('r4', { start: 0, end: 4 }),
            frameRate:5,
        });
        this.anims.create({
            key: 'r5',
            frames: this.anims.generateFrameNumbers('r5', { start: 0, end: 4 }),
            frameRate:3,
        });


    }

    completo(){
        this.scene.start('logos');
    }
}    