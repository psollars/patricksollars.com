(function () {
  const hamburger = document.querySelector("#hamburger");
  const navList = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navList.classList.toggle("open");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 576) {
      hamburger.classList.remove("open");
      navList.classList.remove("open");
    }
  });
})();
