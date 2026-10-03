const produits = [
  { nom: 'Clavier', prix: 45 },
  { nom: 'Écran', prix: 320 },
  { nom: 'Souris', prix: 25 }
];

// Destructuration 
const { nom, prix } = produits[0];
console.log(nom, prix);

//  produit :  Souris
const souris = produits.find(p => p.nom === 'Souris');
console.log(souris.prix);

// produits dont le prix est inferieur  100
const pasChers = produits.filter(p => p.prix < 100);
console.log(pasChers);

// fnct flechee prix moins 10 
const avecRemise = (prix) => prix * 0.9;
console.log(avecRemise(320));

//transformeration chaque prod 
const noms = produits.map(p => p.nom);
console.log(noms);