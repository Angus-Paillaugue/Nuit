const navbarMarkup = `
<nav id="navContent">
  <div>
    <div>
      <a href="/">Accueil</a>
    </div>
    <div>
      <button id="hamburgerButton">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div id="dropdown">
      <a href="/">Accueil</a>
    </div>
  </div>
  <div style="height: 100%;">
    <a href="/" id="navTitle" style="height: 100%;"><img src="https://raw.githubusercontent.com/AldanariW/Nuit/main/frontend/src/logo_banner.png" alt="" style="height: 100%;"></a>
  </div>
</nav>
<div id="navSpacer"></div>
`;

$(document).ready(function() {
    const baseURl = location.origin;
    // Add Tailwind CSS
    $("head").append(`
    <link href="${baseURl}/nav/navbar.css" rel="stylesheet">`);

    const logoUrl = baseURl + "/src/logo_banner.png";

    // Add navbar to the page
    $(navbarMarkup.replace("{{logoUrl}}", logoUrl)).prependTo("body");

    // Nav dropdown
    $("#hamburgerButton").click(() => {
        $("#dropdown").toggleClass("shown");
    });

    // Update score in navbar
    updateScoreInNavBar();
});

const updateScoreInNavBar = () => {
    $("#userScore").text(localStorage.getItem("score") || 0);
    $("#userCoins").text(localStorage.getItem("coins") || 0);
};