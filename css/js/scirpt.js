// Menyimpan referensi ke elemen navbar-nav
const navbarNav = document.querySelector(".navbar-nav");

// Menambahkan event listener pada elemen dengan id hamburger-menu
document.getElementById("hamburger-menu").addEventListener("click", () => {
  // Toggle class "active" pada elemen navbar-nav
  navbarNav.classList.toggle("active");
});

//Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
