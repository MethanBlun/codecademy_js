const array1 = ["mark", "zuk", "may", "faal", "christ"];
const array2 = ["mark", "zuk", "herk", "royal", "sisre"];
const array3 = [];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) { // Initialisation de j à 0
    console.log('j : ', j);
    if (array1[i] === array2[j]) {
      array3.push(array1[i]); // Ajouter l'élément correspondant à array3
    }
  }
}

console.log(array3); // Afficher les éléments similaires trouvés

//TODO:creer creer deux array avecc des valeurs et une vide dont on ajoute les valeurs croisees
