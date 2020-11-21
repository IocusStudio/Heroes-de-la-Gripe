class Scene8 extends Phaser.Scene{
    constructor(){
        super('juego3');
    }
  
    create(){
  
        ////  FONDO Y PARALLAX
        
        nube=this.add.image(0, 0, 'cielo3').setScale(9);
        nube.setOrigin(0,0);
        nube.setScrollFactor(0);
  
        paralax3=this.add.image(0, 0, 'paralax3').setScale(9);
        paralax3.setOrigin(0,0);
        paralax3.setScrollFactor(0.18);
  
        background=this.add.image(0, 0, 'fondo3').setScale(9);
        background.setOrigin(0,0);
        background.setScrollFactor(1);  
  
        ////  PISO
        platformescu = this.physics.add.staticGroup();
        platformescu.create(0, 830, 'ground2').setScale(4).setAlpha(0.01).refreshBody();
        platformescu.create(6904,830, 'ground2').setScale(4).setAlpha(0.01).refreshBody();
        platformescu.create(13807,830, 'ground2').setScale(4).setAlpha(0.01).refreshBody();
        platformescu.create(20711,830, 'ground2').setScale(4).setAlpha(0.01).refreshBody();
  
        ////HOSPITAL y VACUNA
  
        this.add.image(17190, 355, 'hospital').setScale(3);
        escuela = this.physics.add.sprite(17500, 710, 'jeringa').setScale(0.5);
        escuela.anims.play('jeringa', true);
        escuela.body.allowGravity = false;
        escuela.body.immovable = true;
  
        //+ AGUA
  
        mochila = this.physics.add.group({
            key: 'agua',
            repeat: 15,
            setXY: {x: 1850, y:760, stepX:1000}
        });
        mochila.children.iterate(function (child) { 
            child.setScale(0.5);
            child.setSize(150,100).setOffset(70,230);
            child.body.allowGravity = false;
            child.body.immovable = true;
            child.anims.play('agua', true);
            child.extratime = 1;
        });

        //+ CONOS

        libros = this.physics.add.staticGroup();
        libros.create(3300,770,'cono').setScale(0.8).refreshBody();
        libros.create(5250,770,'cono').setScale(0.8).refreshBody();
        libros.create(7500,770,'cono').setScale(0.8).refreshBody();
        libros.create(9300,770,'cono').setScale(0.8).refreshBody();
        libros.create(13400,770,'cono').setScale(0.8).refreshBody();
        libros.children.iterate(function(child){
            child.setSize(80,100).setOffset(15,0);
        })
        
        ////Sonido, musica
        this.jump=this.sound.add('jump');
        this.musicbackground=this.sound.add('music3');
        this.musicbackground.loop = true;
        this.selecsound = this.sound.add('gameover');
        this.mv = this.sound.add('aplastar');     
        this.alcoholS = this.sound.add('alcoholSound');
        this.vacuna = this.sound.add('vacunaSound');
        this.ventanaS = this.sound.add('virusDerrota');
        this.selecsound = this.sound.add('character');
        
        //!Player
        if(seleccion === 'nene'){
            player = this.physics.add.sprite(300, 700, 'dude').setScale(1.5);
            player.anims.play('rightn', true);
            player.setCollideWorldBounds(false);
        }else if (seleccion === 'nena'){
            player = this.physics.add.sprite(300, 700, 'nena').setScale(1.5);
            player.anims.play('rightf', true);
            player.setCollideWorldBounds(false);
        };
  
        //+ POWERUPS
  
        powerup = this.physics.add.staticGroup({
            key: 'alcohol',
            repeat: 12,
        setXY: {x: 1100, y: 750, stepX: 1300, stepY:-8},
        });
        powerup.children.iterate(function (child){
            child.setScale(1).refreshBody();
            child.extratime = 1;
        });
  
        ////  Input Events
  
        cursor_spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        cursor_escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        
        ////tiempo de powerup
        initialTime = 1;
        initialTime2 = 1;
        virusTime = 0;
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timedEvent2 = this.time.addEvent({ delay: 1150, callback: this.onSecond2, callbackScope: this, loop: true });
        timedEvent3 = this.time.addEvent({ delay: 800, callback: this.onSecond3, callbackScope: this, loop: true });
        virusEvent = this.time.addEvent({ delay: 1300, callback: this.onVirus, callbackScope: this, loop: true });
  
        //! Virus Volador
        virusvolador = this.physics.add.group();
        
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
         this.add.image(2000, 225, 'parallax3').setOrigin(0,0).setAlpha(0.9).setScale(3).setDepth(1);
         this.add.image(3500, 130, 'parallax3b').setOrigin(0,0).setAlpha(0.8).setScale(2).setDepth(1);
         this.add.image(5000, 225, 'parallax3').setOrigin(0,0).setAlpha(0.9).setScale(3).setDepth(1);
         this.add.image(9000, 225, 'parallax3').setOrigin(0,0).setAlpha(0.9).setScale(3).setDepth(1);
         this.add.image(10500, 130, 'parallax3b').setOrigin(0,0).setAlpha(0.8).setScale(2).setDepth(1);
         this.add.image(13000, 225, 'parallax3').setOrigin(0,0).setAlpha(0.9).setScale(3).setDepth(1);
  
        
  
        ////Inicializacion de variables.
        score = 0;
        gameOver = false;
        
        ////Cámara
        this.cameras.main.setBounds(0,0,background.displayWidth,background.displayHeight);
        this.cameras.main.startFollow(player);
        
        ////COLLIDERS y OVERLAPS
  
        this.physics.add.collider(player, platformescu);
        this.physics.add.collider(player, virus, this.hitplatforms2, null, this);
        this.physics.add.collider(player, basurero);
        this.physics.add.overlap(player, powerup, this.powerup, null, this);
        this.physics.add.overlap(player, mochila, this.agualenta, null, this);
        this.physics.add.collider(platformescu, mochila);
        this.physics.add.collider(player, virusvolador);
        this.physics.add.collider(player, libros);
        this.physics.add.collider(player, escuela, this.videostart,null,this);
  
        //// instrucciones
        //instrucciones pausa
        this.physics.pause();
        pausacont = 1;
         
        instrucciones4 = this.add.image(0,180, 'instruccionespausa').setOrigin(0,0).setScale()
        instruccionestext5 = this.add.bitmapText(150,750, 'pixel', '- Con la tecla “escape” o click en el botón pausa,' +
       '\n      detiene el juego.', 30).setTint(0x000000);
        bot4 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{this.physics.resume(); pausacont = 0; instruccionestext.destroy(); instrucciones4.destroy(); instruccionestext5.destroy();logo.destroy(); logo2.destroy();bot4.destroy();
        this.musicbackground.play(); ////Mobile PAUSA
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
         .bitmapText(450, 48, "pixel", "PUNTAJE: 0", 50)
         .setTint(0x000000);
       scoreText.setScrollFactor(0).setDepth(2);});
  
        //// instrucciones salto
        this.physics.pause();
        pausacont = 1;
  
        instrucciones = this.add.image(0,180, 'instruccionessaltoagua').setOrigin(0,0).setScale()
        instruccionestext2 = this.add.bitmapText(75, 750, 'pixel', '- Con la tecla "espacio" o el' + 
        ' botón en pantalla, salta!.', 30).setTint(0x000000)
        bot3 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones.destroy(), instruccionestext2.destroy(),bot3.destroy(),this.selecsound.play()});
  
        //instrucciones puntos
        this.physics.pause();
        pausacont = 1;
  
        instrucciones2 = this.add.image(0,180, 'instruccionespuntos').setOrigin(0,0).setScale()
        instruccionestext3 = this.add.bitmapText(150,750, 'pixel', '- Junta los alcoholes en gel para sumar puntos' + 
        '\n                             y aumentar tu velocidad.', 30).setTint(0x000000)
        bot2 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones2.destroy(), instruccionestext3.destroy(),bot2.destroy(),this.selecsound.play()});
  
        //instrucciones matar virus
        this.physics.pause();
        pausacont = 1;
        instrucciones3 = this.add.image(0,180, 'instruccionesmatav').setOrigin(0,0).setScale()
        instruccionestext = this.add.bitmapText(330, 322, 'pixel', 'Instrucciones Etapa 3', 40).setTint(0xffffff)
        instruccionestext4 = this.add.bitmapText(30,750, 'pixel', '- Haz click sobre los virus para eliminarlos y sumar puntos.', 30).setTint(0x000000)
        bot = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{instrucciones3.destroy(), instruccionestext4.destroy(), bot.destroy(),this.selecsound.play()});
            
        //Info del virus Prevención \n
        this.physics.pause();
        pausacont = 1;
        info1 = this.add.image(0,180, 'prevencion').setOrigin(0,0).setScale()
        infotext = this.add.bitmapText(500, 322, 'pixel', 'Prevención', 40).setTint(0xffffff)
        logo = this.add.bitmapText(200, 225, 'pixel', 'Héroes de la gripe', 70).setTint(0xF00909)
        logo2 = this.add.bitmapText(205, 220, 'pixel', 'Héroes de la gripe', 70).setTint(0xE7BB09)
        infotext4 = this.add.bitmapText(40,650, 'pixel', '\n• Lavarse las manos de manera frecuente o usar alcohol en gel.'+
        '\n• Ventilar los lugares habitados.'+
        '\n• Taparse la boca y la nariz con el pliegue del codo'+
        '\n   al estornudar o toser .'+
        '\n• Usar mascarillas o barbijos en ambientes públicos o'+
        '\n   en cercanía a contagiados.'+
        '\n• Evitar los besos y dar la mano al saludarse.'+
        '\n• Aplicarse  la vacuna antigripal es la forma más eficaz de'+
        '\n   proteger a las personas para que no contraigan la gripe.', 29).setTint(0x000000)
        bot5 = this.add.image(1200, 600,'next').setInteractive().on('pointerdown', ()=>{info1.destroy(), infotext.destroy(), bot5.destroy(), infotext4.destroy(),this.selecsound.play()
        }
        );
    }
  
    update (){
        
        console.log(initialTime)
  
        if(initialTime > 0){
            timedEvent.paused = false;
        };
        if(initialTime2 > 0){
            timedEvent2.paused = false;
        };
        
        //+ Velocidades
  
        player.setVelocityX(velociplayer); 
        virus.setVelocityX(velocivirus + virusMove);
        
        if(contpower === 0){
            player.setVelocityX(velociplayer);
        }else if(contpower === 1){
            player.setVelocityX(velociplayer + 50);
        };
  
        if (mochilacaida === 0 && contpower === 0){
            player.setVelocityX(velociplayer);
        }else if (mochilacaida === 1){
            player.setVelocityX(velociplayer - 50);
        };
        if(contpower === 1 && mochilacaida ===1){
            player.setVelocityX(velociplayer + 50)
        }
  
        //// salto
       if (Phaser.Input.Keyboard.JustDown(cursor_spacebar)&& player.body.touching.down && perdiste == 0){
           this.saltar();
        };
  
        ////Virus volador
        if(Phaser.Math.Between(1,110)<2 && pausacont===0){
           this.vuelavirus();
        };
  
        //// pausa
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
  
    ////mochila caida
    agualenta (player, mochila){
    
        mochilacaida = 1;
        initialTime2 = mochila.extratime;
    };
  
    powerup(player, powerup){
    this.alcoholS.play();
    powerup.disableBody(true, true);
    puntos = puntos+100;
    if (100 >= puntos <= 190){
        ve = this.add.bitmapText(620,500,'pixel', 'Ve hacia el hospital!').setTint(0xFFFFFF);
        }
    else {
        ve.destroy();
    }
    scoreText.setText('PUNTAJE: ' + puntos);
    initialTime += powerup.extratime;
    contpower = 1;
    }
    onSecond() {
        initialTime = initialTime - 1; //// alcohol
        if(initialTime == 0){
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
        initialTime2 = initialTime2 - 1; ////bocas de agua
        if(initialTime2 == 0){
            timedEvent2.paused = true;
            mochilacaida= 0;
        }
    } 
  
    onSecond3() {   ////velocidades p y v
        if(pausacont === 0){
            velociplayer = velociplayer + 2;
            velocivirus = velocivirus + 1.95;
        }     
    } 
  
    vuelavirus(){
        this.mv.play();
        virusvolador.create(player.x+700, Phaser.Math.Between(600,800), 'v1').anims.play('v1', true).setScale(-1,1);
        virusvolador.children.iterate(function (child) {
            child.body.allowGravity = false;
            child.body.immovable = true;
            child.setSize(85,75).setOffset(85,0)
            child.setVelocityX(-160);
            child.setInteractive().on('pointerdown', () => {
                if (pausacont === 0){
                    puntos = puntos + 10
                    scoreText.setText('PUNTAJE: ' + puntos)
            child.setSize(0,0); child.anims.play('vx',true)
            .on('animationcomplete',() => {child.destroy();})}});
        });
    }
    
    hitplatforms2 (player, platforms2)
    {
        this.gameOver()
        this.selecsound.play();
        pausacont = 1;
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
        this.scene.start('puntos');
        
    }

    pausa(){
  
        //*pausa animaciones y fisicas
        this.physics.pause();
  
        //* Fondo y texto de pausa
        pausa = this.add.image(player.x,500, 'pausafondo').setDepth(5).setScale(1.5).setAlpha(0.8);
        pausa2 = this.add.image(player.x, 540, 'pausamadera').setDepth(5.1);
        var t1 = this.add.bitmapText(player.x-170,360, 'pixel', 'Reanudar', 60).setDepth(5.2).setTint(0x21911d);
        reanudartext = this.add.image(player.x-20,385,'madera').setAlpha(0.000000000001).setScale(0.4,1)
        .setInteractive().on('pointerdown', ()=> {this.selecsound.play(), this.physics.resume(); reanudartext.destroy(); pausa.destroy(); pausa2.destroy(); t1.destroy(); t2.destroy();t3.destroy();
            pausacont = 0; restartButton.destroy(); menu.destroy();})
        var t2 = this.add.bitmapText(player.x-190, 530, 'pixel','Reiniciar', 60).setDepth(5.2).setTint(0x63370a);
        restartButton = this.add.image(player.x-20, 555,'madera').setAlpha(0.000000000001).setScale(0.4,1)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.reiniciar()});
        var t3 =this.add.bitmapText(player.x-115, 680, 'pixel','Salir', 60).setDepth(5.2).setTint(0xecd313);
        menu = this.add.image(player.x-40, 705,'madera').setAlpha(0.000000000001).setScale(0.3,1)
        .setInteractive().on('pointerdown', () =>{ this.selecsound.play(), this.menu()} );
    };



    reiniciar() {
        pausacont = 0;
        this.musicbackground.stop();
        puntos = 0;
        mochilacaida = 0;
        perdiste = 0;
        this.scene.start('juego3');
        velociplayer = 159.99999;
        velocivirus = 165;
    }
  
    menu() {
        pausacont = 0;
        reiniciarcont = 0;
        perdiste = 0;
        victoria = 0;
        velociplayer = 159.99999;
        velocivirus = 165;
        this.musicbackground.stop();
        puntos = 0;
        this.scene.start('inicio');
    }
  
    videostart(){
                                //* Video final
        this.physics.pause();
        this.vacuna.play();
        luz=this.add.sprite(player.x,player.y-80,'luz').anims.play('luz',true).setScale(30.25).on('animationcomplete',()=>{luz.destroy();luzcont=1;if(luzcont===1){
           if(seleccion === 'nene'){
            videofinal = this.add.sprite(player.x-1000, 0, 'final').setDepth(10).setOrigin(0,0).setScale(3);
            videofinal.anims.play('final',true).on('animationcomplete',()=> {this.ventanaS.play();videofinal.anims.play('final2', true)
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final2').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final2',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final3', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final3').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final3',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final4', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final4').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final4',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final5', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final5').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final5',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final6', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final6').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final6',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final7', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final7').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final7',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final8', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final8').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final8',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final9', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final9').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final9',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final10', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final10').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final10',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final11', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final11').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final11',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final12', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final12').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final12',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final13', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final13').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final13',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final14', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final14').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final14',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final15', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final15').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final15',true)
            .on('animationcomplete', ()=> videofinal.anims.play('final16', true))
            .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'final16').setOrigin(0,0).setScale(3).setDepth(10).anims.play('final16',true)
            .on('animationcomplete', ()=> { //+FINAL DEL NIVEL 3 
                victoria = 3;
                pausacont = 0;
                plevel3 = puntos;
                this.musicbackground.stop();
                this.scene.start('puntos')
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
        })
        })
        })
        })
            .on('animationcomplete', ()=> { //+FINAL DEL NIVEL 3 
            
                ;} )});
            };
            if(seleccion === 'nena'){
                videofinal = this.add.sprite(player.x-1000, 0, 'finaln').setDepth(10).setOrigin(0,0).setScale(3);
                videofinal.anims.play('finaln',true).on('animationcomplete',()=> {this.ventanaS.play();videofinal.anims.play('finaln2', true)
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln2').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln2',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln3', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln3').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln3',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln4', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln4').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln4',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln5', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln5').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln5',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln6', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln6').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln6',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln7', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln7').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln7',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln8', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln8').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln8',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln9', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln9').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln9',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln10', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln10').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln10',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln11', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln11').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln11',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln12', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln12').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln12',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln13', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln13').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln13',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln14', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln14').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln14',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln15', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln15').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln15',true)
                .on('animationcomplete', ()=> videofinal.anims.play('finaln16', true))
                .on('animationcomplete', ()=> {videofinal.destroy(),videofinal = this.add.sprite(player.x-1000, 0,'finaln16').setOrigin(0,0).setScale(3).setDepth(10).anims.play('finaln16',true)
                .on('animationcomplete', ()=> { //+FINAL DEL NIVEL 3 
                    victoria = 3;
                    pausacont = 0;
                    plevel3 = puntos;
                    this.musicbackground.stop();
                    this.scene.start('puntos')
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
            })
            })
            })
            })
                .on('animationcomplete', ()=> { //+FINAL DEL NIVEL 3 
                    
                    ;} )});
                } 
        }});                       
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
  
