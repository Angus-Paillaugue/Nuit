$(document).ready(function(){
  // Add Tailwind CSS
  $("head").append('<script src="https://cdn.tailwindcss.com"></script>');
  
  // Add navbar to the page
  $('nav').load('https://raw.githubusercontent.com/AldanariW/Nuit/main/frontend/src/navbar.html');
  
  // Nav dropdown
  $("#hamburgerButton").click(() => {
    $("#dropdown").toggleClass("opacity-0 opacity-100 z-50, -z-10");
  });
  
  // Update score in navbar
  updateScoreInNavBar();
});

const updateScoreInNavBar = () => {
  $('#userScore').text(localStorage.getItem("score") || 0);
  $('#userCoins').text(localStorage.getItem("coins") || 0);
}