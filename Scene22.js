class Scene22 extends Phaser.Scene {
    constructor() {
      super('juego7');
    }

 ////NIVEL 1
    create ()
    {
        ////  FONDO Y PARALLAX
        
        background=this.add.image(0, 0, 'sky').setScale(9);
        background.setOrigin(0,0);
        background.setScrollFactor(1);
        this.add.image(751, 120, 'sol').setScale(1).setScrollFactor(0.005);
        nube = this.physics.add.staticGroup({
            key: 'nube',
            repeat: 40,
            setXY: {x: 750, y:210, stepX:600}
        });

        nube.children.iterate(function (child) { 
            child.setScale(3).refreshBody();
            child.setAlpha(0.8); 
            child.setScrollFactor(0.5)   
        });

 
        ////PISO
       
        platforms = this.physics.add.staticGroup();
        platforms.create(0, 835, "ground").setScale(2).refreshBody();
        platforms.create(4930, 835, "ground").setScale(2).refreshBody();
        platforms.create(9860, 835, "ground").setScale(2).refreshBody();
        platforms.create(14790, 835, "ground").setScale(2).refreshBody();
       

        /// ESCUELA
        
        this.add.image(12000, 265, 'escuela').setScale(4);
        escuela = this.physics.add.image(12200, 100, 'escuela').setAlpha(0.001);

        ////Carteles
        this.add.image(1050, 696, 'cartel1').setScale(0.5);
        this.add.image(4050, 696, 'cartel800').setScale(0.5);
        this.add.image(7540, 696, 'cartel500').setScale(0.5);
        this.add.image(10200, 696, 'cartel200').setScale(0.5);

        ////Sounds and music.

        this.jump=this.sound.add('jump');
        this.musicbackground=this.sound.add('music');
        this.musicbackground.loop = true;
        this.selecsound = this.sound.add('gameover');
        this.agua = this.sound.add('agua');
        this.alcoholS = this.sound.add('alcoholSound');
        this.tumbar = this.sound.add('tumbada');
        this.selecsound = this.sound.add('character');
        
        //+Lavabos
        lavabo = this.physics.add.group();
        lavabo.create(1300,730,'lavabo');
        lavabo.create(5200,730,'lavabo');
        lavabo.create(10000,730,'lavabo');
        lavabo.create(14950, 730,'lavabo');

        lavabo.children.iterate(function(child){
            child.body.allowGravity = false;
            child.setScale(0.7);
            child.setInteractive().on('pointerdown',()=> {
                if(pausacont===0){
                    child.disableInteractive();
                    child.anims.play('lavanim', true);
                    initialTime = 1;
                    contpower = 1;
                }
                }
            );
        });
        
        // !PLAYER
       
        if(seleccion === 'nene'){
            player = this.physics.add.sprite(300, 700, 'dude').setScale(1.5);
            player.anims.play('rightn', true);
            player.setCollideWorldBounds(false);
        }else if (seleccion === 'nena'){
            player = this.physics.add.sprite(300, 700, 'nena').setScale(1.5);
            player.anims.play('rightf', true);
            player.setCollideWorldBounds(false);
        };
        
       
        //+Alcohol
        powerup = this.physics.add.group();
        powerup.create(800, 700, 'alcohol');
        powerup.create(1600, 700, 'alcohol');
        powerup.create(2600, 450, 'alcohol');
        powerup.create(3200, 700, 'alcohol');
        powerup.create(3450, 550, 'alcohol');
        powerup.create(3750, 600, 'alcohol');
        powerup.create(3950, 600, 'alcohol');
        powerup.create(4200, 650, 'alcohol');
        powerup.create(4750, 600, 'alcohol');
        powerup.create(5000, 630, 'alcohol');
        powerup.create(5850, 550, 'alcohol');
        powerup.create(6400, 700, 'alcohol');
        powerup.create(6650, 600, 'alcohol');
        powerup.create(6900, 550, 'alcohol');
        powerup.create(7150, 700, 'alcohol');
        powerup.create(8120, 450, 'alcohol');
        powerup.create(8520, 650, 'alcohol');
        powerup.create(8620, 550, 'alcohol');
        powerup.create(9420, 700, 'alcohol');
        powerup.create(9500, 600, 'alcohol');
        powerup.create(9720, 650, 'alcohol');
        powerup.create(10920, 700, 'alcohol');
        powerup.create(11120, 650, 'alcohol');
        powerup.create(11220, 550, 'alcohol');
        powerup.create(11885, 550, 'alcohol');
        powerup.create(11915, 580, 'alcohol');
        powerup.create(11945, 610, 'alcohol');
        powerup.children.iterate(function (child){
            child.body.allowGravity = false;
        });
            
        
           //+ OBSTÁCULOS
           basurero = this.physics.add.group();
           basurero.create(950,750,'basura');
           basurero.create(1800,750,'basura');
           basurero.create(3000,750,'basura');
           basurero.create(3760,750,'basura');
           basurero.create(4300,750,'basura');
           basurero.create(5000,750,'basura');
           basurero.create(5555,750,'basura');
           basurero.create(6120,750,'basura');
           basurero.create(6500,750,'basura');
           basurero.create(7010,750,'basura');
           basurero.create(7570,750,'basura');
           basurero.create(8632,750,'basura');
           basurero.create(9600,750,'basura');
           basurero.create(9200,750,'basura');
           basurero.create(11210,750,'basura');
          


           basurero.children.iterate(function (child) { 
               child.setScale(0.2);
               child.body.allowGravity = false;
               child.body.immovable = true;
               child.setSize(200,200).setOffset(80,250);
           });

           basurero2 = this.physics.add.staticGroup();
           basurero2.create(2530,760,'basuraV').setScale(0.15).refreshBody();
           basurero2.create(8050,760,'basuraV').setScale(0.15).refreshBody();
           basurero2.create(11715,760,'basuraV').setScale(0.15).refreshBody();
           basurero2.children.iterate(function(child){
               child.setSize(80,100).setOffset(15,0);
           })


        ////  Input Events

        cursor_spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        cursor_escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
            
        ////Timed events
        initialTime = 0;
        initialTime2 = 0;
        virusTime = 0;
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timedEvent2 = this.time.addEvent({ delay: 1150, callback: this.onSecond2, callbackScope: this, loop: true });
        virusEvent = this.time.addEvent({ delay: 1300, callback: this.onVirus, callbackScope: this, loop: true });

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
        this.add.image(1800, 130, 'parallax1').setOrigin(0,0).setAlpha(0.9).setScale(2);
        this.add.image(3500, 225, 'parallax1b').setOrigin(0,0).setAlpha(0.8).setScale(3);
        this.add.image(5000, 130, 'parallax1').setOrigin(0,0).setAlpha(0.9).setScale(2);
        this.add.image(9000, 130, 'parallax1').setOrigin(0,0).setAlpha(0.9).setScale(2);
        this.add.image(10500, 225, 'parallax1b').setOrigin(0,0).setAlpha(0.8).setScale(3);
        this.add.image(13000, 130, 'parallax1').setOrigin(0,0).setAlpha(0.9).setScale(2);
        
        
            

        ////Inicializacion de variables.
        score = 0;
        gameOver = false;


        ////Cámara
        this.cameras.main.setBounds(0,0,background.displayWidth,background.displayHeight);
        this.cameras.main.startFollow(player);
        
        ////COLLIDERS y OVERLAPS

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, virus, this.hitplatforms2, null, this);
        this.physics.add.overlap(player, basurero, this.basuracaida, null, this);
        this.physics.add.collider(player,basurero2);
        this.physics.add.collider(escuela, platforms);
        this.physics.add.collider(escuela, player, this.scene3, null, this);
        this.physics.add.overlap(player, powerup, this.powerup, null, this);
        this.physics.add.collider(player, platformescu);


       //instrucciones pausa
       this.physics.pause();
       pausacont = 1;
       
       instrucciones4 = this.add.image(0,180, 'instruccionespausa').setOrigin(0,0).setScale()
       instruccionestext5 = this.add.bitmapText(70,750, 'pixel', '- Pressione a tecla "escape" ou clique no botão de pausa' + 
       '\n    para parar o jogo.', 30).setTint(0x000000)
       bot4 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{this.physics.resume();this.selecsound.play(); pausacont = 0; instruccionestext.destroy(); instrucciones4.destroy(); instruccionestext5.destroy();logo.destroy(); logo2.destroy();bot4.destroy();
       this.musicbackground.play();////Mobile PAUSA
       this.add.image(170, 105, 'pausa').setDepth(2).setOrigin(0,0).setScrollFactor(0).setScale(-0.6)
       .setInteractive().on('pointerdown', ()=> {if (pausacont=== 0){pausacont = 1;this.selecsound.play(); this.pausa();}});


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

        //// instrucciones salto
       this.physics.pause();
       pausacont = 1;

       instrucciones = this.add.image(0,180, 'instruccionessalto').setOrigin(0,0).setScale()
       instruccionestext2 = this.add.bitmapText(150, 750, 'pixel', '- Com a tecla "espaço" ou o' + 
       ' botão na tela, pule!.', 30).setTint(0x000000)
       bot3 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones.destroy(), instruccionestext2.destroy();this.selecsound.play();bot3.destroy();});

       //instrucciones puntos
       this.physics.pause();
       pausacont = 1;

       instrucciones2 = this.add.image(0,180, 'instruccionespuntos').setOrigin(0,0).setScale()
       instruccionestext3 = this.add.bitmapText(170,750, 'pixel', '- Combine os álcoois de gel para marcar pontos.', 30).setTint(0x000000)
       bot2 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones2.destroy(), instruccionestext3.destroy();this.selecsound.play();bot2.destroy();});

       //instrucciones lavado
       this.physics.pause();
       pausacont = 1;
       instrucciones3 = this.add.image(0,180, 'instruccioneslavado').setOrigin(0,0).setScale()
       instruccionestext = this.add.bitmapText(370, 322, 'pixel', 'Instruções Palco 1', 40).setTint(0xffffff)
       instruccionestext4 = this.add.bitmapText(260,750, 'pixel', '- Clique nas pias para ir mais rápido.', 30).setTint(0x000000)
       bot = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones3.destroy(), instruccionestext4.destroy();this.selecsound.play(); bot.destroy();});
   
       //Info del virus Origen
       this.physics.pause();
       pausacont = 1;
       info1 = this.add.image(0,180, 'origen').setOrigin(0,0).setScale()
       infotext = this.add.bitmapText(530, 322, 'pixel', 'Origem', 40).setTint(0xffffff)
       logo = this.add.bitmapText(255, 225, 'pixel', 'Heróis da gripe', 70).setTint(0xF00909)
       logo2 = this.add.bitmapText(260, 220, 'pixel', 'Heróis da gripe', 70).setTint(0xE7BB09)
       infotext2 = this.add.bitmapText(50,750, 'pixel', 'A origem da infecção é uma variante da cepa H1N1, com' + 
        '\nmaterial genético de uma cepa aviária, duas cepas suínas' +
        '\ne uma humana que sofreu uma mutação e deu um salto entre' + 
        '\nespécies de suínos para humanos, e posteriormente' +
        '\npermitiu o contágio de pessoa para pessoa.', 30).setTint(0x000000)
       bot5 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{info1.destroy(), infotext.destroy();this.selecsound.play(); bot5.destroy(); infotext2.destroy()


        contpower = 0;
        viruspower = 0;
       }
       );
    }


    
    update ()
    { 
        virus.setVelocityX(160 + virusMove);
        
        if(initialTime > 0){
            timedEvent.paused = false;
            this.agua.play();
        };
        if (initialTime2 > 0) {
            timedEvent2.paused = false;
        };

        if(contpower===0 && viruspower ===0){
            player.setVelocityX(159.999999);  ////159.999999
        }else if (contpower===1) {
            player.setVelocityX(220);
        }else if (viruspower === 1) {
            player.setVelocityX(159.999999 - 30);
        }
        
        ////salto

        if (Phaser.Input.Keyboard.JustDown(cursor_spacebar)&& player.body.touching.down && perdiste == 0){
            this.saltar();
         };

        ////pausa 

        if(Phaser.Input.Keyboard.JustDown(cursor_escape) && pausacont === 0){
            pausacont = 1;
            this.pausa();
        };

        if(sonion===0){
            S2.setAlpha(0);
            S1.setAlpha(1);
          }else{
            S1.setAlpha(0);
            S2.setAlpha(1);
        }
    }
  

    pausa(){

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


    basuracaida(player, basurero) {
        this.tumbar.play();
        basurero.anims.play("basura2", true);
        basurero.y = 770;
        initialTime2 = 1;
        viruspower = 1;
    }

    onSecond2() {
        initialTime2 = initialTime2 - 1; ////basura
        if (initialTime2 == 0 && pausacont === 0) {
          timedEvent2.paused = true;
          viruspower = 0;
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
    
    scene3 (player, escuela){
        victoria = 1;
        pausacont = 0;
        plevel1 = puntos;
        this.scene.start('pontos');
        this.musicbackground.stop();
    }
    
    powerup (player, powerup){
        this.alcoholS.play();
        powerup.disableBody(true, true);
        puntos = puntos+100;
        if (puntos === 100){
            ve = this.add.bitmapText(520,500,'pixel', 'Vai para a escola!').setTint(0xFFFFFF);
            }
        else {
            ve.destroy();
        }
     
        scoreText.setText('PONTO: ' + puntos);  
    }

    hitplatforms2 (player, virus)
    {
        this.gameOver()
        this.selecsound.play();
        pausacont = 1;
        perdiste = 1;
    }
  
    gameOver() {    
        if (gameOver)
        {       
            return
        }  

        gameOver = true;
        this.physics.pause();
        this.musicbackground.stop();

        player.setTint(0x659b1a);
        this.scene.start('pontos');
        
        
    }

    reiniciarp() {
        pausacont = 0;
        this.musicbackground.stop();
        puntos = 0;
        this.scene.start('juego7');
        perdiste = 0;
    }

    menup() {
        pausacont = 0;
        this.musicbackground.stop();
        puntos = 0;
        this.scene.start('comecao');
        perdiste = 0;
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
    
    onSecond() {
        initialTime = initialTime - 1; //// Lavado
        if(initialTime == 0){
            timedEvent.paused = true;
            contpower = 0;
        }
    } 
}