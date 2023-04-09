import renderMenu from './menu';
import renderContactPage from './contact';
import renderHome from './homepage';
import renderMain from './main';

function renderNavBar() {
   const navBar = document.createElement('header');
   navBar.id = 'header';

   const tabsList = ['Home', 'Specialties', 'Contact'];
   const navBarTabs = document.createElement('ul');
   navBarTabs.id = 'tabs';

   function switchPages(e) {
      if (e.target.id === 'home') {
         renderMain(renderHome());
      }
      if (e.target.id === 'specialties') {
         renderMain(renderMenu());
      }
      if (e.target.id === 'contact') {
         renderMain(renderContactPage());
      }
   }

   function activeTabLine(e) {
      if (e.target.classList.contains('tab')) {
         navBarTabs.childNodes.forEach((tab) => {
            tab.classList.remove('active-tab');
            e.target.classList.add('active-tab');
         });
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
         activeTabLine(e);
      });
      if (tab.id === 'home') tab.classList.add('active-tab');
   });

   navBar.appendChild(navBarTabs);

   return navBar;
}

export default renderNavBar;
