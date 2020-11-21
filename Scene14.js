var informacion;
var atras;
class Scene14 extends Phaser.Scene{
    constructor(){
        super('inf');
    }
create(){
//Info del virus Prevención \n

this.selecsound = this.sound.add('character');

this.physics.pause();
pausacont = 1;
info3 = this.add.image(0,0, 'prevencion').setOrigin(0,0).setScale()
infotext6 = this.add.bitmapText(500, 142, 'pixel', 'Prevention', 40).setTint(0xffffff)
logo = this.add.bitmapText(380, 45, 'pixel', 'Flu Heroes', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(385, 40, 'pixel', 'Flu Heroes', 70).setTint(0xE7BB09)
infotext4 = this.add.bitmapText(30,440, 'pixel', '\n• Wash your hands frequently or use sanitizer.'+
'\n• Ventilate busy places.'+
'\n• Cover your mouth and nose with the inside of your elbow when'+
'\n   sneezing or coughing.'+
'\n• Use masks or face covers in public environments or'+
'\n   in close proximity to infected people.'+
'\n• Avoid kissing and shaking hands when greeting others.'+
'\n• Flu shots are the most effective way to protect people from'+
'\n   getting the flu.', 29).setTint(0x000000)
bot3 = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{this.scene.start('start'),info3.destroy(), infotext6.destroy(), bot3.destroy(), infotext4.destroy(),this.selecsound.play();});

//Info del virus Síntomas \n
this.physics.pause();
pausacont = 1;
info2 = this.add.image(0,0, 'sintomas').setOrigin(0,0).setScale()
infotext5 = this.add.bitmapText(525, 142, 'pixel', 'Symptoms', 40).setTint(0xffffff)
logo = this.add.bitmapText(380, 45, 'pixel', 'Flu Heroes', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(385, 40, 'pixel', 'Flu Heroes', 70).setTint(0xE7BB09)
infotext3 = this.add.bitmapText(10,550, 'pixel', '\nThe symptoms of this virus in people are similar to the symptoms'+ 
'\nof seasonal flu. They include very high fever (38-40 ºC), dry'+
'\ncough, e throat, runny nose, body aches, headache, chills,'+
'\nfatigue, eye pain, loss of appetite, and trouble breathing such'+
'\nas lack of breath.', 29).setTint(0x000000)
bot2 = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{info2.destroy(), infotext5.destroy(), bot2.destroy(), infotext3.destroy(),this.selecsound.play()});    

//Info del virus Origen
this.physics.pause();
pausacont = 1;
info1 = this.add.image(0,0, 'origen').setOrigin(0,0).setScale()
infotext = this.add.bitmapText(530, 142, 'pixel', 'Origin', 40).setTint(0xffffff)
logo = this.add.bitmapText(380, 45, 'pixel', 'Flu Heroes', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(385, 40, 'pixel', 'Flu Heroes', 70).setTint(0xE7BB09)
infotext2 = this.add.bitmapText(40,560, 'pixel', 'The origin of the infection is a variant of the H1N1 strain,' + 
'\nwith genetic material from an avian strain, two pig strains' +
'\nand one human strain that suffered a mutation and made' + 
'\na leap between species from pigs to humans, later allowing' +
'\ncontagion from one person to another.', 30).setTint(0x000000)
bot = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{info1.destroy(), infotext.destroy(), bot.destroy(), infotext2.destroy(),this.selecsound.play()






}
);

 
}}