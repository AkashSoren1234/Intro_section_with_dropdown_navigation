function openSlideMenu() {
  document.getElementById("nav_menu").classList.add("open");
  document.getElementById("overlay").classList.add("open");
  document.getElementById("main").classList.add("open");
}

function closeSlideMenu() {
  document.getElementById("nav_menu").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
  document.getElementById("main").classList.remove("open");
}

function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("open");
}

window.addEventListener("resize", reportWindowSize);

function reportWindowSize() {
 const widthOutput = window.innerWidth;
 if (widthOutput >= 1000) {
    document.getElementById("nav_menu").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
    document.getElementById("main").classList.remove("open");
 }
}
