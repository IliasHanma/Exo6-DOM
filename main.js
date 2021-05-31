// ### 1. Affiche le h3 qui est le premier enfant de la div content

let h3 = document.getElementsByTagName('div')[0];
let firstChild = h3.firstElementChild.innerText;
console.log(firstChild);
// ### 2. Affiche le titreNiv3

let titreNiv3 = document.getElementsByTagName('h3')[1].innerText;
console.log(titreNiv3);

// ### 3. Affiche l'élément qui précède le titreNiv3
let precedeTitreNiv3 = document.getElementsByTagName('p')[3].innerText;
console.log(precedeTitreNiv3);

// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode
// nextElementSibling
let petitParagraphe = document.getElementsByTagName('p')[1];
let nextElement = petitParagraphe.nextElementSibling;
console.log(nextElement);

// ### 5. Affiche le parent des éléments ayant comme class "important" 

let y = Array.from(document.querySelectorAll(".important"));
console.log(y);
y.forEach(element => {
    console.log(element.parentElement);
});

// ### 6. Affiche le premier enfant, du parent de "listElements"
let listElements = document.getElementsByTagName('ul')[0];
let premierEnfant = listElements.firstElementChild.innerText;
console.log(premierEnfant);
// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
let important1 = document.getElementsByTagName('li')[3];
let nextElement1 = important1.nextElementSibling.innerText;
console.log(nextElement1);
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
let textGeneral = document.getElementsByTagName('p')[3];
let nextElement2 = textGeneral.nextElementSibling;
let nextElement3 = nextElement2.nextElementSibling.innerText;
console.log(nextElement3);
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let spanNom = document.getElementsByTagName('span')[1].parentElement.nextElementSibling;
console.log(spanNom);
// ### 10. En partant de Nicolas, affiche Primo
let nico = document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
console.log(nico)
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via 
// sa class ou son id sans utiliser getElementById ou getElementsByClassName
//  et récupère "grandParagraphe"

// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments,
//  qu'ils aient des class ou non et affiche tous les li dansu ne boucle