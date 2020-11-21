class Scene27 extends Phaser.Scene {
  constructor() {
    super('juego8');
  }

  create() {
    ////  FONDO Y PARALLAX

    background = this.add.image(0, 0, "sky2").setScale(9);
    background.setOrigin(0, 0);
    background.setScrollFactor(1);

    ////  PISO
    platformescu = this.physics.add.staticGroup();
    platformescu.create(0, 830, "ground2").setScale(4).setAlpha(0.01).refreshBody();
    platformescu.create(6904, 830, "ground2").setScale(4).setAlpha(0.01).refreshBody();
    platformescu.create(13807, 830, "ground2").setScale(4).setAlpha(0.01).refreshBody();
    platformescu.create(20711, 830, "ground2").setScale(4).setAlpha(0.01).refreshBody();

    ////Sonido y musica
    this.jump = this.sound.add("jump");
    this.musicbackground = this.sound.add("music2");
    this.musicbackground.loop = true;
    this.selecsound = this.sound.add("gameover");
    this.alcoholS = this.sound.add('alcoholSound');
    this.tumbar = this.sound.add('tumbada');
    this.ventanaS = this.sound.add('ventanaSound');
    this.selecsound = this.sound.add('character');

    //!Player
    if (seleccion === "nene") {
      player = this.physics.add.sprite(300, 700, "dude").setScale(1.5);
      player.anims.play("rightn", true);
      player.setCollideWorldBounds(false);
    } else if (seleccion === "nena") {
      player = this.physics.add.sprite(300, 700, "nena").setScale(1.5);
      player.anims.play("rightf", true);
      player.setCollideWorldBounds(false);
    }

    ////PUERTA
    
    escuela = this.physics.add.staticGroup({
      key: 'puerta',
      setXY :{x:12200, y:600}
    });
    escuela.children.iterate(function (child) {
      child.setSize(32, 500).setAlpha(0.01);
    });

    //+ POWERUPS

    powerup = this.physics.add.group();
    powerup.create(800, 700, 'alcohol');
    powerup.create(1600, 700, 'alcohol');
    powerup.create(2650, 450, 'alcohol');
    powerup.create(3200, 700, 'alcohol');
    powerup.create(3450, 550, 'alcohol');
    powerup.create(3750, 600, 'alcohol');
    powerup.create(4200, 650, 'alcohol');
    powerup.create(4750, 600, 'alcohol');
    powerup.create(5000, 630, 'alcohol');
    powerup.create(5850, 550, 'alcohol');
    powerup.create(6400, 700, 'alcohol');
    powerup.create(6650, 600, 'alcohol');
    powerup.create(6900, 550, 'alcohol');
    powerup.create(7150, 700, 'alcohol');
    powerup.create(8220, 450, 'alcohol');
    powerup.create(8520, 650, 'alcohol');
    powerup.create(8620, 550, 'alcohol');
    powerup.create(9420, 700, 'alcohol');
    powerup.create(9500, 600, 'alcohol');
    powerup.create(9720, 650, 'alcohol');
    powerup.create(10520, 700, 'alcohol');
    powerup.create(10720, 650, 'alcohol');
    powerup.create(11785, 480, 'alcohol');
    powerup.create(11815, 510, 'alcohol');
    powerup.create(11845, 540, 'alcohol');
    powerup.children.iterate(function (child){
        child.body.allowGravity = false;
    });

    ////  Input Events

    cursor_spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    cursor_escape = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ESC
    );

    ////tiempos
    initialTime = 1;
    initialTime2 = 1;
    virusTime = 0;
    timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
    timedEvent2 = this.time.addEvent({ delay: 1150, callback: this.onSecond2, callbackScope: this, loop: true });
    timedEvent3 = this.time.addEvent({ delay: 1150, callback: this.onSecond3, callbackScope: this, loop: true });
    virusEvent = this.time.addEvent({ delay: 1300, callback: this.onVirus, callbackScope: this, loop: true });

    //+ MOCHILA

    mochila = this.physics.add.group();
    mochila.create(950,760,'mochila');
    mochila.create(1800,760,'mochila');
    mochila.create(3000,760,'mochila');
    mochila.create(3760,760,'mochila');
    mochila.create(4300,760,'mochila');
    mochila.create(5000,760,'mochila');
    mochila.create(5555,760,'mochila');
    mochila.create(6120,760,'mochila');
    mochila.create(7010,760,'mochila');
    mochila.create(7570,760,'mochila');
    mochila.create(8700,760,'mochila');
    mochila.create(9600,760,'mochila');
    mochila.create(9200,760,'mochila');
    mochila.create(10620,760,'mochila');

    mochila.children.iterate(function (child) {
      child.setScale(0.9);
      child.setSize(50, 50).setOffset(0, 30);
      child.body.allowGravity = false;
      child.body.immovable = true;
      child.extratime = 1;
    });

    libros = this.physics.add.staticGroup();
    libros.create(2530,770,'libro').setScale(0.2).refreshBody();
    libros.create(8050,770,'libro').setScale(0.2).refreshBody();
    libros.create(11500,770,'libro').setScale(0.2).refreshBody();
    libros.children.iterate(function(child){
        child.setSize(80,100).setOffset(15,0);
    })

    //+ ventana

    ventana = this.add.group();
    ventana.create(850,380,'ventana');
    ventana.create(1850,280,'ventana');
    ventana.create(2850,330,'ventana');
    ventana.create(3850,430,'ventana');
    ventana.create(4850,380,'ventana');
    ventana.create(5850,440,'ventana');
    ventana.create(6850,420,'ventana');
    ventana.create(7850,380,'ventana');
    ventana.create(8850,365,'ventana');
    ventana.create(9850,385,'ventana');
    ventana.create(10850,425,'ventana');
    ventana.create(11850,380,'ventana');

    ventana.children.iterate(function (child) {
      child.setScale(0.5);
      child.setInteractive().on("pointerdown", () => {
        if (pausacont === 0) {
          child.anims.play("ventana2", true);
          child.disableInteractive();
          initialTime2 = 1;
          viruspower = 1;
        }
      });
    });

    //! Virus Volador
    virusvolador = this.physics.add.group();
    
    virusvolador.create(12000, 700, 'v1').anims.play('v1', true).setScale(-1,1);
    virusvolador.create(15000, 650, 'v1').anims.play('v1', true).setScale(-1,1);
    virusvolador.create(18000, 680,'v1').anims.play('v1', true).setScale(-1,1);
    virusvolador.create(20000,666,'v1').anims.play('v1', true).setScale(-1,1);
    virusvolador.create(25000, 700,'v1').anims.play('v1', true).setScale(-1,1);
      
    virusvolador.children.iterate(function (child) {
      child.body.allowGravity = false;
      child.body.immovable = true;
      child.setSize(85,75).setOffset(85,0)
      child.setVelocityX(-160);
      child.setInteractive().on('pointerdown', () => {
          if (pausacont === 0){
              puntos = puntos + 10
              scoreText.setText('PONTO: ' + puntos)
      child.setSize(0,0); child.anims.play('vx',true)
      .on('animationcomplete',() => {child.destroy();})}});
    });


    //! VIRUS

    virus = this.physics.add.group();
    
    virus.create(-260-60,500, 'humovirus').anims.play('humovirus', true).setScale(5).setSize(50,50).setAlpha(0.2);
    virus.create(-225-60,100, 'humovirus').anims.play('humovirus', true).setScale(5).setSize(50,50).setAlpha(0.3);
    virus.create(-230-60,800, 'humovirus').anims.play('humovirus', true).setScale(5).setSize(50,50).setAlpha(0.5);
    virus.create(120-60, 100, 'v1').anims.play('v1', true);
    virus.create(115-60, 200, 'v4').anims.play('v4', true);
    virus.create(160-60, 300, 'v3').anims.play('v3', true);
    virus.create(98-60, 400, 'v6').anims.play('v6', true);
    virus.create(90-60, 500, 'v5').anims.play('v5', true);
    virus.create(100-60, 600, 'v2').anims.play('v2', true);
    virus.create(140-60, 700, 'v1').anims.play('v1', true);
    virus.create(130-60, 800, 'v6').anims.play('v6', true);
    virus.create(15-60, 112, 'v2').anims.play('v2', true);
    virus.create(60-60, 222, 'v5').anims.play('v5', true);
    virus.create(50-60, 278, 'v3').anims.play('v3', true);
    virus.create(23-60, 388, 'v1').anims.play('v1', true);
    virus.create(15-60, 513, 'v6').anims.play('v6', true);
    virus.create(30-60, 590, 'v4').anims.play('v4', true);
    virus.create(14-60, 712, 'v3').anims.play('v3', true);
    virus.create(26-60, 780, 'v6').anims.play('v6', true);
    virus.create(-172-60, 100, 'v1').anims.play('v1', true);
    virus.create(-160-60, 200, 'v4').anims.play('v4', true);
    virus.create(-160-60, 300, 'v3').anims.play('v3', true);
    virus.create(-165-60, 400, 'v6').anims.play('v6', true);
    virus.create(-165-60, 500, 'v5').anims.play('v5', true);
    virus.create(-160-60, 600, 'v2').anims.play('v2', true);
    virus.create(-168-60, 700, 'v1').anims.play('v1', true);
    virus.create(-158-60, 800, 'v6').anims.play('v6', true);
    virus.create(-60-60, 92, 'v3').anims.play('v3', true);
    virus.create(-75-60, 196, 'v6').anims.play('v6', true);
    virus.create(-46-60, 278, 'v2').anims.play('v2', true);
    virus.create(-66-60, 388, 'v4').anims.play('v4', true);
    virus.create(-85-60, 513, 'v1').anims.play('v1', true);
    virus.create(-72-60, 590, 'v5').anims.play('v5', true);
    virus.create(-82-60, 712, 'v2').anims.play('v2', true);
    virus.create(-66-60, 780, 'v4').anims.play('v4', true);

    
    virus.children.iterate(function (child){
        child.body.allowGravity = false;
        child.body.immovable = true;
    });
   
    //Parallaxs
     this.add.image(1000, 270, 'parallax2').setScale(0.5).setAlpha(0.9);
     this.add.image(2000, 270, 'parallax2').setScale(0.5).setAlpha(0.9);
     this.add.image(3000, 270, 'parallax2').setScale(0.5).setAlpha(0.9);
     this.add.image(4000, 270, 'parallax2').setScale(0.5).setAlpha(0.9);
     this.add.image(5000, 270, 'parallax2').setScale(0.5).setAlpha(0.9);
     this.add.image(6000, 270, 'parallax2').setScale(0.5).setAlpha(0.9);
     this.add.image(7000, 270, 'parallax2').setScale(0.5).setAlpha(0.9);

    ////Inicializacion de variables.
    score = 0;
    gameOver = false;

    ////Cámara
    this.cameras.main.setBounds(
      0,
      0,
      background.displayWidth,
      background.displayHeight
    );
    this.cameras.main.startFollow(player);

    ////COLLIDERS y OVERLAPS

    this.physics.add.collider(player, platformescu);
    this.physics.add.collider(player, virus, this.hitplatforms2, null, this);
    this.physics.add.overlap(player, powerup, this.powerup, null, this);
    this.physics.add.overlap(player, mochila, this.mochilacaida, null, this);
    this.physics.add.collider(platformescu, mochila);
    this.physics.add.collider(player,libros);
    this.physics.add.collider(escuela, platformescu);
    this.physics.add.collider(escuela, player, this.scene3, null, this);
    this.physics.add.collider(player, virusvolador);

    //instrucciones pausa
    this.physics.pause();
    pausacont = 1;
    
    instrucciones4 = this.add.image(0,180, 'instruccionespausa').setOrigin(0,0).setScale()
    instruccionestext5 = this.add.bitmapText(70,750, 'pixel', '- Pressione a tecla "escape" ou clique no botão de pausa' + 
    '\n    para parar o jogo.', 30).setTint(0x000000)
    bot4 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{this.physics.resume();this.selecsound.play(); pausacont = 0; instruccionestext.destroy(); instrucciones4.destroy(); instruccionestext5.destroy();logo.destroy(); logo2.destroy();bot4.destroy();
    this.musicbackground.play();////Mobile PAUSA
    this.add.image(170, 105, 'pausa').setDepth(2).setOrigin(0,0).setScrollFactor(0).setScale(-0.6)
    .setInteractive().on('pointerdown', ()=> {if (pausacont=== 0){pausacont = 1; this.pausa();}});


    ////Mobile SALTO
    this.add.image(25, 600, 'botsalto').setDepth(2).setOrigin(0,0).setScrollFactor(0).setScale(0.7)
    .setInteractive().on('pointerdown',()=> {this.saltar()});

    ////madera
    this.add.image(175, 29, 'madera').setDepth(2).setOrigin(0,0).setScrollFactor(0).setScale(0.93,1.3);

    ////sonido on/off
  S1 = this.add.image(1110, 18, 'musicon').setDepth(2).setOrigin(0,0).setScrollFactor(0).setScale(0.6).setAlpha(0.000001);
  S2 = this.add.image(1110, 18, 'musicoff').setDepth(2).setOrigin(0,0).setScrollFactor(0).setScale(0.6).setAlpha(0.000001);
  soni = this.add.image(1110, 18, 'musicon').setDepth(2).setOrigin(0,0).setScrollFactor(0).setScale(0.6).setAlpha(0.000001)
  .setInteractive().on('pointerdown', ()=>{if(sonion ===0){ game.sound.mute = true;sonion = 1;}
      else if (sonion === 1){
        game.sound.mute= false;
        sonion = 0;
      }
    }
  );

    //// SCORE
    scoreText = this.add
    .bitmapText(450, 48, "pixel", "PONTO: 0", 50)
    .setTint(0x000000);
    scoreText.setScrollFactor(0).setDepth(2);});

     //instrucciones matar virus
     this.physics.pause();
     pausacont = 1;
     instrucciones5 = this.add.image(0,180, 'instruccionesmatav').setOrigin(0,0).setScale()
     instruccionestext6 = this.add.bitmapText(110,750, 'pixel', '- Clique nos vírus para removê-los e ganhar pontos.', 30).setTint(0x000000)
     bot6 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones5.destroy(), instruccionestext6.destroy();this.selecsound.play(); bot6.destroy();});

     //// instrucciones salto
    this.physics.pause();
    pausacont = 1;

    instrucciones = this.add.image(0,180, 'instruccionessaltomochila').setOrigin(0,0).setScale()
    instruccionestext2 = this.add.bitmapText(150, 750, 'pixel', '- Com a tecla "espaço" ou o botão na tela, pule!.', 30).setTint(0x000000)
    bot3 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones.destroy(), instruccionestext2.destroy();this.selecsound.play();bot3.destroy();});

    //instrucciones puntos
    this.physics.pause();
    pausacont = 1;

    instrucciones2 = this.add.image(0,180, 'instruccionespuntos').setOrigin(0,0).setScale()
    instruccionestext3 = this.add.bitmapText(165,750, 'pixel', '- Combine os álcoois de gel para marcar pontos.', 30).setTint(0x000000)
    bot2 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones2.destroy(), instruccionestext3.destroy();this.selecsound.play(); bot2.destroy();});

    //instrucciones ventanas
    this.physics.pause();
    pausacont = 1;
    instrucciones3 = this.add.image(0,180, 'instruccionesventana').setOrigin(0,0).setScale()
    instruccionestext = this.add.bitmapText(370, 322, 'pixel', 'Instruções Palco 2', 40).setTint(0xffffff)
    instruccionestext4 = this.add.bitmapText(210, 750, 'pixel', '- Clique nas janelas para afastar o vírus.', 30).setTint(0x000000)
    bot = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones3.destroy(), instruccionestext4.destroy();this.selecsound.play(); bot.destroy();
    });

    //Info del virus Síntomas \n
    this.physics.pause();
    pausacont = 1;
    info1 = this.add.image(0,180, 'sintomas').setOrigin(0,0).setScale()
    infotext = this.add.bitmapText(525, 322, 'pixel', 'Sintomas', 40).setTint(0xffffff)
    logo = this.add.bitmapText(255, 225, 'pixel', 'Heróis da gripe', 70).setTint(0xF00909)
    logo2 = this.add.bitmapText(260, 220, 'pixel', 'Heróis da gripe', 70).setTint(0xE7BB09)
    infotext3 = this.add.bitmapText(50,720, 'pixel', '\nOs sintomas desse vírus nas pessoas são semelhantes aos da'+ 
    '\ngripe sazonal. Eles incluem febre muito alta (38-40 ºC),'+
    '\ntosse seca, dor de garganta, coriza, dores no corpo, dor de'+
    '\ncabeça, calafrios, fadiga, dor nos olhos, perda de apetite,'+
    '\ncalafrios, fadiga, dor nos olhos, perda de apetite,'+
    '\ndificuldade para respirar, como falta de ar.', 29).setTint(0x000000)
    bot5 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{info1.destroy(),this.selecsound.play(); infotext.destroy(); bot5.destroy(); infotext3.destroy()});
  }

  update() {
    if (initialTime > 0) {
      timedEvent.paused = false;
    }
    if (initialTime2 > 0) {
      this.ventanaS.play();
      timedEvent2.paused = false;
    }

    //// velocidades
    player.setVelocityX(velociplayer);
    virus.setVelocityX(velocivirus + virusMove);

    if (contpower === 0) {
      player.setVelocityX(velociplayer);
    } else if (contpower === 1) {
      player.setVelocityX(velociplayer - 30);
    }

    if (viruspower === 0) {
      virus.setVelocityX(velocivirus + virusMove);
    } else if (viruspower === 1) {
      virus.setVelocityX(velocivirus - 25 + virusMove);
    }

    //// salto
    if (Phaser.Input.Keyboard.JustDown(cursor_spacebar)&& player.body.touching.down && perdiste == 0){
           this.saltar();
        };

    //// pausa
    if (Phaser.Input.Keyboard.JustDown(cursor_escape) && pausacont === 0) {
      pausacont = 1;
      this.pausa();
    }
    if(sonion===0){
      S2.setAlpha(0);
      S1.setAlpha(1);
    }else{
      S1.setAlpha(0);
      S2.setAlpha(1);
    }
  }

  ////mochila caida
  mochilacaida(player, mochila) {
    this.tumbar.play();
    mochila.anims.play("mochila2", true);
    mochila.y = 790;
    initialTime = mochila.extratime;
    contpower = 1;
  }

  powerup(player, powerup) {
    this.alcoholS.play();
    powerup.disableBody(true, true);
    puntos = puntos + 100;
    if (puntos === 100){
      ve = this.add.bitmapText(750,500,'pixel', 'Chegue ao final do corredor!').setTint(0xFFFFFF);
      }
    else {
      ve.destroy();
  }
    scoreText.setText("PONTO: " + puntos);
  }

  onSecond() {
    initialTime = initialTime - 1; //// mochila
    if (initialTime == 0) {
      timedEvent.paused = true;
      contpower = 0;
    }
  }

  onVirus() {
    if(virusTime === 0 && pausacont === 0){
      virusTime = virusTime +1;
      virusMove = 40;
    }else if(virusTime === 1 && pausacont === 0) {
      virusTime = virusTime -1;
      virusMove = -40;
    };
  }

  onSecond2() {
    initialTime2 = initialTime2 - 1; ////virus
    if (initialTime2 == 0) {
      timedEvent2.paused = true;
      viruspower = 0;
    }
  }

  onSecond3() {
    ////velocidades p y v
    if (pausacont === 0) {
      velociplayer = velociplayer + 2;
      velocivirus = velocivirus + 2.02;
    }
  }

  hitplatforms2(player, platforms2) {
    this.gameOver();
    this.selecsound.play();
    pausacont = 1;
    perdiste = 1;
  }

  gameOver() {
    if (gameOver) {
      return;
    }

    gameOver = true;
    this.physics.pause();
    this.musicbackground.stop();

    player.setTint(0x659b1a);
    this.scene.start("pontos");

    
  }

  pausa() {
    //*pausa animaciones y fisicas
    this.physics.pause();

    //* Fondo y texto de pausa
    pausa = this.add.image(player.x,500, 'pausafondo').setScale(1.5).setAlpha(0.8);
    pausa2 = this.add.image(player.x, 545, 'pausamadera');
    var t1 = this.add.bitmapText(player.x-200,360, 'pixel', 'Currículo', 60).setTint(0x21911d);
    reanudartext = this.add.image(player.x-20,385,'madera').setAlpha(0.000000000001).setScale(0.4,1)
    .setInteractive().on('pointerdown', ()=> {this.selecsound.play(), this.physics.resume(); reanudartext.destroy(); pausa.destroy(); pausa2.destroy(); t1.destroy(); t2.destroy();t3.destroy();
        pausacont = 0; restartButton.destroy(); menup.destroy();})
    var t2 = this.add.bitmapText(player.x-200, 530, 'pixel','Reiniciar', 60).setTint(0x63370a);
    restartButton = this.add.image(player.x-20, 555,'madera').setAlpha(0.000000000001).setScale(0.4,1)
    .setInteractive().on('pointerdown', () =>{this.selecsound.play(), this.reiniciarp()});
    var t3 =this.add.bitmapText(player.x-90, 680, 'pixel','Saia', 60).setTint(0xecd313);
    menup = this.add.image(player.x-40, 705,'madera').setAlpha(0.000000000001).setScale(0.3,1)
    .setInteractive().on('pointerdown', () =>{this.selecsound.play(), this.menup()} );
  };



  //+FINAL DEL NIVEL 2
  scene3(player, escuela) {
    victoria = 2;
    pausacont = 0;
    plevel2 = puntos;
    this.scene.start("pontos");
    this.musicbackground.stop();
  }

  reiniciarp() {
    pausacont = 0;
    this.musicbackground.stop();
    puntos = 0;
    mochilacaida = 0;
    perdiste = 0;
    this.scene.start("juego8");
    velociplayer = 159.99999;
    velocivirus = 165;
  }

  menup() {
    pausacont = 0;
    perdiste = 0;
    reiniciarcont = 0;
    victoria = 0;
    velociplayer = 159.99999;
    velocivirus = 165;
    this.musicbackground.stop();
    puntos = 0;
    this.scene.start("comecao");
  }

  saltar(){
    if(player.body.touching.down && perdiste === 0 && pausacont===0){
        player.setVelocityY(-500);
        this.jump.play();
        if(seleccion === 'nene'){
             player.anims.play('playerjumpn',true).on('animationcomplete', () => {player.anims.play('rightn', true);});
            }else if(seleccion === 'nena') {
            player.anims.play('saltonena',true).on('animationcomplete', () => {player.anims.play('rightf', true);});
    }   }
  }
}
