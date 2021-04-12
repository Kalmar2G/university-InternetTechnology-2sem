const change = (product, price, count) => {
  let temp, temp2;
  for (let i = 1; i < 7; i++) {
    if (product == table.rows[i].cells[0].textContent) temp = i;
  }
  table.rows[temp].cells[1].textContent = +price;
  table.rows[temp].cells[2].textContent = +count;
  temp2 = +table.rows[temp].cells[3].textContent;
  table.rows[temp].cells[3].textContent = price * count;
  table.rows[6].cells[1].textContent = +table.rows[6].cells[1].textContent - +temp2;
  console.log(+table.rows[6].cells[1].textContent);
  table.rows[6].cells[1].textContent = +table.rows[6].cells[1].textContent + +table.rows[temp].cells[3].textContent;
}


let list = 0;
let table = document.querySelector('table');
const form = document.querySelector('form');
const price = document.querySelector('.inputPrice');
const count = document.querySelector('.inputCount');
price.placeholder = 'Цена за ед.';
count.placeholder = 'Количество';


price.oninput = event => {
  if ((price.value < 0) || (Number.isNaN(+(price.value))) || (Number.isInteger(price.value))) {
    price.focus();
    price.classList.add('invalid');
  } else price.classList.remove('invalid');
}

count.oninput = event => {
  console.log((Number.isInteger(+count.value)));
  if ((count.value < 0) || (Number.isNaN(+count.value))) {
    count.focus();
    count.classList.add('invalid');
  } else if (Number.isInteger(+count.value)) count.classList.remove('invalid')
  else count.classList.add('invalid');
}

form.product.onchange = event => {
  form.product.classList.remove('invalid');
}





form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.product.value == '') form.product.classList.add('invalid');
  if (price.value == '') price.classList.add('invalid');
  if (count.value == '') count.classList.add('invalid');
  if (!price.classList.contains('invalid') && !count.classList.contains('invalid') && !form.product.classList.contains('invalid')) {
    change(form.product.value, +price.value, +count.value);
    form.reset();
  }

})

form.addEventListener('reset', event => {
  price.classList.remove('invalid');
  form.product.classList.remove('invalid');
  price.classList.remove('invalid')

})