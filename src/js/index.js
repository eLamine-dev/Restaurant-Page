import '../css/style.css';
import '../css/reset.css';
import logoSrc from '../images/logo.png';
import renderHome from './homepage';
import renderMenu from './menu';
import renderAboutPage from './about';

const content = document.getElementById('content');

const navBar = document.createElement('header');
navBar.id = 'header';

const tabsList = ['Home', 'Menu', 'About'];
const navBarLinks = document.createElement('ul');
navBarLinks.id = 'links';

tabsList.forEach((el) => {
   const tab = document.createElement('li');
   tab.innerText = el;
   tab.classList.add('tab');
   tab.classList.add(el);
   navBarLinks.appendChild(tab);
   tab.addEventListener('click', (e) => {
      switchPages(e);
   });
});

function switchPages(e) {
   if (e.target.classList.contains('Home')) {
      content.innerHTML = '';
      content.prepend(navBar);
      content.appendChild(renderHome());
   }
   if (e.target.classList.contains('Menu')) {
      content.innerHTML = '';
      content.prepend(navBar);
      content.appendChild(renderMenu());
   }
   if (e.target.classList.contains('About')) {
      content.innerHTML = '';
      content.prepend(navBar);
      content.appendChild(renderAboutPage());
   }
}

const logo = document.createElement('img');
logo.src = logoSrc;
logo.style.height = '50px';

navBar.appendChild(logo);
navBar.appendChild(navBarLinks);

content.prepend(navBar);
