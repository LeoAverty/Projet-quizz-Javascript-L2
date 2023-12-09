function changeColorGreen(element) {
  element.style.color = "#00FF00";
}

function changeColorRed(element) {
  element.style.color = "#FF0000";
}

const questions = Array.from(document.getElementsByClassName("question-item"));

// elements est la liste des answer-item enfant de question1
// Pour chacuns des answer-items enfant de elements
//    On ajoute un getionnaire d'évènements onClick à l'answer-item
//       gestion de l'evenement:
//       Pour chacun des answer contenus dans answer-item,
//         on vérifie la value (si elle true or false)
//         Si la value correspondante est true alors on mets question1 en vert  (sinon rouge)

questions.forEach(function (question) {
  const answers = Array.from(question.getElementsByClassName("answer"));
  answers.forEach(function (a) {
    a.addEventListener("click", function onClick(event) {
      if (a.getAttribute("value") === "true") {
        changeColorGreen(question);
      } else {
        changeColorRed(question);
      }
    });
  });
});

const form = document.getElementById("quiz-form");
const alertMessage = document.getElementById("alert");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Vérifie si toutes les bonnes réponses sont séléctionnées
  const correctAnswers = ["true", "true", "true"];
  // Ajustement basé sur la bonne réponse
  const selectedAnswers = Array.from(
    document.querySelectorAll(".answer:checked")
  ).map((input) => input.value);

  if (arraysEqual(correctAnswers, selectedAnswers)) {
    alertMessage.style.display = "block";
    // Montre le message congratulation
  } else {
    alertMessage.style.display = "none";
    // Cache le message congratulation si toutes les bonnes réponses ne sont pas séléctionnées
  }
});

// Fonction pour vérifier si deux listes sont égales
function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}
