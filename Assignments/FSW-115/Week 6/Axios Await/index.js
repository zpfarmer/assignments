
async function getData(){
    
    try {
        const response = await axios.get("https://swapi.co/api/people/14") 
        const homeworld = await axios.get(response.data.homeworld)
        const species = await axios.get(response.data.species)
        listHomeWorldToDOM(homeworld, response, species)
    }
    catch(error){
        console.log(error)
    }
    
    
}


getData()

function listHomeWorldToDOM(homeworld, luke, species){
    const nameh1 = document.createElement('h1')
    nameh1.textContent = luke.data.name
    document.body.appendChild(nameh1)

    const h1 = document.createElement('h1')
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)

    const speciesh1 = document.createElement('h2')
    speciesh1.textContent = species.data.name
    document.body.appendChild(speciesh1)
    
}
