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
