/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

'use strict';

const overlay = document.querySelector('.overlay');
overlay.classList.remove('active');


const arr = [
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

const btn = document.querySelector('.panel__add-goods');
const table = document.querySelector('.table__body');
const modal = document.querySelector('.overlay');
const checkbox = document.querySelector('.modal__checkbox');
const discont = document.querySelector('.modal__input_discount');
const formelems = document.querySelectorAll('.modal__input');
const form = document.querySelector('.modal__form');


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

checkbox.onclick = function() {
  const isCheck = checkbox.checked;
  if (isCheck) {
    discont.disabled = false;
  } else {
    discont.value = '';
    discont.disabled = true;
  }
};


const price = document.querySelector('#price');
const count = document.querySelector('#count');


const setDiscount = (discont) => (discont ? (100 - discont) / 100 : 1);

const getTotal = (price, count, discont) => {
    return price * count * setDiscount(discont);
};


/*
formelems.forEach((elems) => {
  elems.onblur = function() {
    const modalTotal = document.querySelector('.modal__total-price');
    modalTotal.value = '';
    const a = getTotal(price.value, count.value, discont.value).toFixed(2);
    modalTotal.textContent = a;
  };
});
*/

formelems.forEach(elem => {
  const modalTotal = document.querySelector('.modal__total-price');
  modalTotal.textContent = '0.00';
  elem.addEventListener('blur', () => {
  modalTotal.value = getTotal(price.value, count.value, discont.value).toFixed(2);
  
});
});




formelems.forEach((formelem) => {
  formelem.required = true;
});

const closeModal = () => {
  
  modal.classList.remove('active');
  
};

const span = document.querySelector('.vendor-code__id');
const num = (span) =>{
 return span.textContent = getRandom(500, 900)
}

const openModal = () => {
  modal.classList.add('active');
  num(span);
  

 /* const span = document.querySelector('.vendor-code__id');

  //sssconst num = getRandom(500, 900);
  //span.textContent = num;
  span.textContent = getRandom(500, 900);*/
};


btn.addEventListener('click', () => {
  openModal();
});


modal.addEventListener('click', (e) => {
  const target = e.target;
  if (target === modal || target.closest('.modal__close')) {
    closeModal();
  }
});


const createRow = ({id, title, price, category, count, units, discont}) => {
  const tr = document.createElement('tr');
  tr.classList.add('row');
  tr.setAttribute('data-id', id);


  const tdnumber = document.createElement('td');
  tdnumber.classList.add('table__cell', 'table__cell-num');
  const idSpan = document.createElement('span');
  const tdTitle = document.createElement('td');

  tdTitle.classList.add('table__cell', 'table__cell_left', 'table__cell_name');

  idSpan.classList.add('table__cell-id');
  //idSpan.textContent = 'ID: ' + id;

  idSpan.textContent = 'ID: ' + id;
  tdTitle.textContent = title;
 


  tdTitle.prepend(idSpan);


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


  const tdTotal = document.createElement('td');
  tdTotal.classList.add('table__cell', 'table__total');
  let total = getTotal(count, price, discont);
  tdTotal.textContent = total;


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
  return tr;
};

const addProductData = (product) => {
  arr.push(product);
};

const addProductPage = (product, table) => {
  table.append(createRow(product));
};

form.addEventListener('submit', e => {
  e.preventDefault();

 
  const formData = new FormData(e.target);

  const newProduct = Object.fromEntries(formData);
  newProduct.id = document.querySelector('.vendor-code__id').textContent;
  newProduct.discont = document.querySelector('.modal__input_discount').textContent;

  addProductPage(newProduct, table);
  addProductData(newProduct);

  numbers()

  form.reset();
  closeModal();
});


const numbers = () => {
  const numTd = table.querySelectorAll('.table__cell-num');

  let n = 1;
  numTd.forEach((i) => {
    i.textContent = n++;
  });
};


table.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.table__btn_del')) {
    const conectId = target.closest('tr').dataset.id;
    const conectIndex = arr.findIndex(item => item.id == conectId);
    arr.splice(conectIndex, 1);
    target.closest('.row').remove();
    console.log(arr);
    /*
    const a = [...document.querySelectorAll('.table__btn_del')].indexOf(target);
    console.log(a);
    arr.splice(a, 1);
    target.closest('.row').remove();
    console.log(target);
    console.log(arr);
*/
  }
});






const renderGoods = (arr) => {
  const allRow = arr.map(createRow);
 

  table.append(...allRow);
};




renderGoods(arr);



numbers();

const getTotalTableSum = (arr = []) => arr.reduce(
  (acc, {count, price, discont}) =>
    acc + (price * count) * ((100 - discont) / 100), 0);


const allTotalTableSum = () => {
  document.querySelector('.cms__total-price').textContent = getTotalTableSum(arr).toFixed(2);
};


allTotalTableSum();
