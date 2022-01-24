const trendingBtn = document.getElementById('trending-btn');
const latestBtn = document.getElementById('latest-btn');
const videoBtn = document.getElementById('video-btn');
const freeBtn = document.getElementById('free-btn');

const linkBtn = document.querySelectorAll('.btn-link');

const trending = document.querySelector('.trending');
const latest = document.querySelector('.latest');
const video = document.querySelector('.video');
const free = document.querySelector('.free');

const hamMenu = document.querySelector('.hamburger-lines');
const hamNav = document.querySelector('.nav-hamburger');

const overlay = document.querySelector('.nav-ham-overlay');
window.onscroll = function () {
    myFunction();
    console.log(window.innerWidth);
};

hamMenu.addEventListener('click', () => {
    overlay.classList.toggle('show');
    console.log(overlay.classList);
});

var navbar = document.getElementById('nav-links');

var sticky = navbar.offsetTop;
var sticky1 = hamNav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky && window.innerWidth > 980) {
        navbar.classList.add('sticky');
    } else if (window.pageYOffset < sticky && window.innerWidth > 980) {
        navbar.classList.remove('sticky');
    }
    if (window.pageYOffset >= sticky1 && window.innerWidth < 981) {
        hamNav.classList.add('sticky');
    } else if (window.pageYOffset < sticky) {
        hamNav.classList.remove('sticky');
    }
}
hamMenu.addEventListener('click', (e) => {
    // console.log(hamMenu.classList);
    // e.target.classList.c('clicked-nav ');
    hamMenu.classList.toggle('clicked-nav');
});

linkBtn.forEach((btn) => {
    // btn.classList.remove('selected');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let name = e.target.innerHTML.toLowerCase();
        resetClassNames();
        document.querySelector('.selected').classList.remove('selected');
        btn.classList.add('selected');
        if (name === 'trending') {
            trending.classList.add('show');
        } else if (name === 'latest') {
            latest.classList.add('show');
        } else if (name === 'video') {
            video.classList.add('show');
        } else if (name === 'free') {
            free.classList.add('show');
        }
    });
});

function resetClassNames() {
    trending.classList.remove('show');
    latest.classList.remove('show');
    video.classList.remove('show');
    free.classList.remove('show');
}
