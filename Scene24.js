var informacion;
var atras;
class Scene24 extends Phaser.Scene{
    constructor(){
        super('infoc');
    }
create(){
//Info del virus Prevención \n
this.selecsound = this.sound.add('character');

this.physics.pause();
pausacont = 1;
info3 = this.add.image(0,0, 'prevencion').setOrigin(0,0).setScale()
infotext6 = this.add.bitmapText(500, 142, 'pixel', 'Prevenção', 40).setTint(0xffffff)
logo = this.add.bitmapText(255, 45, 'pixel', 'Heróis da gripe', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(260, 40, 'pixel', 'Heróis da gripe', 70).setTint(0xE7BB09)
infotext4 = this.add.bitmapText(40,450, 'pixel', '\n• Lave as mãos com frequência ou use álcool gel.'+
'\n• Ventile locais habitados.'+
'\n• Cubra a boca e o nariz com a dobra do cotovelo'+
'\n   ao espirrar ou tossir.'+
'\n• Use máscaras ou protetores de queixo em ambientes públicos'+
'\n   ou nas proximidades de pessoas infectadas.'+
'\n• Evite beijos e apertos de mão ao se cumprimentar.'+
'\n• Tomar a vacina contra a gripe é a maneira mais eficaz de'+
'\n   proteger as pessoas contra a gripe.', 29).setTint(0x000000)
bot3 = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{this.scene.start('comecao'),info3.destroy(), infotext6.destroy(), bot3.destroy(), infotext4.destroy(),this.selecsound.play()});

//Info del virus Síntomas \n
this.physics.pause();
pausacont = 1;
info2 = this.add.image(0,0, 'sintomas').setOrigin(0,0).setScale()
infotext5 = this.add.bitmapText(525, 142, 'pixel', 'Sintomas', 40).setTint(0xffffff)
logo = this.add.bitmapText(255, 45, 'pixel', 'Heróis da gripe', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(260, 40, 'pixel', 'Heróis da gripe', 70).setTint(0xE7BB09)
infotext3 = this.add.bitmapText(50,530, 'pixel', '\nOs sintomas desse vírus nas pessoas são semelhantes aos da'+ 
'\ngripe sazonal. Eles incluem febre muito alta (38-40 ºC),'+
'\ntosse seca, dor de garganta, coriza, dores no corpo, dor de'+
'\ncabeça, calafrios, fadiga, dor nos olhos, perda de apetite,'+
'\ncalafrios, fadiga, dor nos olhos, perda de apetite,'+
'\ndificuldade para respirar, como falta de ar.', 29).setTint(0x000000)
bot2 = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{info2.destroy(), infotext5.destroy(), bot2.destroy(), infotext3.destroy(),this.selecsound.play()});    

//Info del virus Origen
this.physics.pause();
pausacont = 1;
info1 = this.add.image(0,0, 'origen').setOrigin(0,0).setScale()
infotext = this.add.bitmapText(530, 142, 'pixel', 'Origem', 40).setTint(0xffffff)
logo = this.add.bitmapText(255, 45, 'pixel', 'Heróis da gripe', 70).setTint(0xF00909)
logo2 = this.add.bitmapText(260, 40, 'pixel', 'Heróis da gripe', 70).setTint(0xE7BB09)
infotext2 = this.add.bitmapText(50,560, 'pixel', 'A origem da infecção é uma variante da cepa H1N1, com' + 
'\nmaterial genético de uma cepa aviária, duas cepas suínas' +
'\ne uma humana que sofreu uma mutação e deu um salto entre' + 
'\nespécies de suínos para humanos, e posteriormente' +
'\npermitiu o contágio de pessoa para pessoa.', 30).setTint(0x000000)
bot = this.add.image(1200, 400,'next').setTint(0xEEE713).setInteractive().on('pointerdown', ()=>{info1.destroy(), infotext.destroy(), bot.destroy(), infotext2.destroy(),this.selecsound.play()






}
);

 
}}