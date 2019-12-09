const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'
//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const OPTIONS = { crossDomain: true}

function obtainPeople(id, callback){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, OPTIONS, callback).fail(function(){
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    })
}

obtainPeople(1, function (people) {
    console.log(`hola, yo soy ${people.name}`)

    obtainPeople(2, function (people) {
        console.log(`hola, yo soy ${people.name}`)

        obtainPeople(3, function(people){
            console.log(`hola, yo soy ${people.name}`)

            obtainPeople(4, function(people){
                console.log(`hola, yo soy ${people.name}`)

                obtainPeople(5, function (people) {
                    console.log(`hola, yo soy ${people.name}`)

                    obtainPeople(6, function(people){
                        console.log(`hola, yo soy ${people.name}`)

                        obtainPeople(7, function(people){
                            console.log(`hola, yo soy ${people.name}`)
                        })
                    })
                })
            })
        })
    })
})
//obtainPeople(2)
//obtainPeople(3)