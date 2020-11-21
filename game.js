var config = {
    type: Phaser.AUTO,
    type: Phaser.AUTO,
       width: 1280,
        height: 720,
     
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: false,
        }
    },
    
    ////la importante es la primera, que es la que arranca
    scene: [cargalogos, cargapan, logos, mejorpuntaje,highscore,pontosfinali, game, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11, Scene12, Scene13, Scene14, Scene15, Scene16, Scene17, Scene18, Scene19, Scene20, Scene21, Scene22, Scene23, Scene24, Scene25, Scene26, Scene27, Scene28, Scene29, Scene30, traduccion]
};

var game = new Phaser.Game(config);

var score;
var logo;
var logo2;
var gameOver;
var player;
var background;
var platforms;
var platformescu;
var virus;
var scoreText;
var jump;
var musicbackground;
var powerup;
var initialTime;
var initialTime2;
var timedEvent;
var timedEvent2;
var timedEvent3;
var timeText;
var contpower = 0;
var escuela;
var puntos = 0;
var victoria = 0;
var victoriaText;
var restartButton;
var creditosText;
var menu;
var menui;
var menup;
var seleccion = '';
var selecnene;
var selecnena;
var pixel;
var selecsound;
var finalsound;
var soni;
var sonion = 0
var cursor_spacebar;
var cursor_escape;
var pausacont = 0;
var reanudartext;
var pausa;
var pausa2;
var perdiste = 0;
var victoria = 0;
var mochila;
var reiniciarcont = 0;
var mochilacaida = 0;
var ventana;
var viruspower = 0;
var velociplayer = 159.999999;
var velocivirus = 165;
var plevel1 = 0;
var plevel2 = 0;
var plevel3 = 0;
var plevelfinal = 0;
var virusvolador;
var paralax3;
var mv;
var videofinal;
var luz;
var luzcont = 0;
var español = 0;
var ingles = 0;
var fondo;
var basurero;
var basurero2;
var nube;
var ve;
var lavabo;
var agua;
var alcoholS;
var tumbar;
var vacuna;
var ventanaS;
var S1;
var S2;
var libros;
var virusTime = 0;
var virusEvent;
var virusMove = 0;
var selecanims = 0;
var fondchecker = 0;
    
//instrucciones
var instrucciones;
var instrucciones2;
var instrucciones3;
var instrucciones4;
var instrucciones5;
var instruccionestext;
var instruccionestext2;
var instruccionestext3;
var instruccionestext4;
var instruccionestext5;
var instruccionestext6;

// Info del Virus
var info1;
var info2;
var info3;
var infotext;
var infotext2;
var infotext3;
var infotext4;
var infotext5;
var infotext6;

//botones para pasar instrucciones e info del virus
var bot;
var bot2;
var bot3;
var bot4;
var bot5;
var bot6;
var mad;

//variables créditos
var des;
var nic;
var luc;
var jua;
var mu;
var rub;
var tra;
var cla;
var jul;

//seleccion de personaje
var jugar;
var noju;

//seleccion de niveles
var nivel1
var nivel2
var nivel3
var nivel2bloq
var nivel3bloq

//traduccion
var esp
var ing
var por

const juan = 6780;
const lucho = 6910;
const nico = 7230;
