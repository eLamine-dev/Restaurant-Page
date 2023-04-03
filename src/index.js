import css from './style.css';
import reset from './reset.css';
// import testImg from './test.jpg';

import renderMenu from './menu';

const body = document.getElementById('body');
const content = document.getElementById('content');

let navBar = document.createElement('header');

let navBarLinks = ['Home', 'Menu', 'contact'];

navBarLinks.forEach((link) => {
   const tab = document.createElement('li');
   tab.innerText = link;
   navBar.appendChild(tab);
});

content.prepend(navBar);
content.appendChild(renderMenu());

// const img = document.createElement('img');
// img.src = testImg;

// content.appendChild(img);
