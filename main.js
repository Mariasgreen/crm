
import {renderGoods}  from './modules/render.js';
import{ allTotalTableSum} from './modules/summs.js';

import create from './modules/const.js';
const{ btn,
  table,
  modal,
  form,
  overlay,
  }=create;


import{closeModal,  openModal} from './modules/modal.js';
import{addProductData, numbers, addProductPage} from './modules/table.js';



 export const arr = [
  {
    'id': 11,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 72,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 399999,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 4444,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },


];










const init = () =>{
  
  overlay.classList.remove('active');

  form.addEventListener('submit', e => {
    e.preventDefault();
  
  
    const formData = new FormData(e.target);
  
    const newProduct = Object.fromEntries(formData);
    newProduct.id = document.querySelector('.vendor-code__id').textContent;
  
    newProduct.discont = document.querySelector('.modal__input_discount').value;
  
  
    addProductPage(newProduct, table);
    addProductData(newProduct);
  
    numbers();
    allTotalTableSum();
  
    form.reset();
    closeModal();
  });
  
  table.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.table__btn_del')) {
      const conectId = target.closest('tr').dataset.id;
      const conectIndex = arr.findIndex(item => item.id == conectId);
      arr.splice(conectIndex, 1);
      target.closest('.row').remove();
      console.log(arr);
      numbers(arr);
      allTotalTableSum();
    }

  });
  btn.addEventListener('click', () => {
    openModal();
  });
  

  modal.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modal || target.closest('.modal__close')) {
      closeModal();
    }
  });

 

  renderGoods(arr);
}

init()