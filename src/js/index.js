import '../css/style.css';
import '../css/reset.css';
import renderHome from './homepage';
import renderNavBar from './navbar';
import renderFooter from './footer';
import renderMain from './main';

const content = document.getElementById('content');

content.prepend(renderNavBar());
content.appendChild(renderMain(renderHome()));
content.appendChild(renderFooter());
