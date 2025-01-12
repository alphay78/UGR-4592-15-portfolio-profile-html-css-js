
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".navlist");

  hamburger.addEventListener("click", () => {
    navList.style.display = navList.style.display === "flex" ? "none" : "flex";
  });

