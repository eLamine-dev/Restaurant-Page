function renderAboutPage() {
   const aboutContainer = document.createElement('div');
   aboutContainer.id = 'about-container';

   const heading = document.createElement('h1');
   heading.textContent = 'About Us';
   aboutContainer.appendChild(heading);

   const paragraph1 = document.createElement('p');
   paragraph1.textContent = 'some text';
   aboutContainer.appendChild(paragraph1);

   const paragraph2 = document.createElement('p');
   paragraph2.textContent = 'some text';
   aboutContainer.appendChild(paragraph2);

   const image = document.createElement('img');
   image.src = 'restaurant.jpg';
   image.alt = 'Restaurant interior';
   aboutContainer.appendChild(image);

   return aboutContainer;
}

export default renderAboutPage;
