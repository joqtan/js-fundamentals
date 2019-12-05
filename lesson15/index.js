function heredaDe(hijo, padre){
    var fn = function(){}
    fn.prototype = padre.prototype
    hijo.prototype = new fn
    hijo.prototype.constructor = hijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

heredaDe(Desarrollador,Persona)

var joqtan = new Persona('joqtan','marmol',1.65)
var javier = new Persona('javier','mejia',1.69)

Persona.prototype.soyAlto = function(){
    return this.altura > 1.6
}

function Desarrollador(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido    
}

Desarrollador.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

joqtan.soyAlto()
javier.soyAlto()