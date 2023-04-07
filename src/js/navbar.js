import renderMenu from './menu';
import renderAboutPage from './about';
import renderHome from './homepage';
import renderMain from './main';

function renderNavBar() {
   const navBar = document.createElement('header');
   navBar.id = 'header';

   const tabsList = ['Home', 'Menu', 'About'];
   const navBarTabs = document.createElement('ul');
   navBarTabs.id = 'tabs';

   function switchPages(e) {
      if (e.target.id === 'home') {
         renderMain(renderHome());
      }
      if (e.target.id === 'menu') {
         renderMain(renderMenu());
      }
      if (e.target.id === 'about') {
         renderMain(renderAboutPage());
      }
   }

   tabsList.forEach((el) => {
      const tab = document.createElement('li');
      tab.innerText = el;
      tab.classList.add('tab');
      tab.id = el.toLowerCase();
      navBarTabs.appendChild(tab);
      navBarTabs.addEventListener('click', (e) => {
         switchPages(e);
      });
   });

   navBar.appendChild(navBarTabs);

   return navBar;
}

export default renderNavBar;
