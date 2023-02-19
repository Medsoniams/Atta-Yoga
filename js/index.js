const initHeaderBurger = () => {
  const headerBurger = document.querySelector(".header__burger");
  const headerMobile = document.querySelector(".header__mobile");
  let isOpened = false;

  headerBurger.addEventListener("click", () => {
    isOpened = !isOpened;
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    headerBurger.classList.toggle("active");
    headerMobile.classList.toggle("active");
  });
};



document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  initHeaderBurger();
});

