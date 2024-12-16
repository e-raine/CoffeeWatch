document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.coffee-shops-scroll');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const coffeeShops = document.querySelectorAll('.coffee-shop');
    let currentIndex = 0;

    // Show one coffee shop at a time
    function updateCarousel() {
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % coffeeShops.length;
        updateCarousel();
    });

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + coffeeShops.length) % coffeeShops.length;
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();

    // Sidebar toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active'); // Toggle the active class
    });

    // Close sidebar when a link is clicked
    const sidebarLinks = document.querySelectorAll('.nav-links a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('nav-active'); // Close the sidebar
        });
    });
});

function imgSlider(anything) {
    document.querySelector('.featured-image').src = anything;
}

function changeCircleColor(color) {
    document.querySelector('.circle').style.background = color;
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active'); // Toggle the active class
});

