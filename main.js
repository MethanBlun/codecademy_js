const isPhoneStore = false;
const isPhoneAvailable = true;

// let processMessage = new Promise((resolve, reject) => {
//   if (!isPhoneStore) {
//     reject({
//       name: "Wrong store",
//       message: "Sorry, this is a food store!",
//     });
//   } else if (!isPhoneAvailable) {
//     reject({
//       name: "Out of stock",
//       message: "Sorry, the X phone is out of stock!",
//     });
//   } else {
//     resolve({
//       name: "OK",
//       message: "The X phone is available! How many you want to buy?",
//     });
//   }
// });

// processMessage.then(message => console.log(message)).catch(message => console.log(message))
// processMessage(
//   (value) => console.log(value),
//   (reason) => console.log(reason)
// );

// let p = new Promise((resolve, reject) => {
//   let testReussi = false;

//   if (testReussi) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });

// p.then((message) => {
//   console.log(`le resole a bien ${message}`);
// }).catch((message) => {
//   console.log(`le message est une ${message}`);
// });

let usersPokemon;

const getUsersPokemon = ({ target }) => {
  usersPokemon = target.value;
  usersPokemon = usersPokemon;
};

async function getPokemonFromApiUn() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${usersPokemon.toLowerCase()}`
    );
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      let dynImg = document.getElementById("dynamic-image");
      dynImg.src = json.sprites.back_shiny;
    }
  } 
    catch (error) {
      console.error(error);
      alert("Votre Pokémon n'existe pas.");
  }
}
// const getPokemonFromApi = () => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${usersPokemon.toLowerCase()}`)
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
