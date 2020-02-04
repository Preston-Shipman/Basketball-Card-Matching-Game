$(document).ready(initializeApp);
function initializeApp() {
  $('.card').on('click', handleCardClick);
  $('.modal').addClass('hidden');
}
let firstCardClicked = null;
let secondCardClicked = null;
let matches = null;
const max_matches = 9;
let attempts = null;
let games_played = null;


function handleCardClick(event) {
  $(event.currentTarget).find('.cardimg').addClass('hidden');
  console.log("only cardimg child: ", event.currentTarget)
  if (firstCardClicked === null) {
    firstCardClicked = $(event.currentTarget);
  }
  else {
    secondCardClicked = $(event.currentTarget);
    const firstFace = firstCardClicked.find('.face').css('background-image');
    const secondFace = secondCardClicked.find('.face').css('background-image');
    if (firstFace === secondFace) {
      console.log('They match');
      matches++;
      firstCardClicked = null;
      secondCardClicked = null;
    } else {
      setTimeout(function () {
        firstCardClicked.find('.cardimg').removeClass('hidden');
        secondCardClicked.find('.cardimg').removeClass('hidden');
        firstCardClicked = null;
        secondCardClicked = null;
      }, 500);
    }
  }
  attempts += 1;
  displayStats();
}

function calculateAccuracy() {
  let accOutput = (attempts / matches);
  let accuracyNum = accOutput.toFixed(1)
  return accuracyNum;
}
function displayStats() {
  $('.stats2').text(attempts);
  let accuracy = calculateAccuracy();
  $('.stats4').text(accuracy);
  if (matches === max_matches) {
    $('#myModal').removeClass('hidden');
    console.log('the if modal runs');
    $('.resetbtn').on('click', resetStats);
  }
  function resetStats() {
    matches = null;
    attempts = null;
    accuracy = null;
    games_played += 1;
    $('.cardimg').removeClass('hidden');
    $('#myModal').addClass('hidden');
    $('.stats2').text(null);
    $('.stats4').text(null);
    $('.stats6').text(games_played);
  }
  }

  // function shuffle() {
  //   const cardArray = [
  //     "jerryWest",
  //     "kareemAbdul-Jabbar",
  //     "kobeBryant",
  //     "larryBird",
  //     "lebronJames",
  //     "michealJordan",
  //     "shaquilleOneal",
  //     "wiltChamberlain",
  //     "stephCurry"
  //   ];
  //   var m = cardArray.length, t, i;
  //   while (m) {
  //     i = Math.floor(Math.random() * m--);
  //     t = cardArray[m];
  //     cardArray[m] = cardArray[i];
  //     cardArray[i] = t;
  //   }
  //   return cardArray;
  // }
