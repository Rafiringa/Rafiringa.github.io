let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    navbar.style.background = "none";
  } else if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
    navbar.style.background = "black";
  } else {
    navbar.style.top = "-60px";
  }
  lastScroll = window.scrollY;
});
