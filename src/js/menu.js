import makroudlouz from '../images/makroudlouz.jpg';
import baklawa from '../images/baklawa.png';
import makroud from '../images/makroud.jpg';
import griouech from '../images/griouech.jpg';
import tcharak from '../images/tcharak.jpg';
import kaak from '../images/kaak.jpg';

function renderMenu() {
   const menuItems = [
      {
         name: 'Makroud elouz',
         description:
            'cookies consisting of almonds, eggs, sugar, and a flavoring of orange flower water',
         price: 9.99,
         img: makroudlouz,
      },
      {
         name: 'Baklawa',
         description:
            'layers of phyllo dough packed with chopped nuts and soaked in syrup',
         price: 9.99,
         img: baklawa,
      },
      {
         name: 'Griouech',
         description:
            'fried dough balls soaked in honey and sprinkled with sesame seeds`',
         price: 9.99,
         img: griouech,
      },
      {
         name: 'Makroud',
         description: 'Semolina dough filled with dates.',
         price: 9.99,
         img: makroud,
      },
      {
         name: 'Tcharek',
         description:
            'also known as Gazelle Horns, a pastry filled with almonds',
         price: 9.99,
         img: tcharak,
      },
      {
         name: 'Kaak nakache',
         description: 'cookie filled with dates, almonds, and spices',
         price: 9.99,
         img: kaak,
      },
   ];

   function createMenuItemCard(item) {
      const card = document.createElement('div');
      card.classList.add('menu-item');

      const img = document.createElement('img');
      img.classList.add('item-img');
      img.src = item.img;
      card.appendChild(img);

      const name = document.createElement('h2');
      name.classList.add('item-name');
      name.textContent = item.name;
      card.appendChild(name);

      const price = document.createElement('p');
      price.classList.add('item-price');
      price.textContent = `$${item.price.toFixed(2)}`;
      card.appendChild(price);

      const description = document.createElement('p');
      description.classList.add('item-description');
      description.textContent = item.description;
      card.appendChild(description);

      return card;
   }

   const menu = document.createElement('div');
   menu.id = 'menu-container';
   menu.classList.add('main-content');
   menuItems.forEach((item) => {
      const card = createMenuItemCard(item);
      card.id = item.name;
      menu.appendChild(card);
   });

   return menu;
}

export default renderMenu;
