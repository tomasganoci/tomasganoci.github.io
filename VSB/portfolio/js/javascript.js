document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-link");
  let navBarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navBarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navBarCollapse, { toggle: true });
      }
    });
  });
});
