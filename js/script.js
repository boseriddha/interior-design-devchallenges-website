const navButton = document.getElementById("navButton");
const navBar = document.getElementById("navList");

navButton.addEventListener('click', () => {
    const expanded = navBar.getAttribute('aria-expanded');
    if(expanded === 'false') {
        navBar.setAttribute('aria-expanded', 'true');
        navBar.setAttribute('data-visible', 'true');
        navBar.style.transform = 'translateX(0%)';
    } else if(expanded === 'true') {
        navBar.setAttribute('aria-expanded', 'false');
        navBar.setAttribute('data-visible', 'false');
        navBar.style.transform = 'translateX(100%)';        
    }
});