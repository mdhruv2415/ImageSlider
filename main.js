const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
var auto = false;
const intervalTime = 5000;
let slideInterval;
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e=> {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
const slideShow = document.querySelector('#autoSlide');
slideShow.addEventListener('click', e=> {
    autoSlide(true);
});
const stopSlideShow = document.querySelector('#stopSlide');
stopSlideShow.addEventListener('click', e=> {
    clearInterval(slideInterval);
});

// Auto Slide
function autoSlide(auto) {
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
} 
}