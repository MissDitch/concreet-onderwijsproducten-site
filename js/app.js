$(document).foundation()
var match = window.matchMedia("screen and (max-width: 39.9375em");
console.log(match.media);     //"screen and (max-width:39.9375em)"
console.log(match.matches);   //true or false
match.addListener(function(match){
  if (match.media == "screen and (max-width: 39.9375em)"){
    var content = document.getElementById('topBarLeft');
    var parent = content.parentNode;
    parent.insertBefore(content, parent.firstChild);
    }
  });
