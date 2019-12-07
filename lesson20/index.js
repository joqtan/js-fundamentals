const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'
//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const OPTIONS = { crossDomain: true}

const onPeopleResponse = function(people){
    console.log(`hola, yo soy ${people.name}`)
}

function obtainPeople(id){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, OPTIONS, onPeopleResponse)
}

obtainPeople(1)
obtainPeople(2)
obtainPeople(3)