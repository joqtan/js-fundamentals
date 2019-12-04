function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

var joqtan = new Persona('joqtan','marmol',1.65)
var javier = new Persona('javier','mejia',1.69)

Persona.prototype.soyAlto = function(){
    return this.altura > 1.6
}
joqtan.soyAlto()
javier.soyAlto()
