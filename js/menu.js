let menuBtn = document.querySelector(".menu-btn");
let sideBar = document.getElementById("sideBar");
let overlay = document.querySelector(".overlay");
let closeBtn = document.getElementById("closeBtn");
let menuLinks = document.querySelectorAll("aside a")

let sideBarArr = [menuBtn, closeBtn, overlay];

function toggleMenu(ele) {
  ele.forEach(function (ele) {
    ele.onclick = function () {
      sideBar.classList.toggle("open");
    };
  });
}

toggleMenu(sideBarArr);
toggleMenu(menuLinks);
