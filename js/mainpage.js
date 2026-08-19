// const coursesLink = document.querySelector('a[href="#courses"]');
// const coursesSection = document.querySelector("#courses");

// coursesLink.addEventListener("click", function (event) {
//   event.preventDefault();

//   const targetPosition =
//     coursesSection.getBoundingClientRect().top + window.scrollY;

//   const startPosition = window.scrollY;
//   const distance = targetPosition - startPosition;
//   const duration = 800; // 800 = 0.8 წამი

//   let startTime = null;

//   function animation(currentTime) {
//     if (startTime === null) {
//       startTime = currentTime;
//     }

//     const elapsed = currentTime - startTime;
//     const progress = Math.min(elapsed / duration, 1);

//     // smooth easing
//     const ease = progress * (2 - progress);

//     window.scrollTo(0, startPosition + distance * ease);

//     if (progress < 1) {
//       requestAnimationFrame(animation);
//     }
//   }

//   requestAnimationFrame(animation);
// });

function smoothScrollTo(targetElement, duration = 800) {
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // smooth easing
    const ease = progress * (2 - progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// ყველა ლინკი, რომელსაც href="#..." აქვს
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();
      smoothScrollTo(targetSection);
    }
  });
});
