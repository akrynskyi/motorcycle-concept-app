function init() {
  const dots = document.querySelectorAll(".dot");
  const pictures = document.querySelectorAll(
    ".screen-content-product-item__photo"
  );
  const descriptions = document.querySelectorAll(".screen-content-description");

  //Tracker
  let current = 0;

  console.log(pictures);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
      changeDots(this);
      nextSlide(index);
    });
  });

  function changeDots(dot) {
    dots.forEach(dot => {
      dot.classList.remove("current");
    });

    dot.classList.add("current");
  }

  function nextSlide(slideNumber) {
    const nextPicture = pictures[slideNumber];
    const currentPicture = pictures[current];

    console.log(nextPicture);

    const tl = new TimelineMax();

    tl.fromTo(currentPicture, 0.2, { opacity: 1 }, { opacity: 0 })
      .fromTo(nextPicture, 0.2, { opacity: 0 }, { opacity: 1 })
      .fromTo(nextPicture, 0.4, { x: "100%" }, { x: "0%" });

    const nextDescription = descriptions[slideNumber];
    const currentDescription = descriptions[current];

    console.log(nextDescription);

    const tlt = new TimelineMax();

    tlt
      .fromTo(currentDescription, 0.2, { opacity: 1 }, { opacity: 0 })
      .fromTo(nextDescription, 0.2, { opacity: 0 }, { opacity: 1 })
      .fromTo(nextDescription, 0.4, { x: "-100%" }, { x: "0%" });

    current = slideNumber;
  }
}

init();

// Hamburger menu
const hamburger = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".screen-navbar-menu-hidden");
const bars = document.querySelector(".fa-bars");

console.log(menu);

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-times");
  } else {
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");
  }
});
