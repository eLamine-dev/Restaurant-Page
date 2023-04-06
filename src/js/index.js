import '../css/style.css';
import '../css/reset.css';
import renderHome from './homepage';
import renderNavBar from './navbar';
import renderFooter from './footer';

const content = document.getElementById('content');

const mainContent = document.createElement('main');
mainContent.id = 'main';

content.prepend(renderNavBar());
content.appendChild(mainContent);
content.appendChild(renderFooter());

mainContent.append(renderHome());
