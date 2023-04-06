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

   function switchPages(e) {
      const mainContent = document.getElementById('main');
      if (mainContent) mainContent.innerHTML = '';
      if (e.target.id === 'Home') {
         mainContent.appendChild(renderHome());
      }
      if (e.target.id === 'Menu') {
         mainContent.appendChild(renderMenu());
      }
      if (e.target.id === 'About') {
         mainContent.appendChild(renderAboutPage());
      }
   }

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

   const logo = document.createElement('img');
   logo.src = logoSrc;
   logo.style.height = '50px';

   navBar.appendChild(logo);
   navBar.appendChild(navBarTabs);

   return navBar;
}

export default renderNavBar;
