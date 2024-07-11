document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/img/MonumentaGameplay1.gif',
        'assets/img/MonumentaGameplay2.gif',
        'assets/img/MonumentaGameplay3.gif',
    ];

    let currentIndex = 0;
    const changeBackground = () => {
        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    };

    setInterval(changeBackground, 5000); // Change background every 5 seconds
    changeBackground(); // Initial call

    // Founder gallery hover effect to change avatar image
    const founders = document.querySelectorAll('.founder');
    founders.forEach(founder => {
        const imgElement = founder.querySelector('img');
        const originalImage = imgElement.src;
        const hoverImage = originalImage.replace('Face.png', 'Body.png');

        founder.addEventListener('mouseover', () => {
            imgElement.style.transition = 'opacity 0.3s';
            imgElement.style.opacity = '0';
            setTimeout(() => {
                imgElement.src = hoverImage;
                imgElement.style.opacity = '1';
            }, 300);
        });

        founder.addEventListener('mouseout', () => {
            imgElement.style.transition = 'opacity 0.3s';
            imgElement.style.opacity = '0';
            setTimeout(() => {
                imgElement.src = originalImage;
                imgElement.style.opacity = '1';
            }, 300);
        });
    });
});
