// javascript aided with AI.

console.log("Back-to-top script loaded");

// get button
const backToTopButton = document.getElementById("backToTop");

// show button when user scrolls center length down
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// scroll to top when button clicked
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    // Toggles the 'open' class on the nav-links element
    navMenu.classList.toggle("open");
  });
});
