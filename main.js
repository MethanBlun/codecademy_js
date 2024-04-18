

let usersPokemon

const getUsersPokemon = ({target})=>{
    usersPokemon = target.value
        console.log(usersPokemon)
  
}
const getPokemonFromApi = ()=>{
    console.log(usersPokemon)
}



// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => {
//         if(!response.ok){
            
//             throw new Error('could not fetch ressources')
//         }
//      return response.json()
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error))
