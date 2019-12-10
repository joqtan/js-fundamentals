const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'
//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const OPTIONS = { crossDomain: true}



function obtainPeople(id){

    return new Promise((resolve, reject)=>{
        const url= `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, OPTIONS, function (people) {
            resolve(people)
        })
        .fail(() => reject(id))
    })

}

function onError(id) {
    console.log(`Ocurrio un error al obtener al personaje ${id}`)
}

var ids = [1,2,3,4,5,6,7]

var promesas = ids.map(id => obtainPeople(id))
Promise
    .all(promesas)
    .then(people => console.log(people))
    .catch(onError)
// obtainPeople(1)
// .then(people => {
//     console.log(`El personaje 1 es ${people.name}`)
//     return obtainPeople(2)
// })
// .then(people =>{
//     console.log(`El personaje 2 es ${people.name}`)
//     return obtainPeople(3)
// })
// .then(people =>{
//     console.log(`El personaje 3 es ${people.name}`)
//     return obtainPeople(4)
// })
// .then(people =>{
//     console.log(`El personaje 4 es ${people.name}`)
//     return obtainPeople(5)
// })
// .then(people =>{
//     console.log(`El personaje 5 es ${people.name}`)
//     return obtainPeople(6)
// })
// .then(people =>{
//     console.log(`El personaje 6 es ${people.name}`)
//     return obtainPeople(7)
// })
// .then(people =>{
//     console.log(`El personaje 7 es ${people.name}`)
//     return obtainPeople(8)
// })
// .then(people =>{    
//     console.log(`El personaje 8 es ${people.name}`)
//     return obtainPeople(9)
// })
// .then(people =>{
//     console.log(`El personaje 9 es ${people.name}`)
// })

// .catch(onError)

// obtainPeople(1, function (people) {
//     console.log(`hola, yo soy ${people.name}`)
// })
//obtainPeople(2)
//obtainPeople(3)