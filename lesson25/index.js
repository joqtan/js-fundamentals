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

async function obtainPeoples(){

    var ids = [1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,20,21]
    
    var promesas = ids.map(id => obtainPeople(id))
    
    try {    
        var people = await Promise.all(promesas)
        console.log(people)
    } catch (id) {
        onError(id)
    }
    
}

obtainPeoples()
