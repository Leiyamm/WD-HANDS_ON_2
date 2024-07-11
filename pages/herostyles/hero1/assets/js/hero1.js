const heroCard = document.querySelector('.hero-card');
heroCard.addEventListener('mouseover', () => {
    document.body.classList.add('hero1-animated');
});
heroCard.addEventListener('mouseout', () => {
    document.body.classList.remove('hero1-animated');
});
