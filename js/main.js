var clicks = 0;
document.getElementById('clickbait').onclick = function () {
  clicks += 1;
  var newParagraph = document.createElement('p');
  newParagraph.innerHTML = 'This is click number ' + clicks;
  document.getElementsByTagName('body')[0].appendChild(newParagraph);
}

var submission = document.getElementById('form');

submission.addEventListener('submit', function(submitting) {
  submitting.preventDefault();

  var firstName = document.getElementById('first').value;
  console.log('The firstName is: ' + firstName);

  var lastName = document.getElementById('last').value;
  console.log('The lastName is: '  + lastName);

  var email = document.getElementById('email').value;
  console.log('The email is: ' + email);

  var message = document.getElementById('message').value;
  console.log('The message is: ' + message);

});

//These two event listeners will bring you into a fun Gator game ritual when you Mouseover and Mouseout of the submission button! One listens for mouseovers on the submission button and screams orange! when you do. The other listens for mouseouts of the submission button and screams blue! when you do.

var x = document.getElementById("submission");
x.addEventListener("mouseover", orange);
x.addEventListener("mouseout", blue);

function orange() {
    document.getElementById("chanting").innerHTML += "Orange!<br>";
}

function blue() {
    document.getElementById("chanting").innerHTML += "Blue!<br>";
}

//This event listener helps you understand the mind of your browser when you resize it. It listens for resizes and it gets mad when you do resize.

window.addEventListener("resize", function(){
    document.getElementById("angry").innerHTML = "Hey! Pay attention to me! Don't shut me out of your screen! I need you!";
});
