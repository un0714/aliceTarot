//main slider
const swiper = new Swiper('.mainTopSlider', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper2 = new Swiper('.mainMidSlider', {
  slidesPerView: 1.5,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper3 = new Swiper('.mainBottomSlider', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//navOpen
const navIcon = document.querySelector('.navIcon');
const nav = document.querySelector('.nav');
const lineOne = document.querySelector('.line01');
const lineTwo = document.querySelector('.line02');
const lineThree = document.querySelector('.line03');
const link = document.querySelector('.nav_listWrap');
const navBg = document.querySelector('.navBg');
const zIndex = document.querySelector('.navWrap');

const navArr = [navIcon, navBg];

navArr.map((e, index) => {
  e.addEventListener('click', () => {
    zIndex.classList.toggle('on');
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
    navBg.classList.toggle('active');
  });
});

//bgm OnOff
function bgmToggle() {
  currentValue = document.getElementById('bgmBtn').value;
  if (currentValue == 'ON') {
    document.getElementById('bgmBtn').value = 'OFF';
  } else {
    document.getElementById('bgmBtn').value = 'ON';
  }
}
function play() {
  var audio = document.getElementById('audio_play');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
