// Quel est l'objectif du jeu ? Qu'est-ce que l'utilisateur doit faire pour gagner ?
// deviner un chiffre entre 1 et 5

// Comment pouvez-vous générer un nombre aléatoire entre 1 et 5 pour représenter le chiffre à deviner ?

// Avec Math random et Math trinc

// Comment pouvez-vous récupérer la saisie de l'utilisateur depuis le champ de saisie HTML ?
// capturer le resultat dans une variable et lui assigner textContent

// Comment pouvez-vous convertir la saisie de l'utilisateur (qui sera sous forme de texte) en un nombre entier afin de pouvoir le comparer avec le nombre à deviner ?
// Avec Number ou ParseInt ou +

// Quelle est la bonne manière de comparer le nombre deviné par l'utilisateur avec le nombre généré aléatoirement ?
// === avec un if else
// Comment pouvez-vous afficher un message approprié pour informer l'utilisateur s'il a gagné ou s'il doit essayer à nouveau ?
// peut etre un document.write?

// Que se passe-t-il lorsque l'utilisateur saisit autre chose qu'un nombre entre 1 et 5 ? Comment pouvez-vous gérer ce cas ?

// Il faut que je gere les expetions dans mon if else

let number = document.querySelector("#number");
number.textContent = "Choose a number between 1 and 5";
const resultInput = document.querySelector("#result");
let verifier = document.querySelector("#checkButton");

let randomNumber = generateRandomNumber();
console.log(randomNumber);

let checkButton = document.querySelector("#checkButton");

let counterEl = document.getElementById("counter");

let counter = 0;
counterEl.textContent = counter;

function generateRandomNumber() {
  return Math.trunc(Math.random() * 5) + 1;
}

function guessNumber() {
  let userInput = resultInput.value;
  userInput = +userInput;

  counterEl.textContent = counter;

  // Animation fade out
  number.classList.add("number-fade-out");

  // Animation Glow
  checkButton.classList.add("glow");

  setTimeout(() => {
    if (userInput < 1 || userInput > 5 || isNaN(userInput)) {
      number.textContent = "Choose a number between 1 and 5";
    } else if (userInput === randomNumber) {
      counter++;
      number.textContent = "Congratulations! You Win!";
      randomNumber = generateRandomNumber();

      // add class won to btn
      checkButton.classList.add("won");
    } else {
      counter++;
      number.textContent = `Not a good idea... !`;

      // remove class won from btn
      checkButton.classList.remove("won");
    }
    counterEl.textContent = `${counter} tentatives`;
    // Animation fade in
    number.classList.remove("number-fade-out");
    number.classList.add("number-fade-in");
    checkButton.classList.remove("glow");
  }, 300);
}

checkButton.addEventListener("click", guessNumber);
