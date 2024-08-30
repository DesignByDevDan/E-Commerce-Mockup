// Smooth scroll to product categories when clicking the CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.product-categories').scrollIntoView({ behavior: 'smooth' });
});

// Toggle dropdown visibility on hover for mobile-friendly support
document.querySelectorAll('.mega-menu ul li').forEach(function(menuItem) {
    menuItem.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown').style.display = 'block';
    });
    menuItem.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown').style.display = 'none';
    });
});
