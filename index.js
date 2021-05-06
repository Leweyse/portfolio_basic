const link = document.querySelectorAll('#navbar .navbar_section .hover-this');
const elementsToShow = document.querySelectorAll('.show-on-scroll');
const plink = document.querySelectorAll('.profile-link');
const alink = document.querySelectorAll('.project-tile_alink');

const all_e = [...elementsToShow, ...plink, ...alink];

// Detect request animation frame
const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
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
  Array.prototype.forEach.call(all_e, function(element){
    if (isElementInViewport(element)) element.classList.add('is-visible');
    else element.classList.remove('is-visible');
  });

  scroll(loop);
}

//Button "About Me "
const animate_link = function (e) {
    const span = this.querySelectorAll('#navbar span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 20,
    xMove = (x / width * (move * 2) - move),
    yMove = (y / height * (move * 2) - move);

    for (var i = 0; i < span.length; i++) {
      span[i].style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') span[i].style.transform = '';
    }
};

link.forEach(b => b.addEventListener('mousemove', animate_link));
link.forEach(b => b.addEventListener('mouseleave', animate_link));
