let header = document.getElementById("header");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY) {
    header.classList.remove("show");
  } else {
    header.classList.add("show");
  }

  lastScrollY = currentScrollY;
})