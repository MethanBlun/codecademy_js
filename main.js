let queue = [];

// Ajout d'éléments à la fin de la file
queue.push("Task 1");
queue.push("Task 2");
queue.push("Task 3");

// Traitement des éléments de la file à intervalles réguliers
let intervalId = setInterval(() => {
  if (queue.length === 0) {
    clearInterval(intervalId); // Arrête l'intervalle lorsque la file est vide
    console.log("Queue is empty, stopping interval.");
  } else {
    let task = queue.shift(); // Retire et traite le premier élément de la file
    console.log("Processing:", task);
    console.log("Remaining queue:", queue);
  }
}, 2000);

