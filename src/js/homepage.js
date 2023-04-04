import homeImg from '../images/homeImg.jpg';

function renderHome() {
   const homeContent = document.createElement('div');
   homeContent.id = 'homeContent';

   const textSection = document.createElement('div');
   textSection.id = 'textSection';

   const mainTxt = document.createElement('h1');
   mainTxt.id = 'mainTxt';
   mainTxt.innerText = 'Welcome to Algerian Delights';

   const homeParagraph = document.createElement('p');
   homeParagraph.id = 'homeParagraph';
   homeParagraph.innerText = 'House of the Algerian traditional sweets';

   textSection.appendChild(mainTxt);
   textSection.appendChild(homeParagraph);

   homeContent.appendChild(textSection);

   const sideImg = document.createElement('img');
   sideImg.src = homeImg;
   sideImg.style.height = '400px';

   homeContent.appendChild(sideImg);

   return homeContent;
}

export default renderHome;
