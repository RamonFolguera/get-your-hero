const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`



const superHeroBtnDiv = document.getElementById('superHeroBtn');
const heroImageDiv = document.getElementById('heroImage');
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')
const heroNameDiv = document.getElementById('heroName');
const powerstatsDiv = document.getElementById('powerstats');




const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const superHero = json
        showHeroInfo(superHero)
        // const stats = showHeroInfo(json)
        // const name = `<h2>${json.name}</h2>`
        // const intelligence = `<p>🧠 Intelligence: ${json.powerstats.intelligence}</p>`
        // const combat = `<p>🤜 Combat: ${json.powerstats.combat}</p>`
        // const strength = `<p>💪  Strength: ${json.powerstats.strength}</p>`
        // const power = `<p>🙌   Power: ${json.powerstats.power}</p>`
        // heroImageDiv.innerHTML = `${name}<img src ='${character.image.url}' height=300 />${stats}`
      
    })
}
const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡️',
    durability: '🏋️ ',
    power: '📊',
    combat: '⚔️',
}

// const showHeroInfo = (character) => {
//     for (stat in character.powerstats) {
//         console.log(stat)
//     }
// }
const showHeroInfo = (character) => {
      const name = `<h2>${character.name}</h2>`
      const img = `<img src ='${character.image.url}' height=300 />`
      const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
      }).join('')


      heroImageDiv.innerHTML = `${name}${img}${stats}`

}
    

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        console.log(hero)
        showHeroInfo(hero)

        // console.log(hero)
        // heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=300/>`
        // heroNameDiv.innerHTML = `<h2>${hero.name}</h2>`
        // powerstatsDiv.innerHTML = `<h4>Intelligence: ${hero.powerstats.intelligence}</h4>`
        // powerstatsDiv.innerHTML += `<h4>Strength: ${hero.powerstats.strength}</h4>`
        // powerstatsDiv.innerHTML += `<h4>Speed: ${hero.powerstats.speed}</h4>`
        // powerstatsDiv.innerHTML += `<h4>Durability: ${hero.powerstats.durability}</h4>`
        // powerstatsDiv.innerHTML += `<h4>Power: ${hero.powerstats.power}</h4>`
        // powerstatsDiv.innerHTML += `<h4>Combat: ${hero.powerstats.combat}</h4>`
    })
}
//MY TRY
// const getSuperHero = (id, name) => {
//     fetch(`${BASE_URL}/${id}`)
//     .then(response => response.json())
//     .then(json => {
//         // console.log(json)
//         heroImageDiv.innerHTML = `<img src ='${json.image.url}' height=300 />`
//         heroNameDiv.innerHTML = `<h2>${json.name}</h2>`
//         powerstatsDiv.innerHTML = `<h4>Intelligence: ${json.powerstats.intelligence}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Strength: ${json.powerstats.strength}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Speed: ${json.powerstats.speed}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Durability: ${json.powerstats.durability}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Power: ${json.powerstats.power}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Combat: ${json.powerstats.combat}</h4>`
       
//     })
// }

// const getSearchSuperHero = (name) => {
//     console.log(searchInput.value)
//     fetch(`${BASE_URL}/search/${name}`)
//     .then(response => response.json())
//     .then(json => {
//         const hero = json.results[0]
//         console.log(hero)
//         heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=300/>`
//         heroNameDiv.innerHTML = `<h2>${hero.name}</h2>`
//         powerstatsDiv.innerHTML = `<h4>Intelligence: ${hero.powerstats.intelligence}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Strength: ${hero.powerstats.strength}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Speed: ${hero.powerstats.speed}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Durability: ${hero.powerstats.durability}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Power: ${hero.powerstats.power}</h4>`
//         powerstatsDiv.innerHTML += `<h4>Combat: ${hero.powerstats.combat}</h4>`
//     })
// }
const randomId = () => {
 
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}


superHeroBtnDiv.onclick = () => getSuperHero(randomId())
searchBtn.onclick = () => getSearchSuperHero(searchInput.value)


// superHeroBtnDiv.onclick = () => console.log(randomId())



// const img = 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'

// document.querySelector('body').innerHTML = `<img src ='${img}' height=400 />`

// https://superheroapi.com/api/access-token/character-id

