const NavElements = document.querySelector(".navElements");
const Harmburger = document.querySelector(".harmburger");
const HarmburgerMenu = document.querySelector(".harmburger-menu");
const Overlay = document.querySelector(".overlay");
const HarmburgerClose = document.querySelector(".harmburger-close");
const Navigation = document.querySelector(".wrapper");
const NavWrapper = document.querySelector(".navigation");
const Hero = document.getElementById("hero");
const Html = document.querySelector("html");

const addHandler = () => {
  Overlay.classList.remove("hidden");
  HarmburgerMenu.classList.remove("hidden");
  setTimeout(() => {
    HarmburgerClose.classList.remove("hidden");
  }, 500);
  Html.style.overflowY = "hidden";
};

const removeHandler = () => {
  Overlay.classList.add("hidden");
  HarmburgerMenu.classList.add("hidden");
  HarmburgerClose.classList.add("hidden");
  Html.style.overflowY = "scroll";
};

Harmburger.addEventListener("click", function () {
  addHandler();
});

const removeHarmburgerMenuHandler = () => {
  removeHandler();
};

Overlay.addEventListener("click", removeHarmburgerMenuHandler);
HarmburgerClose.addEventListener("click", removeHarmburgerMenuHandler);

/////////////////////////////////////////
// smooth scroll animation
Navigation.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    e.target.classList.contains("navLink") ||
    e.target.classList.contains("navBtn")
  ) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    removeHandler();
  }
});

const navShadow = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    NavWrapper.classList.add("nav-box-shadow");
  } else {
    NavWrapper.classList.remove("nav-box-shadow");
  }
};

const navBarObserver = new IntersectionObserver(navShadow, {
  root: null,
  threshold: 0,
  rootMargin: "-300px",
});

navBarObserver.observe(Hero);
