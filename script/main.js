(() => {
  function handleResize() {
    const cards = document.querySelectorAll('[data-position="horizontal"]');

    if (window.innerWidth <= 1024) {
      cards.forEach((card) => {
        card.classList.remove('card--horizontal');
      })
    } else {
      cards.forEach((card) => {
        card.classList.add('card--horizontal');
      })
    }
  }

  window.addEventListener('resize', handleResize);

  window.addEventListener('DOMContentLoaded', handleResize);
})()
