document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const content = document.getElementById("content");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      // Show hidden content div if not visible
      if (content.style.display === "none") {
        content.style.display = "block";
        AOS.init(); // Re-initialize animations after showing
      }

      // Scroll to the target section
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }, 200);
    });
  });
});

