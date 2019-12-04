var joqtan = {
    nombre: 'joqtan',
    edad : 17,
    altura: 1.65
}
var helen = {
    nombre: 'helen',
    edad: 21,
    altura:1.70
}
var javier = {
    nombre:'javier',
    edad: 20,
    altura:1.68
}

var personas = [joqtan, helen, javier]

for (var i = 0; i<personas.length;i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

// const alturaCms = persona => {
//     //persona.altura *= 100
//     return {
//         ...persona,
//         altura: persona.altura*100
//     }
// }

const alturaCms = persona =>({
    ...persona,
    altura: persona.altura *100
})

var personasCms = personas.map(alturaCms)

console.log(personasCms)

// const reducer = (acum, persona) =>{
//     return acum + persona.edad
// }

const reducer = (acum, {edad}) => acum + edad

var total = personas.reduce(reducer, 0)

console.log(`el total de edad es de ${total}`)