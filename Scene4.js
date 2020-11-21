var informacion;
var atras;
class Scene4 extends Phaser.Scene{
    constructor(){
        super('info');
    }
create(){

this.selecsound = this.sound.add('character');

//Info del virus Prevención \n
this.physics.pause();
pausacont = 1;
info3 = this.add.image(0,0, 'prevencion').setOrigin(0,0).setScale()
infotext6 = this.add.bitmapText(500, 142, 'pixel', 'Prevención', 40).setTint(0xffffff)
logo = this.add.bitmapText(200, 45, 'pixel', 'Héroes de la gripe', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(205, 40, 'pixel', 'Héroes de la gripe', 70).setTint(0xE7BB09)
infotext4 = this.add.bitmapText(30,450, 'pixel', '\n• Lavarse las manos de manera frecuente o usar alcohol en gel.'+
'\n• Ventilar los lugares habitados.'+
'\n• Taparse la boca y la nariz con el pliegue del codo'+
'\n   al estornudar o toser .'+
'\n• Usar mascarillas o barbijos en ambientes públicos o'+
'\n   en cercanía a contagiados.'+
'\n• Evitar los besos y dar la mano al saludarse.'+
'\n• Aplicarse  la vacuna antigripal es la forma más eficaz de'+
'\n   proteger a las personas para que no contraigan la gripe.', 29).setTint(0x000000)
bot3 = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{this.scene.start('inicio'),info3.destroy(), infotext6.destroy(), bot3.destroy(), infotext4.destroy(),this.selecsound.play()});

//Info del virus Síntomas \n
this.physics.pause();
pausacont = 1;
info2 = this.add.image(0,0, 'sintomas').setOrigin(0,0).setScale()
infotext5 = this.add.bitmapText(525, 142, 'pixel', 'Síntomas', 40).setTint(0xffffff)
logo = this.add.bitmapText(200, 45, 'pixel', 'Héroes de la gripe', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(205, 40, 'pixel', 'Héroes de la gripe', 70).setTint(0xE7BB09)
infotext3 = this.add.bitmapText(30,530, 'pixel', '\nLos síntomas de este virus son similares a los síntomas '+ 
'\nde la gripe estacional. Incluyen fiebre muy alta (38-40 ºC),'+
'\ntos seca, dolor de garganta, moqueo o secreción nasal, dolores'+
'\nen el cuerpo, dolor de cabeza, escalofríos, fatiga, dolor en'+
'\nlos ojos, pérdida del apetito, problemas para respirar, como'+
'\npor ejemplo falta de aliento. ', 29).setTint(0x000000)
bot2 = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{info2.destroy(), infotext5.destroy(), bot2.destroy(), infotext3.destroy(),this.selecsound.play()});    

//Info del virus Origen
this.physics.pause();
pausacont = 1;
info1 = this.add.image(0,0, 'origen').setOrigin(0,0).setScale()
infotext = this.add.bitmapText(530, 142, 'pixel', 'Origen', 40).setTint(0xffffff)
logo = this.add.bitmapText(200, 45, 'pixel', 'Héroes de la gripe', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(205, 40, 'pixel', 'Héroes de la gripe', 70).setTint(0xE7BB09)
infotext2 = this.add.bitmapText(50,570, 'pixel', 'El origen de la infección es una variante de la cepa H1N1,' + 
'\ncon material genético proveniente de una cepa aviaria,' +
'\ndos cepas porcinas y una humana que sufrió una mutación' + 
'\ny dio un salto entre especies, de los cerdos a los humanos,' +
'\npara después permitir el contagio de persona a persona.', 30).setTint(0x000000)
bot = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{info1.destroy(), infotext.destroy(), bot.destroy(), infotext2.destroy(),this.selecsound.play()






}
);

 
}}
