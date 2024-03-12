const mobile_btn = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".mobile-nav");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_btn.addEventListener("click", () => toggleNavbar());