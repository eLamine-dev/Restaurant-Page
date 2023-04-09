function renderContactPage() {
   const contactContainer = document.createElement('div');
   contactContainer.id = 'about-container';
   contactContainer.classList.add('main-content');

   const heading = document.createElement('h1');
   heading.textContent = 'Contact';
   contactContainer.appendChild(heading);

   const paragraph1 = document.createElement('p');
   paragraph1.textContent =
      'I know these cookies look delicious, but unfortunately this website is just a project to practice ES6 Modules and webpack module bundler from The Odin project Javascript curriculum';
   contactContainer.appendChild(paragraph1);

   const paragraph2 = document.createElement('p');
   paragraph2.textContent =
      'You can find the code for this project and others in my Github';
   contactContainer.appendChild(paragraph2);

   return contactContainer;
}

export default renderContactPage;
