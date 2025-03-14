document.addEventListener('DOMContentLoaded', function () {
  function smoothScroll(targetSelector, duration) {
    const targetElement = document.querySelector(targetSelector);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Seleciona o link dentro de .sobre-nos que aponta para "#bemvindo"
  const scrollLink = document.querySelector('.sobre-nos a[href="#bemvindo"]');
  if (scrollLink) {
    scrollLink.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScroll('#bemvindo', 1300); // duração de 3000ms para uma rolagem mais lenta
    });
  }
});
