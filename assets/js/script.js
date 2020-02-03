$(document).ready(initializeApp);
function initializeApp() {
  $('.card').on('click', handleCardClick);//when user  clicks on the selected jquery dom, call the handleCardClick function
  $('.modal').addClass('hidden');
}
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var max_matches = 9;
var attempts = null;
var games_played = null;


function handleCardClick(event) {
  $(event.currentTarget).find('.cardimg').addClass('hidden');
  console.log("only cardimg child: ", event.currentTarget)
  if (firstCardClicked === null) {
    firstCardClicked = $(event.currentTarget);
  }
  else {
    secondCardClicked = $(event.currentTarget);
    var firstFace = firstCardClicked.find('.face').css('background-image');
    var secondFace = secondCardClicked.find('.face').css('background-image');
    if (firstFace === secondFace) {
      console.log('They match');
      matches++;
      if (matches === max_matches) {
        $('#myModal').removeClass('hidden');
        console.log('the if modal runs');
        games_played += 1;
      }
      firstCardClicked = null;
      secondCardClicked = null;
    } else {
      setTimeout(function () {
        firstCardClicked.find('.cardimg').removeClass('hidden');
        secondCardClicked.find('.cardimg').removeClass('hidden');
        firstCardClicked = null;
        secondCardClicked = null;
      }, 1500);
    }
  }
  attempts += 1;
  displayStats();
}
function calculateAccuracy() {
   var accOutput = (attempts / matches);
  return accOutput;
}
function displayStats() {
  $('.stats1').text(attempts);
  var accuracy = calculateAccuracy();
  $('.stats2').text(accuracy);
  $('.stats6').text(games_played);
}
