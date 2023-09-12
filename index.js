let lastScroll = 0;

window.addEventListener("scroll", () => {
  // Navbar apparence
  if (window.scrollY == 0) {
    navbar.style.background = "none";
  } else if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
    navbar.style.background = "black";
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
});
