var readlineSync = require("readline-sync");

let score = 0;

var data = [
  {
    question: "What was the old name of Varanasi(Banaras)??",
    answer: "Kashi",
  },
  {
    question: "On which river bank Varanasi is situated??",
    answer: "Ganges",
  },
  {
    question: "Varanasi or Banaras(Benares) is famous for…??",
    answer: "Silk",
  },
  {
    question: "Who built Ramnager fort in Varanasi?",
    answer: "Maharaj Balwant singh",
  },
  {
    question: " Which famous temple of Lord Shiva is situated in Varanasi??",
    answer: "Kashi vishwanath",
  },
  {
    question:
      "Who founded Banaras Hindu University, the largest residential university in Asia, in 1916?",
    answer: "Pandit Madan Mohan Malviya",
  },
  {
    question:
      "What is the official name of Varanasi Airport commonly known as Babatpur Airport?",
    answer: "Lal Bahadur Shastri International Airport",
  },
  {
    question:
      "Which terror group was involved in March 2006 bomb blasts at Sankat Mochan Hanuman Temple in Varanasi?",
    answer: "Lashkar-e-Kahab",
  },
];

function wlcmMsg() {
  var yourName = readlineSync.question("What is your name? ");

  console.log("Welcome " + yourName + "  do you know About Varanasi?");
  console.log("---------------------");
}
function kashi(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Awesome😊 You are right!!");
    score = score + 2;
  } else {
    console.log("Sorry😒 You are wrong!");

    console.log("Correct Answer is : ", answer);
  }

  console.log("Your current score: ", score);
  console.log("-------------");
}

function logic() {
  for (var i = 0; i < data.length; i++) {
    var currentSawal = data[i];
    kashi(currentSawal.question, currentSawal.answer);
  }
}

function scorePoint() {
  console.log("Your score is : ", score);
}

wlcmMsg();
logic();
scorePoint();
