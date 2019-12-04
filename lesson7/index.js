var joqtan = {
    nombre: 'Joqtan',
    apellido: 'Marmol',
    edad: 24
}

var Alberto = {
    nombre: 'Alberto',
    apellido: 'Lazo',
    edad: 23
}

function imprimirNombreEnMayusculas(joqtan){
   var {nombre} = joqtan 
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(joqtan)
imprimirNombreEnMayusculas({nombre: 'Javier'})

function imprimir(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log('Hola mi nombre es '+nombre+' y tengo '+edad+' años')
}

imprimir(Alberto)