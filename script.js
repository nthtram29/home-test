const heading = document.querySelector('.hero-title');
const firstCircle = document.querySelector('.circle-box.pos-1');
const otherCircles = document.querySelectorAll('.circle-box:not(.pos-1)');
const blockList = document.querySelector('.block-list h3');
const listItems = document.querySelectorAll('.list-item');

const isMobile = window.innerWidth <= 768;

if (!isMobile) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heading.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(heading);

  const firstCircleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        firstCircle.classList.add('show');

        otherCircles.forEach((circle, index) => {
          setTimeout(() => {
            circle.classList.add('show');
          }, (index + 1) * 400);
        });

        const totalDelay = otherCircles.length * 400 + 500;
        setTimeout(() => {
          blockList.classList.add('show');
          listItems.forEach((item, index) => {
            let delay = index * 400;
            if (index === listItems.length - 1) delay += 300;

            setTimeout(() => {
              item.classList.add('show');
            }, delay);
          });
        }, totalDelay);

        firstCircleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  firstCircleObserver.observe(firstCircle);
}
