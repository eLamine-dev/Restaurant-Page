import renderHome from './homepage';

function renderMain(content) {
   let mainContent = document.getElementById('main');

   if (!mainContent) {
      mainContent = document.createElement('main');
      mainContent.id = 'main';
      mainContent.appendChild(renderHome());
   }

   if (content) {
      mainContent.replaceChildren(content);
   }

   return mainContent;
}

export default renderMain;
