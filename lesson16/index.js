class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.6
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre, apellido, altura)        
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

//var joqtan = new Persona('joqtan','marmol',1.65)
//var javier = new Persona('javier','mejia',1.69)