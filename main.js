// TODO : creer une fonction qui prend en argument deux
// cles d'un object et afficher ces deux element

// const users = {
//   'name': 'mara',
//   age : 18,
//   isRich : false
// }

// function getIt({name, age}){
//   console.log(`my is ${name} and i am ${age} years old`)

// }
// getIt(users)

// TODO : creer un tableau users contenant 3 objets
//  contenant chaqu'un nom et age puis afficher dans
//  la console 'nom' is 'age' years old avec la boucle
//  for of et la methode map()

const users = [
  { nom: "moustapha", age: "18", isRich: false },
  { nom: "abc", age: "19", isRich: false },
  { nom: "ousmane", age: "50", isRich: true },
  
];

for(let user of users){
  console.log(`my mae is ${user.nom}, and i am ${user.age} years old`)
}

users.map((user) => console.log( `${user.nom}, and i am ${user.age} years old`))
