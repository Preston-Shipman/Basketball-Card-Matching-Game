$(document).ready(intializeApp);

let firstCardClicked = null;
let secondCardClicked = null;
let matches = null;
const max_matches = 9;
let attemps = null;
let games_played = 0;
let lockGame = false;

let classArray = ["bucks", "bulls", "clippers", "lakers", "mavericks", "raptors",
  "rockets", "warriors", "timberwolves", "bucks", "bulls", "clippers",
  "lakers", "mavericks", "raptors", "rockets", "warriors", "timberwolves"];

let indexStart = 0;
let speed = 100;
let indexEnd = 0;

function intializeApp() {
  createCard();
  $(".container").on('click', '.card', handleCardClick);
  $("#reset_btn").on('click', resetGame);
}


function handleCardClick(event) {
  if (lockGame || firstCardClicked !== null && secondCardClicked !== null) {
    return;
  }
  let $target = $(event.currentTarget);
  $target.addClass("unclickable");
  if ($target.find(".back").hasClass('unclickable')) {
    return;
  }
  let face = $target.find(".face");
  let back = $target.find(".back");

  if (!firstCardClicked) {
    firstCardClicked = $target;
  }

  else {
    secondCardClicked = $target;
    attemps++;

    let firstCardFace = firstCardClicked.find(".face");
    let secondCardFace = secondCardClicked.find(".face");
    let firstCardClickedURL = firstCardFace.css("background-image");
    let secondCardClickedURL = secondCardFace.css("background-image");
    if (firstCardClickedURL === secondCardClickedURL) {
      matches++;
      let cardName = face.attr('class');
      firstCardClicked = null;
      secondCardClicked = null;
      if (matches === max_matches) {
        setTimeout(endGameModal, 1500);
        games_played++;
      }
    }
    else {
      lockGame = true;
      setTimeout(hideFrontCard, 1500);
    }
    displayStats();
  }


  function endGameModal() {
    $("#end-game").removeClass("hide")
  }

  function hideFrontCard() {
    firstCardClicked.removeClass("unclickable");
    secondCardClicked.removeClass("unclickable");

    firstCardClicked = null;
    secondCardClicked = null;
    lockGame = false;
  }
}


function resetGame() {
  $(".modal").addClass("hide");
  matches = 0;
  attemps = 0;

  displayStats();
  $("#Accuracy p").text("0%");
  $(".container").empty();
  createCard();
  $(".start-game").removeClass("hide");

}


function calculateAccuracy() {
  let accuracy = matches / attemps;
  accuracy = Math.round(10000 * accuracy) / 100;
  let accuracyStr = accuracy + '%';
  return accuracyStr;
}


function displayStats() {
  let accuracy = calculateAccuracy();
  $("#games_played p").text(games_played);
  $("#attemps p").text(attemps);
  $("#Accuracy p").text(accuracy);
}

function createCard() {
  let arr = shuffle(classArray);
  let container = $(".container");
  for (let index = 0; index < arr.length; index++) {
    let sceneDiv = $("<div>").addClass("scene");
    let currentCard = $("<div>").addClass("card");
    let classCard = arr[index];
    let faceOfCard = $("<div>").addClass("face " + classCard);
    let backOfCard = $("<div>").addClass("back");

    container.append(sceneDiv);
    sceneDiv.append(currentCard);
    currentCard.append(faceOfCard);
    currentCard.append(backOfCard);
  }
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;


  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}
