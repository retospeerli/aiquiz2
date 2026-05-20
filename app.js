// app.js

const quizData = [

{
question: "Was versteht man unter Künstlicher Intelligenz (KI)?",
answers: [
"a) Computerprogramme, die nur einfache Rechenaufgaben lösen können.",
"b) Computerprogramme, die menschliche Hilfe für alle Aufgaben brauchen.",
"c) Computerprogramme, die keine Entscheidungen treffen können.",
"d) Computerprogramme, die selbstständig Entscheidungen treffen und Aufgaben ausführen."
],
correct: 3
},

{
question: "Für welche Art von Aufgaben wird KI eingesetzt?",
answers: [
"a) Aufgaben, die nur Maschinen ausführen können.",
"b) Aufgaben, für die normalerweise ein menschliches Gehirn nötig ist.",
"c) Aufgaben, die ausschließlich mit Muskelkraft gelöst werden.",
"d) Aufgaben, die nur in der Wissenschaft vorkommen."
],
correct: 1
},

{
question: "Welches Beispiel für KI im Alltag wird genannt?",
answers: [
"a) KI in Kühlschränken.",
"b) KI im Geschirrspüler.",
"c) KI in Smartphones.",
"d) KI in Computermäusen."
],
correct: 2
},

{
question: "Was versteht man unter schwacher KI?",
answers: [
"a) Eine KI, die keine Informationen benötigt.",
"b) Eine KI, die auf eine bestimmte Aufgabe spezialisiert ist.",
"c) Eine KI, die alle Aufgaben eines Menschen übernehmen kann.",
"d) Eine KI, die keine Entscheidungen treffen kann."
],
correct: 1
},

{
question: "Welche Aufgabe kann die Spracherkennung auf einem Handy ausführen?",
answers: [
"a) Den Besitzer erkennen.",
"b) Befehle verstehen und ausführen.",
"c) Texte automatisch vorlesen.",
"d) Den Akku aufladen."
],
correct: 1
},

{
question: "Wie funktioniert die Musikempfehlung durch KI?",
answers: [
"a) Die KI errät zufällig neue Lieder.",
"b) Die KI merkt sich, was man hört, und schlägt ähnliche Songs vor.",
"c) Die KI überprüft die Wetterlage und schlägt passende Musik vor.",
"d) Die KI sucht nach den meistgehörten Liedern weltweit."
],
correct: 1
},

{
question: "Was macht die Bilderkennung in Kameras?",
answers: [
"a) Sie erkennt Farben.",
"b) Sie berechnet die Größe von Objekten.",
"c) Sie erkennt Gesichter und macht den Hintergrund unscharf.",
"d) Sie fokussiert auf Landschaften."
],
correct: 2
},

{
question: "Warum spricht man von einer schwachen KI?",
answers: [
"a) Weil sie sehr langsam arbeitet.",
"b) Weil sie nur auf eine bestimmte Aufgabe spezialisiert ist.",
"c) Weil sie viele Fehler macht.",
"d) Weil sie keine großen Datenmengen verarbeiten kann."
],
correct: 1
},

{
question: "Wie lernt eine schwache KI dazu?",
answers: [
"a) Indem sie mit Informationen gefüttert und mit Beispielen trainiert wird.",
"b) Indem sie sich selbst neue Daten sucht.",
"c) Indem sie von anderen Maschinen lernt.",
"d) Indem sie ständig neue Programme herunterlädt."
],
correct: 0
},

{
question: "Was wäre ein Merkmal einer starken KI?",
answers: [
"a) Sie könnte selbstständig Entscheidungen treffen.",
"b) Sie könnte nur eine Aufgabe sehr gut lösen.",
"c) Sie würde niemals Fehler machen.",
"d) Sie könnte ohne jegliche Daten arbeiten."
],
correct: 0
},

{
question: "Was ist der aktuelle Stand der starken KI laut Expertinnen und Experten?",
answers: [
"a) Es gibt sie schon in vielen Bereichen.",
"b) Sie wird bald entwickelt.",
"c) Es gibt noch keine starke KI.",
"d) Sie funktioniert nur in Laboren."
],
correct: 2
},

{
question: "Welche Kritik wird an KI geübt?",
answers: [
"a) Dass immer mehr Arbeitsplätze verloren gehen.",
"b) Dass KI immer Fehler macht.",
"c) Dass sie die Umwelt schädigt.",
"d) Dass sie zu langsam arbeitet."
],
correct: 0
},

{
question: "Wie lernen KIs, menschliche Gesichter zu erkennen?",
answers: [
"a) Sie erstellen eine Datenbank von Hand.",
"b) Sie werden mit Bildern von Gesichtern trainiert.",
"c) Sie nutzen nur Textinformationen.",
"d) Sie lernen automatisch ohne menschliches Zutun."
],
correct: 1
},

{
question: "Was sagen viele Expertinnen und Experten über die Zukunft der starken KI?",
answers: [
"a) Sie glauben, dass es sie bereits gibt.",
"b) Sie denken, dass sie bald die Welt übernehmen wird.",
"c) Viele glauben, dass es sie vielleicht nie geben wird.",
"d) Sie glauben, dass sie gefährlich ist."
],
correct: 2
},

{
question: "Was ist ein Vorteil von KI?",
answers: [
"a) Sie hilft uns, Dinge schneller und besser zu erledigen.",
"b) Sie ersetzt vollständig menschliche Arbeit.",
"c) Sie kann eigenständig kreative Arbeiten erledigen.",
"d) Sie verursacht keine technischen Probleme."
],
correct: 0
}

];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

function buildQuiz(){

quizData.forEach((q, index)=>{

const questionDiv = document.createElement("div");
questionDiv.classList.add("question");

let answersHTML = "";

q.answers.forEach((answer, i)=>{
answersHTML += `
<label>
<input type="radio" name="question${index}" value="${i}">
${answer}
</label>
`;
});

questionDiv.innerHTML = `
<h2>${index + 1}. ${q.question}</h2>
<div class="answers">
${answersHTML}
</div>
`;

quizContainer.appendChild(questionDiv);

});

}

function showResults(){

let score = 0;

quizData.forEach((q, index)=>{

const selected = document.querySelector(`input[name="question${index}"]:checked`);
const labels = document.querySelectorAll(`input[name="question${index}"]`);

labels.forEach((input, i)=>{

const parent = input.parentElement;

parent.classList.remove("correct");
parent.classList.remove("wrong");

if(i === q.correct){
parent.classList.add("correct");
}

});

if(selected){

const answer = Number(selected.value);

if(answer === q.correct){
score++;
}else{
selected.parentElement.classList.add("wrong");
}

}

});

resultDiv.innerHTML = `
Du hast <strong>${score} von ${quizData.length}</strong> Fragen richtig beantwortet.
`;

window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});

}

buildQuiz();

submitBtn.addEventListener("click", showResults);
