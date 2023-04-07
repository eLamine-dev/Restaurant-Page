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
   homeParagraph.innerText = 'Algerian traditional sweets';

   const img = document.createElement('img');
   img.src = homeImg;
   img.style.height = '300px';

   textSection.appendChild(welcomeTxt);
   textSection.appendChild(img);
   textSection.appendChild(mainTxt);
   textSection.appendChild(homeParagraph);

   homeContent.appendChild(textSection);

   return homeContent;
}

export default renderHome;
