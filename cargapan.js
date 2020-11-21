class cargapan extends Phaser.Scene{
    constructor(){
        super("cargapan");
	}
    preload() {
        
		
        this.input.setDefaultCursor('url(assets/mano.png), pointer');
        
		this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
		var bBar = new Phaser.Geom.Circle(640, 360, 200, 50);
		var loadingBar = new Phaser.Geom.Circle(640, 360, 190, 40);

		this.graphics.fillStyle(0xffffff, 1);
		this.graphics.fillCircleShape(bBar);

		this.newGraphics.fillStyle(0x1de027, 1);
		this.newGraphics.fillCircleShape(loadingBar);

		var loadingText = this.add.text(615,560,"Cargando: ", { fontSize: '32px', fill: '#FFF' });


      this.load.image('logo', 'assets/logo.png');
      this.load.image('pausa', 'assets/stop.png' )
      this.load.image('fatras', 'assets/atras.png');
      this.load.image('botsalto', 'assets/jump.png' )
      this.load.spritesheet('perro', 'assets/perro.png',{ frameWidth: 398, frameHeight:378 })
      this.load.image('sky', 'assets/sky.png');
      this.load.image('ground', 'assets/platform.png');
      this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 39, frameHeight:68 });
      this.load.audio('jump', 'SFX/Jump.wav');
      this.load.audio('music', 'SFX/music.wav');
      this.load.audio('musicmenu', 'SFX/MenuPrincipal.wav');
      this.load.audio('character','SFX/character.wav');
      this.load.audio('gameover', 'SFX/GameOver.wav');
      this.load.audio('scorewin', 'SFX/ScoreWin.wav');
      this.load.audio('scoreloose', 'SFX/ScoreGameOver.wav');
      this.load.audio('music2', 'SFX/music2.wav');
      this.load.audio('music3', 'SFX/music3.wav');
      this.load.audio('aplastar', 'SFX/aplastar.wav');
      this.load.audio('agua', 'SFX/agua.wav');
      this.load.audio('alcoholSound','SFX/alcohol.wav');
      this.load.audio('tumbada','SFX/tumbada.wav');
      this.load.audio('vacunaSound','SFX/vacuna.mp3');
      this.load.audio('ventanaSound','SFX/ventana.wav');
      this.load.audio('virusDerrota','SFX/virusDerrota.wav');
      this.load.audio('chapu', 'SFX/pisaragua.wav');

      

      //paralaxs
      this.load.image('parallax1', 'assets/parallax1.png');
      this.load.image('parallax1b', 'assets/parallax1b.png');
      this.load.image('parallax2', 'assets/parallax2.png');
      this.load.image('parallax3', 'assets/parallax3.png');
      this.load.image('parallax3b', 'assets/parallax3b.png')
    

      //basureros
      this.load.image('basura', 'assets/basura.png');
      this.load.image('basura2', 'assets/basura2.png');
      this.load.image('basuraV', 'assets/basuraV.png');
      this.load.image('libro', 'assets/libros.png');
      this.load.image('cono', 'assets/cono.png');

      //seleccion de nivel
      this.load.image('selnivel', 'assets/selnivel.png');
      this.load.image('levelbloq', 'assets/levelbloq.png');
      
      //audio on/off
      this.load.image('musicon', 'assets/musicon.png');
      this.load.image('musicoff', 'assets/musicoff.png');

      //CRÉDITOS
      this.load.image('cope', 'assets/copete.png');
      this.load.image('lospi', 'assets/lospi.png');
      this.load.image('losping', 'assets/losping.png');
      this.load.image('lospipo', 'assets/lospipo.png');
      this.load.image('gra', 'assets/gra.png');
      this.load.image('tnk', 'assets/tnk.png');
      this.load.image('obr', 'assets/obr.png');

      //idiomas
      this.load.image('traduc', 'assets/selcdioma.png')
      this.load.image('idioma', 'assets/idioma.png');

      this.load.image('salto', 'assets/salto.png');
      this.load.image('alcohol', 'assets/alcohol.png');
      this.load.image('infovirus', 'assets/info.png');
      this.load.image('madera', 'assets/madera.png');
      this.load.image('escuela', 'assets/escuela.png');
      this.load.image('creditos', 'assets/instrucciones1.png');
      this.load.image('frase', 'assets/frase.png');
      this.load.spritesheet('nena', 'assets/nenarun.png',{frameWidth: 50, frameHeight: 68});
      this.load.spritesheet('lavanim', 'assets/lavaboanim.png',{frameWidth: 159, frameHeight: 166})
      this.load.image('saltonena', 'assets/saltonena.png');
      this.load.image('sol', 'assets/sol.png');
      this.load.image('nube', 'assets/nube.png');
      this.load.bitmapFont('pixel', 'assets/pixelfont.png', 'assets/pixelfont.fnt');
      this.load.image('pausafondo', 'assets/pausa.png');
      this.load.image('pausamadera', 'assets/madera2.png');
      this.load.image('sky2', 'assets/escenarioescuela.png');
      this.load.image('ground2', 'assets/pisoescuela.png');
      this.load.image('mochila', 'assets/mochila.png');
      this.load.image('mochila2', 'assets/mochila2.png');
      this.load.image('ventana', 'assets/ventana.png');
      this.load.image('ventana2', 'assets/ventana2.png');
      this.load.image('puerta', 'assets/puertaescuela.png');
      this.load.image('lavabo','assets/lavabo.png');

      //instrucciones
      this.load.image('instruccionespausa', 'assets/instruccionespausa.png');
      this.load.image('instruccionessalto', 'assets/instruccionessaltotacho.png');
      this.load.image('instruccioneslavado', 'assets/instruccioneslavado.png');
      this.load.image('instruccionespuntos', 'assets/instruccionespuntos.png');
      this.load.image('instrucciones2', 'assets/instrucciones2.png');
      this.load.image('instrucciones3', 'assets/instrucciones3.png');
      this.load.image('next', 'assets/botonnext.png');
      this.load.image('instruccionesventana', 'assets/instruccionesventana.png');
      this.load.image('instruccionessaltomochila', 'assets/instruccionessaltomochila.png');
      this.load.image('instruccionessaltoagua', 'assets/instruccionessaltoagua.png');
      this.load.image('instruccionesmatav', 'assets/instruccionesmatav.png')
      //fin instrucciones 

      //info del virus
      this.load.image('origen', 'assets/origen.png');
      this.load.image('sintomas', 'assets/sintomas.png');
      this.load.image('prevencion', 'assets/prevencion.png');

      //Pantalla de Win y Loos
      this.load.image('panwin', 'assets/panwin.png');
      this.load.image('panloos', 'assets/panloos.png');
      


      this.load.image('cartel1' , 'assets/cartel1.png');
      this.load.image('cartel800' , 'assets/cartel800.png');
      this.load.image('cartel500' , 'assets/cartel500.png');
      this.load.image('cartel200' , 'assets/cartel200.png');
      this.load.spritesheet('v1', 'assets/virus1.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v2', 'assets/virus2.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v3', 'assets/virus3.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v4', 'assets/virus4.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v5', 'assets/virus5.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('v6', 'assets/virus6.png',{frameWidth:107 ,frameHeight:115});
      this.load.spritesheet('humovirus', 'assets/humovirus.png',{frameWidth:197 ,frameHeight:145});
      this.load.image('fondo3', 'assets/fondo3.png');
      this.load.image('cielo3', 'assets/cielo3.png');
      this.load.image('paralax3', 'assets/paralax3.png');
      this.load.image('hospital', 'assets/hospital.png');
      this.load.spritesheet('jeringa', 'assets/jeringa.png',{frameWidth:108 ,frameHeight:406});
      this.load.spritesheet('agua', 'assets/agua.png',{frameWidth:333, frameHeight:333});
      this.load.spritesheet('vx', 'assets/vxplode.png',{frameWidth:84, frameHeight: 93,});
      this.load.spritesheet('final', 'assets/final.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final2', 'assets/final2.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final3', 'assets/final3.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final4', 'assets/final4.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final5', 'assets/final5.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final6', 'assets/final6.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final7', 'assets/final7.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final8', 'assets/final8.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final9', 'assets/final9.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final10', 'assets/final10.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final11', 'assets/final11.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final12', 'assets/final12.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final13', 'assets/final13.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final14', 'assets/final14.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final15', 'assets/final15.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('final16', 'assets/final16.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln', 'assets/finalnena.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln2', 'assets/finalnena2.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln3', 'assets/finalnena3.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln4', 'assets/finalnena4.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln5', 'assets/finalnena5.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln6', 'assets/finalnena6.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln7', 'assets/finalnena7.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln8', 'assets/finalnena8.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln9', 'assets/finalnena9.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln10', 'assets/finalnena10.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln11', 'assets/finalnena11.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln12', 'assets/finalnena12.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln13', 'assets/finalnena13.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln14', 'assets/finalnena14.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln15', 'assets/finalnena15.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('finaln16', 'assets/finalnena16.png',{frameWidth:551, frameHeight: 300,});
      this.load.spritesheet('luz', 'assets/luz.png',{frameHeight:64, frameWidth:64});
      this.load.image('podio', 'assets/podio.png')
		
		

		this.load.on('progress', this.cargando, {newGraphics:this.newGraphics,loadingText:loadingText});
		this.load.on('complete', this.completo, {scene:this.scene});
	}
    
    create(){
        ////animaciones
        this.anims.create({
        key: 'rightn',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate:5,
        repeat: -1
        });

    this.anims.create({
        key:'playerjumpn',
        frames: [ { key: 'salto', frame: 0 } ],
        frameRate:1,
    });

    this.anims.create({
        key: 'lavanim',
        frames: this.anims.generateFrameNumbers('lavanim', {start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1,
    });

    this.anims.create({
        key:'mochila2',
        frames: [ { key: 'mochila2', frame: 0 } ],
        frameRate:1,
    });

    this.anims.create({
        key:'basura2',
        frames: [{key: 'basura2', frame: 0}],
        frameRate:1,
    });

    this.anims.create({
        key:'ventana2',
        frames: [ { key: 'ventana2', frame: 0 } ],
        frameRate:1,
    });

    this.anims.create({
        key:'saltonena',
        frames: [ { key: 'saltonena', frame: 0 } ],
        frameRate:1,
    });

    this.anims.create({
        key: 'selecnene',
        frames: [ { key: 'dude', frame: 1 } ],
        frameRate:1,
    });

    this.anims.create({
        key: 'rightf',
        frames: this.anims.generateFrameNumbers('nena', { start: 0, end: 3 }),
        frameRate:5,
        repeat: -1
    });

    this.anims.create({
        key: 'selecnena',
        frames: [ { key: 'nena', frame: 1 } ],
        frameRate:1,
    });

    this.anims.create({
        key: 'v1',
        frames: this.anims.generateFrameNumbers('v1', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
    });

    this.anims.create({
        key: 'v2',
        frames: this.anims.generateFrameNumbers('v2', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
    });

    this.anims.create({
        key: 'v3',
        frames: this.anims.generateFrameNumbers('v3', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
    });

    this.anims.create({
        key: 'v4',
        frames: this.anims.generateFrameNumbers('v4', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
    });

    this.anims.create({
        key: 'v5',
        frames: this.anims.generateFrameNumbers('v5', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
    });

    this.anims.create({
        key: 'v6',
        frames: this.anims.generateFrameNumbers('v6', { start: 0, end:3 }),
        frameRate: 6,
        repeat: -1,
    });

    this.anims.create({
        key: 'humovirus',
        frames: this.anims.generateFrameNumbers('humovirus', { start: 0, end:4 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: 'jeringa',
        frames: this.anims.generateFrameNumbers('jeringa', { start: 0, end:4 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: 'agua',
        frames: this.anims.generateFrameNumbers('agua',{start: 0, end: 5}),
        frameRate: 15,
        repeat: -1,
    });

    this.anims.create({
        key: 'vx',
        frames: this.anims.generateFrameNumbers('vx',{start: 0, end: 6}),
        frameRate: 17,
    });

    this.anims.create({
        key: 'final',
        frames: this.anims.generateFrameNumbers('final',{start: 0, end: 3}),
        frameRate: 10,
    });

    this.anims.create({
        key: 'final2',
        frames: this.anims.generateFrameNumbers('final2',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final3',
        frames: this.anims.generateFrameNumbers('final3',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final4',
        frames: this.anims.generateFrameNumbers('final4',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final5',
        frames: this.anims.generateFrameNumbers('final5',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final6',
        frames: this.anims.generateFrameNumbers('final6',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final7',
        frames: this.anims.generateFrameNumbers('final7',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final8',
        frames: this.anims.generateFrameNumbers('final8',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final9',
        frames: this.anims.generateFrameNumbers('final9',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final10',
        frames: this.anims.generateFrameNumbers('final10',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final11',
        frames: this.anims.generateFrameNumbers('final11',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final12',
        frames: this.anims.generateFrameNumbers('final12',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final13',
        frames: this.anims.generateFrameNumbers('final13',{start: 0, end: 3}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final14',
        frames: this.anims.generateFrameNumbers('final14',{start: 0, end: 2}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final15',
        frames: this.anims.generateFrameNumbers('final15',{start: 0, end: 2}),
        frameRate: 10,
    });
    this.anims.create({
        key: 'final16',
        frames: this.anims.generateFrameNumbers('final16',{start: 0, end: 2}),
        frameRate: 10,
    });

    this.anims.create({
        key: 'finaln',
        frames: this.anims.generateFrameNumbers('finaln',{start: 0, end: 3}),
        frameRate: 10,
    });

    this.anims.create({
        key: 'finaln2',
        frames: this.anims.generateFrameNumbers('finaln2',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln3',
        frames: this.anims.generateFrameNumbers('finaln3',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln4',
        frames: this.anims.generateFrameNumbers('finaln4',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln5',
        frames: this.anims.generateFrameNumbers('finaln5',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln6',
        frames: this.anims.generateFrameNumbers('finaln6',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln7',
        frames: this.anims.generateFrameNumbers('finaln7',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln8',
        frames: this.anims.generateFrameNumbers('finaln8',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln9',
        frames: this.anims.generateFrameNumbers('finaln9',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln10',
        frames: this.anims.generateFrameNumbers('finaln10',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln11',
        frames: this.anims.generateFrameNumbers('finaln11',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln12',
        frames: this.anims.generateFrameNumbers('finaln12',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln13',
        frames: this.anims.generateFrameNumbers('finaln13',{start: 0, end: 3}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln14',
        frames: this.anims.generateFrameNumbers('finaln14',{start: 0, end: 2}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln15',
        frames: this.anims.generateFrameNumbers('finaln15',{start: 0, end: 2}),
        frameRate: 10,
    });this.anims.create({
        key: 'finaln16',
        frames: this.anims.generateFrameNumbers('finaln16',{start: 0, end: 2}),
        frameRate: 10,
    });

    this.anims.create({
        key: 'luz',
        frames: this.anims.generateFrameNumbers('luz',{start: 0, end: 16}),
        frameRate: 8,
    });

    this.anims.create({
        key: 'perro',
        frames: this.anims.generateFrameNumbers('perro',{start: 0, end: 1}),
        frameRate:3,
        repeat: -1,
    });
  
    }

	cargando(percentage) {
		this.newGraphics.clear();
		this.newGraphics.fillStyle(0x1de027, 1);
		this.newGraphics.fillCircleShape(new Phaser.Geom.Circle(640, 360, percentage*190, 40));

		percentage = Math.round(percentage * 100);
		this.loadingText.setText(percentage + "%");
	}

    
	completo() {
		
		this.scene.start("trad");
	}





}