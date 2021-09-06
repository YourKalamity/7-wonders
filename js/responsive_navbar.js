function openNavBar() {
    var nav_bar = document.getElementById("topnavbar");
    if (nav_bar.className === "navbar"){
        nav_bar.className += " responsive";
    } else {
        nav_bar.className = "navbar";
    }
    var icon = document.getElementById("menubar");
    icon.className += " hidden";
}