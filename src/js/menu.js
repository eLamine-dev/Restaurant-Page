function renderMenu() {
   let menu = document.createElement('div');
   menu.id = 'menu';

   let menuList = ['food01', 'food02', 'food03'];

   menuList.forEach((el) => {
      let food = document.createElement('li');
      food.innerText = el;
      menu.appendChild(food);
   });

   return menu;
}

export default renderMenu;
