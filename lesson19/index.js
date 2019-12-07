const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const OPTIONS = { crossDomain: true}

const onPeopleResponse = function(people){
    console.log(`hola yo soy ${people.name}`)
}

$.get(LUKE_URL, OPTIONS, onPeopleResponse)