/* eslint-disable max-len */

'use strict';

const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');


const arr = [
  {
    'id': 1,
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
    'id': 2,
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
    'id': 3,
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
    'id': 4,
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


const table = document.querySelector('.table__body');

const createRow = ({id, title, price, category, count, units, discont}) => {
  const tr = document.createElement('tr');

  const tdnumber = document.createElement('td');
  tdnumber.classList.add('table__cell-id');

  const idSpan = document.createElement('span');
  const tdTitle = document.createElement('td');

  tdTitle.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
  tdTitle.dataset.id = 24601654816512;
  idSpan.classList.add('table__cell-id');
  idSpan.textContent = id;

  tdTitle.textContent = title;


  tdTitle.append(idSpan);


  const tdCategory = document.createElement('td');
  tdCategory.classList.add('table__cell', 'table__cell_left');
  tdCategory.textContent = category;

  const tdUnit = document.createElement('td');
  tdUnit.classList.add('table__cell');
  tdUnit.textContent = units;


  const tdCount = document.createElement('td');
  tdCount.classList.add('table__cell');
  tdCount.textContent = count;


  const tdPrice = document.createElement('td');
  tdPrice.classList.add('table__cell');
  tdPrice.textContent = price;


  const promo = () => {
    if (discont === false) {
      return price * count;
    } else {
      const prc = (price * count) / 100 * discont;
      return price - prc;
    }
  };

  const tdTotal = document.createElement('td');
  tdTotal.classList.add('table__cell');
  tdTotal.textContent = promo();


  const tdImages = document.createElement('td');

  tdImages.classList.add('table__cell', 'table__cell_btn-wrapper');
  const button1 = document.createElement('button');
  button1.classList.add('table__btn', 'table__btn_pic');
  const button2 = document.createElement('button');
  button2.classList.add('table__btn', 'table__btn_edit');
  const button3 = document.createElement('button');
  button3.classList.add('table__btn', 'table__btn_del');
  tdImages.append(button1, button2, button3);


  tr.append(tdnumber, tdTitle, tdCategory, tdUnit, tdCount, tdPrice, tdTotal, tdImages);
  table.appendChild(tr);
};


const renderGoods = (arr) => {
  const allRow = arr.map(createRow);
  table.append(allRow);
};

renderGoods(arr);


