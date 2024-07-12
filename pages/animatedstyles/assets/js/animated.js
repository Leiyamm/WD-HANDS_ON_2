const heroCard = document.querySelector('.hero-card');
heroCard.addEventListener('mouseover', () => {
    document.body.classList.add('hero1-animated');
});
heroCard.addEventListener('mouseout', () => {
    document.body.classList.remove('hero1-animated');
});

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

document.addEventListener('DOMContentLoaded', () => {
    // Sidebar hover functionality
    const sidebar = document.querySelector('.sidebar');
    const sidebarTitle = document.querySelector('.sidebar-title');

    sidebar.addEventListener('mouseover', () => {
        sidebar.classList.add('expanded');
        sidebarTitle.style.display = 'block';
    });

    sidebar.addEventListener('mouseout', () => {
        sidebar.classList.remove('expanded');
        sidebarTitle.style.display = 'none';
    });

    // Card hover functionality
    const card = document.querySelector('.card');
    const cardDescription = document.querySelector('.card-description');
    const cardTitleImg = document.querySelector('.card-title-img');

    card.addEventListener('mouseover', () => {
        card.classList.add('hovered');
        cardDescription.style.display = 'block';
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('hovered');
        cardDescription.style.display = 'none';
    });
});
