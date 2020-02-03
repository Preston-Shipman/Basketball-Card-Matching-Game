$(document).ready(initializeApp)
function initializeApp() {
  $('.card').on('click', handleCardClick);//when user  clicks on the selected jquery dom, call the handleCardClick function
}
function handleCardClick(event) {
  var clickedCard = event.currentTarget;
  console.log("only cardimg child: ", $(clickedCard).find('.cardimg'))
  $(clickedCard).find('.cardimg').addClass('hidden')
}
