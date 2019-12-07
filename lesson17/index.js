class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.6
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre, apellido, altura)        
    }
    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`ah mira no sabia que eras desarrollador`)
    }
}

var helen = new Persona('helen','marmol',1.73)
var joqtan = new Desarrollador('joqtan','marmol',1.65)
var javier = new Persona('javier','mejia',1.69)

helen.saludar()
joqtan.saludar(responderSaludo)
javier.saludar(responderSaludo)