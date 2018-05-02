
// ROTATE WORDS

let words = ["I'm the life hacker Dev",

            "Nobody's gonna stop me now",

            "This world doesn't care about you, neither I do"]


    var contador = 0;

    onload = function()
    {
        rotateQuotes();  }
    
    rotateQuotes = function(){
        if(contador == words.length){
            contador = 0;
        }
        document.getElementById("_words").innerHTML = words[contador];
        contador++;
        setTimeout(rotateQuotes, 5000);

       
   
}

// SPINNER LOADER
/*
import {Spinner} from 'spin.js';

var opts = {
  lines: 12, // The number of lines to draw
  length: 5, // The length of each line
  width: 17, // The line thickness
  radius: 10, // The radius of the inner circle
  scale: 0.6, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#27c1dc', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  opacity: 0.15, // Opacity of the lines
  rotate: 55, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  speed: 1.5, // Rounds per second
  trail: 68, // Afterglow percentage
  fps: 20, // Frames per second when using setTimeout() as a fallback in IE 9
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: 'none', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};

var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);

*/