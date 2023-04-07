// import homeImg from '../images/homeImg.jpg';

function renderHome() {
   const homeContent = document.createElement('div');
   homeContent.id = 'home-container';
   homeContent.classList.add('main-content');

   const textSection = document.createElement('div');
   textSection.id = 'text-section';

   const mainTxt = document.createElement('h1');
   mainTxt.id = 'main-txt';
   mainTxt.innerText = 'Algerian Delights';

   const homeParagraph = document.createElement('p');
   homeParagraph.id = 'home-paragraph';
   homeParagraph.innerText = 'Algerian traditional sweets';

   textSection.appendChild(mainTxt);
   textSection.appendChild(homeParagraph);

   homeContent.appendChild(textSection);

   // const sideImg = document.createElement('img');
   // sideImg.src = homeImg;
   // sideImg.style.height = '400px';

   // homeContent.appendChild(sideImg);

   return homeContent;
}

export default renderHome;
