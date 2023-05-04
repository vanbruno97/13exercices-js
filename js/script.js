// Exercice 1
function password(){
    let password = prompt("Entrez le mot de passe 12345:");
if (password === "12345") {
    alert('Bienvenue');
} else{
    alert("Erreur mot de passe");
}
}

// Exercice 2.a
function nombresPairs(){
    let x = prompt ('Entrez un nombre x:')
for(let i = 0 ; i <= x; i+=2){
    console.log(i);
}
}
// Exercice 2.b
function nombresImpairs() {
    let x = prompt ('Entrez un nombre X:');
    for(let i=1 ; i <= x ; i+=2){
        console.log(i);
    }
}
// Exercice 3
function changeValues () {
    let a = prompt('Entrez une valeur A');
let b = prompt('Entrez une valeur B');

// Affichage des valeurs initiales
console.log("Valeurs initiales : a =", a, "et b =", b);

// Échange des valeurs
let temp = a;
a = b;
b = temp;
alert("A = "+a+"\nB = "+b)
}
// Exercice 4
function year (){
    let annee = parseInt(prompt("Entrez une année (YYYY) : "));
let bissextile = false;
// Conditions pour une année bissextile
if (annee % 4 == 0) {
  if (annee % 100 == 0) {
    if (annee % 400 == 0) {
      bissextile = true;
    }
  } else {
    bissextile = true;
  }
}

if (bissextile) {
  alert("Oui, c'est une année bissextile.");
} else {
  alert("NON, ce n'est pas une année bissextile.");
}
}

// Exercice 5
function equation(){
    // Simulation des valeurs a , b et c
    let a = 2;
    let b = -5;
    let c = 3;
    // Calcul du discriminant
    let delta = b * b - 4 * a * c;
    // Définition des conditions
    if(delta < 0) {
        console.log("L'équation n'admet pas de solutions réelles!")
    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("L'équation admet une solution unique :", x);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log ("l'équation a deux raçines réelles :", x1, "et :", x2)
    }
}
// Exercice 6
function intervalle () {
    let nombre = 0;
    // Boucle tant que le nombre n'est pas compris entre 1 et 3
    while(nombre < 1 || nombre > 3){
        // Demande à l'utilisateur d'entrer un nombre
        nombre = parseInt(prompt("Entrez un nombre compris entre 1 et 3:"));
        // vérifie si le nombre est compris entre 1 et 3
        if (nombre < 1 || nombre > 3){
            alert("Le nombre doit être compris entre 1 et 3!");
        } 
        if (nombre > 1 && nombre < 3){
            alert ("Good Job!");
        }
    }
}
// Exercice 7
function intervalleSecond () {
    let nombre = 0;
    // Boucle tant que le nombre n'est pas compris entre 10 et 20
    while(nombre < 10 || nombre > 20){
        // Demande à l'utilisateur d'entrer un nombre
        nombre = parseInt(prompt("Entrez un nombre compris entre 10 et 20:"));
        // vérifie si le nombre est compris entre 10 et 20
        if (nombre < 10){
            alert("Plus grand!");
        }
        if(nombre > 20){
            alert("Plus petit!");
        }
        if(nombre > 10 && nombre <20){
            alert("Correct");
        } else{
            alert("Reessayez!");
        }
    }
}
// Exercice 8
function addTen () {
    let nombreDeDepart = parseInt(prompt("Entrez un nombre de départ : "));
for (let i = 1; i <= 10; i++) {
  console.log(nombreDeDepart + i);
}

}

// Exercice 9

function multiply() {
    let nombre = parseInt(prompt('Entrez la valeur numérique à multiplier:'));
    console.log('La table de multiplication pour' +" "+ nombre + " "+ " est :");

    for(let i= 1; i <= 10 ; i++) {
        // Définissons le produit
        let produit = nombre * i;
        console.log(nombre + "x" + i + "=" + produit);
    }
}
// Exercice 10
function nombresEntiers () {
    let nombre = parseInt(prompt("Entrez un nombre entier :"));
    // Définissons une valeur qui va contenir la somme
    let somme = 0 ;

    for(let i = 1 ; i <= nombre ; i++) {
        somme += i ;
    }
    alert("La somme des nombres entiers jusqu'à " + " " + nombre +" "+ "donne" +" " + somme);
}
// Exercice 11
function factorielle() {
    let nombre = parseInt(prompt("Entrez un nombre :"));
    // Définissons une valeur qui va contenir la factorielle
    let factorielle = 1 ;
    for(let i = 1 ; i <= nombre ; i++) {
        factorielle *= i ;
    }
    alert('Le résultat de la factorielle de' + " " + nombre + " est : " + factorielle);

}
// Exercice 12
function theBiggest() {
    let max = 0;
    for(let i = 1 ; i <= 20 ; i++){
         let nombre = parseInt(prompt("Entrez le nombre numéro " + i + " : "));

    if (nombre > max) {
        max = nombre;
    }
    }
    alert("Le plus grand des nombres choisis est :" + max);
}
// Exercice 13
function unknown() {
    let max = 0;
    for(let i = 1 ; i <= 20 ; i++){
         let nombre = parseInt(prompt("Entrez le nombre numéro " + i + " : "));

    if (nombre > max) {
        max = nombre;
    }
    }
    alert("Le plus grand des nombres choisis est :" + max);
}








// ouvrir liste des exercices
const showNavButton = document.getElementById('showNav');
const hideNavButton = document.getElementById('hideNav');
const sidebar = document.getElementById('sidebar');

showNavButton.addEventListener('click',function(){
    sidebar.classList.add('visible');
});
hideNavButton.addEventListener('click', function(){
    sidebar.classList.remove('visible');
});