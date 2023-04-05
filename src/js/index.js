import '../css/style.css';
import '../css/reset.css';
import renderHome from './homepage';
import renderNavBar from './navbar';

const content = document.getElementById('content');

content.prepend(renderNavBar());
content.appendChild(renderHome());
