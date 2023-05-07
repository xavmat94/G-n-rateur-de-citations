// Tableau contenant les citations
var citations = [
  "Je cherche le sommeil mais il faut y aller les yeux fermés alors j'ai souvent du mal à le trouver.",
  "La lâcheté de fuir la vie mène au courage d'affronter la mort.",
  "Dans un cercle, je me tiens à carreaux.",
  "Je sais que je ne suis pas le centre du monde mais de mon point de vue je suis toujours au milieu.",
  "La lune est le soleil mais en mode économie d'énergie.",
  "Les travesties sont les plus belles lorsqu'on imagine que ce sont des sortes de sirènes avec leurs queues.",
  "L'argent devrait toujours être le second prix mais le prix est fixé selon l'argent.",
  "Il est préférable de vivre la nuit, l'obscurité est meilleure pour la santé, comme nous le montre la longévité des vampires.",
  "Nous rions quand une personne tombe telle la chute d'une blague.",
  "Le temps passe, ça tourne.Il serait donc circulaire comme un éternel recommencement.",
  "Je suis fou.Mais si je le dis je me rend compte de ma folie.Donc, je ne suis pas si fou que ça.Je suis donc un menteur.Mais si je le dis...",

];

// Fonction pour afficher une citation aléatoire
function afficherCitation() {
  var index = Math.floor(Math.random() * citations.length);
  var citation = citations[index];
  document.getElementById("citation").textContent = citation;
}
