const navbarMarkup = `
<div id="navContent">
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
    <a href="/" id="navTitle" style="height: 100%;"><img src="{{logoUrl}}" alt="" style="height: 100%;"></a>
  </div>
  <div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
      </svg>
      <span id="userCoins"></span>
    </div>

    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>  
      <span id="userScore"></span>                  
    </div>
  </div>
</div>
<div id="navSpacer"></div>
`;

$(document).ready(function () {
  const baseURl = location.origin + "/Nuit/frontend";
  // Add Tailwind CSS
  $("head").append(`
    <link href="${baseURl}/nav/navbar.css" rel="stylesheet">`
  );

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
