import logoSrc from '../images/logo.png';
import renderMenu from './menu';
import renderAboutPage from './about';
import renderHome from './homepage';

function renderNavBar() {
   const navBar = document.createElement('header');
   navBar.id = 'header';

   const tabsList = ['Home', 'Menu', 'About'];
   const navBarTabs = document.createElement('ul');
   navBarTabs.id = 'links';

   tabsList.forEach((el) => {
      const tab = document.createElement('li');
      tab.innerText = el;
      tab.classList.add('tab');
      tab.id = el;
      navBarTabs.appendChild(tab);
      navBarTabs.addEventListener('click', (e) => {
         switchPages(e);
      });
   });

   function switchPages(e) {
      const mainContent = document.querySelector('.main-content');
      if (mainContent) content.removeChild(mainContent);
      if (e.target.id === 'Home') {
         content.appendChild(renderHome());
      }
      if (e.target.id === 'Menu') {
         content.appendChild(renderMenu());
      }
      if (e.target.id === 'About') {
         content.appendChild(renderAboutPage());
      }
   }

   const logo = document.createElement('img');
   logo.src = logoSrc;
   logo.style.height = '50px';

   navBar.appendChild(logo);
   navBar.appendChild(navBarTabs);

   return navBar;
}

export default renderNavBar;
