function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
}

Persona.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

var joqtan = new Persona('joqtan','marmol')
var javier = new Persona('javier','mejia')

joqtan.saludar()