var joqtan = {
    nombre: 'joqtan',
    edad : 17
}
var helen = {
    nombre: 'helen',
    edad: 21
}
const MAYORIA_EDAD = 18

const mayorEdad = ({edad}) => edad >= MAYORIA_EDAD

const acceso = (persona) => !mayorEdad(persona)

const imprimir = acceso => {   
    acceso ? console.log('Acceso denegado') : console.log('si')
}