import css from '../css/style.css';
import reset from '../css/reset.css';
import logoSrc from '../images/logo.png';
import renderHome from './homepage';
import renderMenu from './menu';

const content = document.getElementById('content');

let navBar = document.createElement('header');
navBar.id = 'header';

let tabsList = ['Home', 'Menu', 'contact'];
let navBarLinks = document.createElement('ul');
navBarLinks.id = 'links';

tabsList.forEach((el) => {
   const tab = document.createElement('li');
   tab.innerText = el;
   tab.classList.add('tab');
   navBarLinks.appendChild(tab);
});

const logo = document.createElement('img');
logo.src = logoSrc;
logo.style.height = '50px';

navBar.appendChild(logo);
navBar.appendChild(navBarLinks);

content.prepend(navBar);
content.appendChild(renderHome());
content.appendChild(renderMenu());
