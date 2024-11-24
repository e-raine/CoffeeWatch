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
});

