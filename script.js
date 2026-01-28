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
      section.style.display = "none";
    });
  }

  function showSection(id) {
    hideAllSections();
    const section = document.getElementById(id);
    if (section) {
      section.style.display = "block";
      section.scrollIntoView({ behavior: "smooth" });
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

  // Initial state: show 'hero' section only
  hideAllSections();
  document.getElementById("hero").style.display = "block";

  // Nav click logic
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
      setActiveLink(targetId);
    });
  });
});
