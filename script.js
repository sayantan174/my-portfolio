/*=========================  toggle icon navbar  =================================*/
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=========================  scroll section active links  =================================*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*=========================  remove toggle icon and navbar when click navbar link or scroll  =================================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*=========================  scroll reveal  =================================*/
ScrollReveal({ reset: true, distance: "80px", duration: 2000, delay: 200 });

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.contact-form,.project-box",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

/*=========================  typed js  =================================*/
var typed = new Typed("#element", {
  strings: ["Frontend Developer", "JavaScript Developer", "ReactJS Developer"],
  typeSpeed: 100,
  backDelay: 2000,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});
