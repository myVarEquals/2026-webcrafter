const toggle = document.querySelectorAll('.toggle-header');

toggle.forEach((t) => {
    t.addEventListener('click', () => {

        let isExpanded = t.getAttribute('aria-expanded') === 'true';
        t.setAttribute('aria-expanded', `${!isExpanded}`);
        
        let panel = t.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            console.log(panel.scrollHeight);
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        
    });
});