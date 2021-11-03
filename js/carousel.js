/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myIndex = 0, lawIndex = 0;
carousel();
lawSlide();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1;}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change image every 10 seconds
}

function lawSlide() {
  var i;
  var x = document.getElementsByClassName("lawSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  lawIndex++;
  if (lawIndex > x.length) {lawIndex = 1;}    
  x[lawIndex-1].style.display = "block";  
  setTimeout(lawSlide, 10000); // Change image every 10 seconds
}


