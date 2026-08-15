function fieldSliderFn() {
  const wrapper = document.querySelector(".field-slider-wrapper");
  const track = document.getElementById("field-cards");
  const cards = document.querySelectorAll(".field-card");

  let activeIndex = 0;
  const totalCards = cards.length;

  function renderSlider() {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
  }

  function goToNextCard() {
    if (activeIndex === totalCards - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlider();
  }

  let autoSlideId = setInterval(goToNextCard, 5000);

  wrapper.addEventListener("mouseenter", () => {
    clearInterval(autoSlideId);
  });
  wrapper.addEventListener("mouseleave", () => {
    autoSlideId = setInterval(goToNextCard, 5000);
  });
}

fieldSliderFn();
