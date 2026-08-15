function fieldSliderFn() {
  const wrapper = document.querySelector(".field-slider-wrapper");
  const track = document.getElementById("field-cards");
  const cards = document.querySelectorAll(".field-card");
  const prevBtn = document.getElementById("field-prev");
  const nextBtn = document.getElementById("field-next");

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

  function goToPrevCard() {
    if (activeIndex === 0) {
      activeIndex = totalCards - 1;
    } else {
      activeIndex--;
    }
    renderSlider();
  }

  let autoSlideId = setInterval(goToNextCard, 5000);

  function stopAutoSlide() {
    clearInterval(autoSlideId);
  }
  function startAutoSlide() {
    autoSlideId = setInterval(goToNextCard, 5000);
  }

  wrapper.addEventListener("mouseenter", stopAutoSlide);
  wrapper.addEventListener("mouseleave", startAutoSlide);

  nextBtn.addEventListener("click", () => {
    goToNextCard();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    goToPrevCard();
    stopAutoSlide();
    startAutoSlide();
  });
}

fieldSliderFn();
