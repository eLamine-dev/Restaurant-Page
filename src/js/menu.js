function renderMenu() {
   const menuItems = [
      {
         name: 'Makroud',
         description: 'some text',
         price: 9.99,
      },
      {
         name: 'Baklawa',
         description: 'some other text',
         price: 9.99,
      },
      {
         name: 'Griouech',
         description: 'some text',
         price: 9.99,
      },
   ];

   function createMenuItemCard(item) {
      const card = document.createElement('div');
      card.classList.add('menu-item');

      const name = document.createElement('h2');
      name.textContent = item.name;
      card.appendChild(name);

      const description = document.createElement('p');
      description.textContent = item.description;
      card.appendChild(description);

      const price = document.createElement('p');
      price.classList.add('price');
      price.textContent = `$${item.price.toFixed(2)}`;
      card.appendChild(price);

      return card;
   }

   const menu = document.createElement('div');
   menu.id = 'menu-container';
   menu.classList.add('main-content');
   menuItems.forEach((item) => {
      const card = createMenuItemCard(item);
      menu.appendChild(card);
   });

   return menu;
}

export default renderMenu;
