const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'
//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const OPTIONS = { crossDomain: true}

function obtainPeople(id, callback){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, OPTIONS, function(people){
        console.log(`hola, yo soy ${people.name}`)
        if(callback){
            callback()
        }
    })
}

obtainPeople(1, function () {
    obtainPeople(2, function () {
        obtainPeople(3, function(){
            obtainPeople(4, function(){
                obtainPeople(5, function () {
                    obtainPeople(6, function(){
                        obtainPeople(7)
                    })
                })
            })
        })
    })
})
//obtainPeople(2)
//obtainPeople(3)