



let p = new Promise((resolve,reject)=>{
let testReussi = false;

if (testReussi){
  resolve('success' )
}else { reject('error')}
})





p.then(message=>{ console.log(`le resole a bien ${message}`)}  ).catch(message => {console.log(`le message est une ${message}`)})



// let usersPokemon;

// const getUsersPokemon = ({ target }) => {
//   usersPokemon = target.value;
// };
// const getPokemonFromApi = () => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${usersPokemon}`)
//     .then((resp) => {
//       if (!resp.ok) {
//         throw (
//           (new Error("POkemon enexistant"),
//           alert("your pokemon does not exist"))
//         );
//       }
//       return resp.json();
//     })
//     .then(function (data) {
//       dynImg = document.getElementById("dynamic-image");
//       dynImg.src = data.sprites.back_shiny;
//       //relier la source de l'img avec le repertoire dans l'api
//     })
//     .catch((error) => {
//       console.error(error);
//       alert("Votre Pokémon n'existe pas.");
//     });
// };
