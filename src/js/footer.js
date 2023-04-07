import githubSvg from '../images/github.svg';

function renderFooter() {
   const footer = document.createElement('footer');
   footer.classList.add('footer');

   const copyright = document.createElement('p');
   copyright.textContent = `Copyright © ${new Date().getFullYear()} eLamine-dev`;

   const githubLink = document.createElement('a');
   githubLink.href = 'https://github.com/eLamine-dev';

   const githubIcon = document.createElement('img');
   githubIcon.src = githubSvg;
   githubIcon.id = 'github-icon';
   githubIcon.style.height = '30px';

   githubLink.appendChild(githubIcon);
   footer.appendChild(copyright);
   footer.appendChild(githubLink);

   return footer;
}

export default renderFooter;
