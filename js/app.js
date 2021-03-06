// Hamburger menu
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click',()=> {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
  }else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});




// Set the date we're counting down to
var countDownDate = new Date("July 10, 2021 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {


  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("container-numbers").innerHTML = "Nap:"+ days + "   " +  "Óra:" + hours + "   "
  +  "Perc:" + minutes + ":" + seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("container-numbers").innerHTML = "EXPIRED";
  }
}, 1000);

