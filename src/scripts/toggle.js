const toggle = document.querySelectorAll('.toggle-header');

// toggle.map((t) => {
//     t.addEventListener('click', () => {
//         const isExpanded = t.getAttribute('aria-expanded') === 'true';
//         t.setAttribute('aria-expanded', `${!isExpanded}`);
//     });
// });

toggle.forEach((t) => {
    t.addEventListener('click', () => {
        const isExpanded = t.getAttribute('aria-expanded') === 'true';
        t.setAttribute('aria-expanded', `${!isExpanded}`);
    });
});