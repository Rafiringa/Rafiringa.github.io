let lastScroll = 0;
let playOnce = true;

window.addEventListener("scroll", () => {
  // Navbar apparence
  if (window.scrollY == 0) {
    navbar.style.background = "none";
  } else if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
    navbar.style.background = "rgb(19, 19, 19)";
  } else {
    navbar.style.top = "-60px";
  }
  lastScroll = window.scrollY;

  // Image apparence
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.3) {
    imgImprovise1.style.opacity = 1;
    imgImprovise1.style.transform = "none";
  }

  if (scrollValue > 0.35) {
    imgImprovise2.style.opacity = 1;
    imgImprovise2.style.transform = "none";
  }

  if (scrollValue > 0.85) {
    imgImprovise3.style.opacity = 1;
    imgImprovise3.style.transform = "none";
  }

  // Pop-up
  if (scrollValue > 0.95 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

iconBurger.addEventListener("click", () => {
  sideBar.style.transform = "none";
});

closeNavbar.addEventListener("click", () => {
  sideBar.style.transform = "translateX(300px)";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.opacity = 0;
  popup.style.transform = "translateX(400px)";
});
