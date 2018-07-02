var clicks = 0;
document.getElementById('clickbait').onclick = function () {
  clicks += 1;
  var newParagraph = document.createElement('p');
  newParagraph.innerHTML = 'This is click number ' + clicks;
  document.getElementsByTagName('body')[0].appendChild(newParagraph);
}
