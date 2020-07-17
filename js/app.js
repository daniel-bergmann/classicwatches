"use strict";

// To initialize the JS file
M.AutoInit();


// Jquery

$(document).ready(function(){
    
    $('.slider').slider({full_width: true});
  });





// Vanilla JS


// Parallax

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

//   Carousel

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });


  