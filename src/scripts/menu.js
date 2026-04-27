const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', `${!isExpanded}`);
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menu.setAttribute('aria-expanded', 'false');
    }
})