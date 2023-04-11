import '../css/style.css';
import '../css/reset.css';
import renderNavBar from './navbar';
import renderFooter from './footer';
import renderMain from './main';
import renderMenu from './menu';

const content = document.getElementById('content');
// add header
content.appendChild(renderNavBar());
// add main section
content.appendChild(renderMain());
// add footer
content.appendChild(renderFooter());
