if(localStorage.getItem("theme")) {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
    // document.getElementById("themeSwitch").checked = localStorage.getItem("theme") === "dark";
}

// document.getElementById("themeSwitch").addEventListener("click", (e) => {
//     document.documentElement.setAttribute("data-theme", e.target.checked ? "dark" : "light");
//     localStorage.setItem("theme", e.target.checked ? "dark" : "light");
// });

$("body").append(`
    <div class="theme-switch-wrapper">
    </div>
`);