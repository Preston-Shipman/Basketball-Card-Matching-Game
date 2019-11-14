$(document).ready(initializeApp);
function initializeApp() {
  $('.card').on('click', handleCardClick);//when user  clicks on the selected jquery dom, call the handleCardClick function
}
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;


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
      matches+1;
    } else {
      setTimeout(function () {
        firstCardClicked.find('.cardimg').removeClass('hidden');
        secondCardClicked.find('.cardimg').removeClass('hidden');
      }, 1500);
    }
  }
}
