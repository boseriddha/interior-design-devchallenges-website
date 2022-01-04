const navButton = document.getElementById("navButton");
const navBar = document.getElementById("navList");

if(navBar.getAttribute('aria-expanded') === 'true') {
    navBar.setAttribute('aria-expanded', 'false');
    navBar.setAttribute('data-visible', 'false');
    navBar.style.transform = 'translateX(100%)';  
    navButton.style.backgroundImage = 'url(/images/menu_white_24dp.svg)';    
}

navButton.addEventListener('click', () => {
    const expanded = navBar.getAttribute('aria-expanded');
    if(expanded === 'false') {
        navBar.setAttribute('aria-expanded', 'true');
        navBar.setAttribute('data-visible', 'true');
        navBar.style.transform = 'translateX(0%)';
        navButton.style.backgroundImage = 'url(/images/close_white_24dp.svg)';
    } else if(expanded === 'true') {
        navBar.setAttribute('aria-expanded', 'false');
        navBar.setAttribute('data-visible', 'false');
        navBar.style.transform = 'translateX(100%)';  
        navButton.style.backgroundImage = 'url(/images/menu_white_24dp.svg)';      
    }
});