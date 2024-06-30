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
//Testimonials .
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-slide');
    const pagination = document.querySelector('.slider-pagination');
    const slideCount = slides.length;
    let slidesPerPage = 3; // Nombre de slides visibles en même temps par défaut pour mobile
    const intervalDuration = 3000; // Durée en millisecondes (3 secondes)
    let currentIndex = 0;
    let pageCount = Math.ceil(slideCount / slidesPerPage);
    let slideInterval = setInterval(nextSlide, intervalDuration);
    let dots; // Variable pour contenir les points de pagination

    // Fonction pour ajuster le nombre de slides et de points de pagination en fonction de la largeur de l'écran
    function adjustSliderForScreenSize() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            slidesPerPage = 1; // Pour mobile, ajuster le nombre de slides visibles
            createPagination(4); // Pour mobile, créer 7 points de pagination
        } else {
            slidesPerPage = 4; // Pour desktop, ajuster le nombre de slides visibles
            createPagination(5); // Pour desktop, créer 4 points de pagination
        }
        pageCount = Math.ceil(slideCount / slidesPerPage);

        // Mettre à jour la classe active sur le point de pagination actuel
        if (dots && dots.length > 0) {
            dots[currentIndex].classList.add('active');
        }
    }

    // Appeler la fonction pour ajuster le slider initialement
    adjustSliderForScreenSize();

    // Écouter les changements de taille de l'écran et ajuster en conséquence
    window.addEventListener('resize', adjustSliderForScreenSize);

    // Fonction pour créer les points de pagination
    function createPagination(numDots) {
        pagination.innerHTML = ''; // Vider la pagination actuelle

        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('span');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            pagination.appendChild(dot);
        }

        // Sélectionner à nouveau tous les points de pagination
        dots = document.querySelectorAll('.slider-pagination span');
    }

    // Fonction pour aller à un slide spécifique
    function goToSlide(index) {
        const wrapper = document.querySelector('.slider-wrapper');
        const slideWidth = slides[0].offsetWidth; // Largeur du premier slide (suppose tous de même largeur)
        wrapper.style.transform = `translateX(-${index * slideWidth}px)`;

        // Mettre à jour la classe active sur les points de pagination
        if (dots && dots.length > 0) {
            dots[currentIndex].classList.remove('active');
            currentIndex = index;
            dots[currentIndex].classList.add('active');
        }
    }

    // Fonction pour passer au slide suivant
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % pageCount;
        goToSlide(nextIndex);
    }

    // Mettre en pause le diaporama lorsqu'on survole le slider
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseout', () => {
        slideInterval = setInterval(nextSlide, intervalDuration);
    });

    // Sélectionner tous les points de pagination initialement
    dots = document.querySelectorAll('.slider-pagination span');

});






