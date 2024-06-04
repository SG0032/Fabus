// Create Button .
var btnMenu = document.querySelector('.menu i');
var btnClose = document.querySelector('.close i');
var navMenu = document.querySelector('nav');

btnMenu.addEventListener('click', function () {
    navMenu.classList.add('show');
});

btnClose.addEventListener('click', function () {
    navMenu.classList.remove('show');
});

//
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-1');
    const nextButton = document.querySelector('.icons-right');
    const prevButton = document.querySelector('.icons-left');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    showSlide(currentIndex);
});
//
var scrollContainer = document.querySelector(".box-gallerie");
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

prevBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
    } else {
        scrollContainer.scrollLeft += 900;
    }
});

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    } else {
        scrollContainer.scrollLeft -= 900;
    }
});

//Annulation des chavron .
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-1');
    const mainLogo = document.getElementById('main-logo');
    const logoImages = {
        1: './assets/images/brand2.png', // Image pour slider 1
        2: './assets/images/brand1.png', // Image pour slider 2
        3: './assets/images/brand2.png'  // Image pour slider 3
    };
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        updateLogo(index + 1);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function updateLogo(slideNumber) {
        mainLogo.src = logoImages[slideNumber];
    }

    document.querySelector('.icons-right').addEventListener('click', nextSlide);
    document.querySelector('.icons-left').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    setInterval(nextSlide, 5000);
});
//




