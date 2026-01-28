// ============================
// Navbar: Transparent → Solid
// ============================
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("solid");
  } else {
    navbar.classList.remove("solid");
  }
});

// ============================
// Section Navigation & Active Link
// ============================
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  function hideAllSections() {
    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.pointerEvents = "none";
      section.style.position = "absolute";
    });
  }

  function showSection(id) {
    const target = document.getElementById(id);
    if (target) {
      hideAllSections();
      target.style.opacity = 1;
      target.style.pointerEvents = "auto";
      target.style.position = "relative";
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  function setActiveLink(id) {
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === id) {
        link.classList.add("active");
      }
    });
  }

  // Initial state
  hideAllSections();
  showSection("profile");
  setActiveLink("profile");

  // Nav link click event
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
      setActiveLink(targetId);
    });
  });
});
