import { Slider } from "./modules/slider.js";
function inThisPagePosition() {
  const in_this_page = document.querySelector(".in_this_page");
  in_this_page.style.left = todo.offsetLeft + "px";
  todo__sin_navbar.addEventListener("scroll", () => {
    const currentScroll = todo__sin_navbar.scrollTop;
    if (currentScroll > 0) {
      in_this_page.classList.add("show");
    } else {
      in_this_page.classList.remove("show");
    }
  });
}
todo__sin_navbar.addEventListener("scroll", () => {
  const currentScroll =
    todo__sin_navbar.scrollTop + todo__sin_navbar.offsetHeight;
  if (currentScroll > document.getElementById("salud").offsetTop) {
    const img_container = document.querySelector(".img-container-cody-bici");
    const img = document.querySelector(".img-container-cody-bici img");
    img_container.style.animation = "shake 2s ease-in-out normal";
    img.style.animation = "bici 2s linear forwards normal";
  }
});

function crearSlider() {
  const scrolleable = document.querySelector(".container_slide__fotos");
  const images = document.querySelectorAll(
    ".container_slide__fotos__img_container img"
  );
  const arrowNext = document.querySelector(".arrow.next");
  const arrowPrevious = document.querySelector(".arrow.back");
  const slider = new Slider(scrolleable, images.length, 0);

  arrowNext.addEventListener('click', () => slider.next());
  arrowPrevious.addEventListener('click', () => slider.previous())
}

crearSlider();
inThisPagePosition();
