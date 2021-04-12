const addList = (product, material, count, list) => {
  table = addRow(table);
  table.rows[list].cells[0].innerHTML = product;
  table.rows[list].cells[1].innerHTML = material;
  table.rows[list].cells[2].innerHTML = count;
}

const createTable = () => {
  const table = document.createElement('table');
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  td1.innerHTML = 'Заказ';
  td2.innerHTML = 'Материал';
  td3.innerHTML = 'Количество';
  tr.append(td1, td2, td3);
  table.append(tr);
  document.querySelector('body').append(table);
  return table;
}

const addRow = (table) => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  tr.append(td1, td2, td3);
  table.append(tr);
  return table;
}



let list = 0;
let table = createTable();
const form = document.querySelector('form');
form.input.placeholder = 'Количество товара';

form.addEventListener('submit', event => {
  event.preventDefault();
  form.input.classList.remove('invalid');
  form.product.classList.remove('invalid');
  form.material.classList.remove('invalid')
  if (form.product.value !== '') {
    if (form.material.value !== '') {
      if ((+form.input.value.trim() >= 1) && (Number.isInteger(+form.input.value))) {
        list++;
        addList(form.product.value, form.material.value, form.input.value, list);
        form.reset();


      } else form.input.classList.add('invalid');
    } else form.material.classList.add('invalid')
  } else form.product.classList.add('invalid');
}
)

form.addEventListener('reset', event => {
  form.input.classList.remove('invalid');
  form.product.classList.remove('invalid');
  form.material.classList.remove('invalid')

})