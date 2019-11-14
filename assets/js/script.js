$(document).ready(initializeApp)
function initializeApp() {
  $('.card').on('click', handleCardClick);//when user  clicks on the selected jquery dom, call the handleCardClick function
}
var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;


function handleCardClick(event) {
  var clickedCard = event.currentTarget;
  console.log("only cardimg child: ", $(clickedCard).find('.cardimg'))
  $(clickedCard).find('.cardimg').addClass('hidden')
if (firstCardClicked === null) {
  firstCardClicked = event.currentTarget;
}
else {
  secondCardClicked = event.currentTarget;
}
var firstFace = firstCardClicked.find('.face').css('background-image');
var secondFace = secondCardClicked.find('.face').css('background-image');
console.log(firstCardClicked);

//console.log(firstFace);
//console.log(secondFace);
if (firstFace==secondFace) {
  console.log("Cards Match");
  matches +1;
}
}
// play around with arrangement of code and give secondFace a value.
// Secondface wont work since its in an else statement therefore since the first
// if is true else never runs therefore it has no value
// This is why im getting the errors. Then after you fix this cocnsole log
// first face and second face.
