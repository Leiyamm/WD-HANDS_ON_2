document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/img/hero2A.jpg',
        'assets/img/hero2B.jpg',
        'assets/img/hero2C.jpg',
    ];

    let currentIndex = 0;

    const changeBackground = () => {
        currentIndex = (currentIndex + 1) % images.length;
        const body = document.body;
        body.style.backgroundImage = `url('${images[currentIndex]}')`;
    };

    document.querySelector('.bludshot-card').addEventListener('click', changeBackground);

    const lyrics = [
        "There's a poison in the wind...",
        "Souls of the hungry...",
        "Open your eyes and cry...",
        "Ruthless, truthful, clueless, youth...",
        "Let me lose my sobriety...",
    ];

    // Function to scatter lyrics
    const scatterLyrics = (event) => {
        const lyric = document.createElement('div');
        lyric.classList.add('scattered-lyric');
        lyric.textContent = lyrics[Math.floor(Math.random() * lyrics.length)];
        
        // Randomly position the lyric across the page
        const x = Math.random() * (window.innerWidth - 200); // Adjust 200 for lyric width
        const y = Math.random() * (window.innerHeight - 50); // Adjust 50 for lyric height
        
        lyric.style.position = 'absolute';
        lyric.style.left = `${x}px`;
        lyric.style.top = `${y}px`;

        document.body.appendChild(lyric);

        // Remove lyric after some time
        setTimeout(() => {
            lyric.remove();
        }, 3000); // Remove after 3 seconds
    };

    // Event listener to scatter lyrics on logo hover
    const bludshotCard = document.querySelector('.bludshot-card');
    bludshotCard.addEventListener('mouseover', scatterLyrics);
});
