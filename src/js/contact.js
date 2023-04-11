import githubSvg from '../images/github.svg';

function renderContactPage() {
   const contactContainer = document.createElement('div');
   contactContainer.id = 'about-container';
   contactContainer.classList.add('main-content');

   const paragraph1 = document.createElement('p');
   paragraph1.textContent =
      'I know these cookies look delicious, but unfortunately this website is just a project to practice ES6 Modules and webpack module bundler from The Odin project Javascript curriculum.';
   contactContainer.appendChild(paragraph1);

   // const paragraph2 = document.createElement('p');
   // paragraph2.textContent = `Repo `;
   // contactContainer.appendChild(paragraph2);

   const githubLink = document.createElement('a');
   githubLink.href = 'https://github.com/eLamine-dev';

   const githubIcon = document.createElement('img');
   githubIcon.src = githubSvg;
   githubIcon.id = 'github-icon';
   githubIcon.style.height = '50px';

   githubLink.appendChild(githubIcon);

   contactContainer.appendChild(githubLink);

   return contactContainer;
}

export default renderContactPage;
