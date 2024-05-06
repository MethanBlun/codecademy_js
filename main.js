
fetch('learning.json')
  .then(response => response.json())
  .then(data => {
    // Une fois que le fichier est chargé avec succès, vous pouvez utiliser son contenu
    var citations = data;

    // Fonction pour afficher une citation et son auteur au hasard
    function afficherCitationAuHasard() {
        // Sélectionner une citation au hasard
        var citation = citations[Math.floor(Math.random() * citations.length)];
        // Afficher la citation et son auteur
        console.log('Citation: ' + citation.quote);
        console.log('Auteur: ' + citation.author);
    }

    // Appel de la fonction pour afficher une citation au hasard
    afficherCitationAuHasard();
  })
  .catch(error => {
    // En cas d'erreur lors du chargement du fichier JSON
    console.error('Une erreur est survenue lors du chargement du fichier JSON :', error);
  });
