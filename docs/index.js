const link = document.querySelectorAll('#navbar .navbar_section .hover-this');
const elementsToShow = document.querySelectorAll('.show-on-scroll');
const plink = document.querySelectorAll('.profile-link');
const alink = document.querySelectorAll('.project-tile_alink');
const cardA = document.querySelector('.card-a');
const cardB = document.querySelector('.card-b');
const cardC = document.querySelector('.card-c');

const all_e = [...elementsToShow, ...plink, ...alink, cardA, cardB, cardC];

// Detect request animation frame
const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {

  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0 && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Call the loop for the first time
loop();

function loop() {
  [...all_e].forEach((elem) => {
    if (isElementInViewport(elem)) elem.classList.add('is-visible')
    else elem.classList.remove('is-visible')
  })

  scroll(loop);
}

//Button "About Me "
const animate_link = function (e) {
    const btn = document.getElementById('about_navbar');
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = this;
    const move = 20;
    const xMove = (x / width * (move * 2) - move) / 15;
    const yMove = (y / height * (move * 2) - move) / 15;

    btn.style.transform = `translate(${xMove}rem, ${yMove}rem)`;

    if (e.type === 'mouseleave') btn.style.transform = '';
};

link.forEach(b => b.addEventListener('mousemove', animate_link));
link.forEach(b => b.addEventListener('mouseleave', animate_link));
