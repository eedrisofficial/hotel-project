document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");

  function toggleNav() {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  }

  function hideNav() {
    navLinks.classList.remove("nav-active");
    burger.classList.remove("toggle");
  }

  burger.addEventListener("click", toggleNav);

  // Get all the anchor links inside the nav-links
  const navLinksAnchors = document.querySelectorAll(".nav-links a");
  navLinksAnchors.forEach((link) => {
    link.addEventListener("click", hideNav);
  });
});

function updateDate() {
  const today = new Date();
  const options = {
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString(undefined, options);
  document.getElementById("currentDate").innerText = formattedDate;
}
updateDate();
