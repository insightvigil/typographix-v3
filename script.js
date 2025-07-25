const themeSwitcher = document.getElementById('theme-switcher');

//Dark Mode styles 

const darkMode = () => {
    themeSwitcher.children[0].textContent = 'Dark Mode';
    themeSwitcher.children[1].classList.replace('fa-sun', 'fa-moon' )
}

const lightMode= () => {
    themeSwitcher.children[0].textContent = 'Light Mode';
    themeSwitcher.children[1].classList.replace('fa-moon', 'fa-sun')
}

//Switch theme 

switchTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if(!currentTheme || currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}


//Event Listener 
themeSwitcher.addEventListener('click', switchTheme)

//Check Local Storage For Theme 
const currentThemeFromLocalStorage = localStorage.getItem('theme');
if(currentThemeFromLocalStorage) {
    document.documentElement.setAttribute('data-theme',currentThemeFromLocalStorage)
    if(currentThemeFromLocalStorage === 'dark') {
        darkMode();
    }
    else {
        lightMode();
    }
}

/*----------Navigation---------*/ 
const nav = document.getElementById('nav');
console.log(nav)
const menuIcon = document.getElementsByClassName('menu')[0];
console.log(menuIcon)
function toggleMenu() {
    nav.classList.toggle("active")
    menuIcon.classList.toggle("active");
}

function hideMenu() {
    nav.classList.remove("active");
    menuIcon.classList.remove("active");
}