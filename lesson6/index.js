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

function imprimirNombreEnMayusculas({nombre}){
    nombre.toUpperCase()
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(joqtan)
imprimirNombreEnMayusculas({nombre: 'Javier'})