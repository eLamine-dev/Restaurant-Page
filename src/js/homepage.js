import homeImg from '../images/homeImg.jpg';

function renderHome() {
   const homeContent = document.createElement('div');
   homeContent.id = 'home-container';
   homeContent.classList.add('main-content');

   const textSection = document.createElement('div');
   textSection.id = 'text-section';

   const welcomeTxt = document.createElement('h3');
   welcomeTxt.id = 'welcome';
   welcomeTxt.innerText = 'Welcome to';

   const mainTxt = document.createElement('h1');
   mainTxt.id = 'main-txt';
   mainTxt.innerText = 'Algerian Delights';

   const homeParagraph = document.createElement('p');
   homeParagraph.id = 'home-paragraph';
   homeParagraph.innerText = 'A bite of tradition, a taste of heritage';

   const img = document.createElement('img');
   img.id = 'home-img';
   img.src = homeImg;

   textSection.appendChild(welcomeTxt);
   textSection.appendChild(img);
   textSection.appendChild(mainTxt);
   textSection.appendChild(homeParagraph);

   homeContent.appendChild(textSection);

   return homeContent;
}

export default renderHome;
