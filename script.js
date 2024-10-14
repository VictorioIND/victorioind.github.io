window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.card');
    parallax.forEach(card => {
        let offset = window.pageYOffset;
        card.style.backgroundPositionY = (offset * 0.5) + 'px';
    });
});
