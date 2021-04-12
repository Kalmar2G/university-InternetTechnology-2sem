const extra = () => {
  addList(+startValue, +(startValue * Math.PI / 180), 'Не существует');
  startValue += +stepValue;
}

const newWindow = () => {
  return window.open('', 'Table', ' width = 600px, height = 500px');
}

const count = (val) => {
  let str = 'Math.' + form.function.value + '(' + (val * Math.PI) / 180 + ')';
  let value = eval(str);
  if (value == NaN) value = 'Не существует';
  value = value.toFixed(3);
  console.log(value);
  return value;
}

const addList = (angle, radian, value) => {
  table = addRow(table);
  angle = angle.toFixed(3);
  radian = radian.toFixed(3);
  table.rows[list].cells[0].textContent = angle;
  table.rows[list].cells[1].textContent = radian;
  table.rows[list].cells[2].textContent = value;
}

const createTable = () => {
  let win = newWindow();
  const table = win.document.createElement('table');
  const tr1 = win.document.createElement('tr');
  const tr2 = win.document.createElement('tr');
  const td11 = win.document.createElement('td');
  const td13 = win.document.createElement('td');
  const td21 = win.document.createElement('td');
  const td22 = win.document.createElement('td');
  td11.setAttribute('colspan', 2);
  td13.setAttribute('rowspan', 2);
  td13.textContent = 'Функция';
  td11.textContent = 'Угол';
  td21.textContent = 'В градусах';
  td22.textContent = 'В радианах';
  tr1.append(td11, td13);
  tr2.append(td21, td22);
  table.append(tr1, tr2);
  win.document.write('<html><head><link rel="stylesheet" href="style.css"></head><body></body></html>');
  win.document.querySelector('body').append(table);
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






const form = document.querySelector('form');
const span = document.querySelector('span');
const start = document.querySelector('.start');
const end = document.querySelector('.end');
const step = document.querySelector('.step');
let difference = 0;
let stepValue = 0;
let starValue = 0;
let endValue = 0;
let list = 2;
let i = 1;
let table;




start.placeholder = 'Начало';
end.placeholder = 'Конец';
step.placeholder = 'Шаг';


form.function.onchange = event => {
  form.function.classList.remove('invalid');
}

start.oninput = event => {
  if ((start.value >= 360) || (start.value < -360) || (Number.isNaN(+(start.value)))) {
    start.focus();
    start.classList.add('invalid');
  } else start.classList.remove('invalid');

}

end.oninput = event => {
  if ((end.value >= 360) || (end.value < -360) || (Number.isNaN(+(end.value)))) {
    end.focus();
    end.classList.add('invalid');
  } else end.classList.remove('invalid');

}

step.oninput = event => {
  difference = +end.value - +start.value;
  console.log((+difference >= 0));
  console.log((step.value) < 0);
  if ((+difference >= 0) && ((step.value) < 0) || (+difference < +(step.value))) { step.classList.add('invalid') }
  else step.classList.remove('invalid');
  if (step.value == 0) step.classList.remove('invalid');
  if (start.value >= end.value) step.classList.remove('invalid');

}


form.addEventListener('submit', event => {
  event.preventDefault();
  list = 2;
  if (form.function.value == '') form.function.classList.add('invalid');
  if (start.value == '') start.classList.add('invalid');
  if (end.value == '') end.classList.add('invalid');
  if (step.value == '') step.classList.add('invalid');
  if (!(start.classList.contains('invalid')) && !(form.function.classList.contains('invalid')) && !(step.classList.contains('invalid'))) {
    ///
    newWindow();
    table = createTable();
    table.rows[0].cells[1].textContent = `${form.function.value}`;
    endValue = +end.value;
    startValue = +start.value;
    difference = +end.value - +start.value;
    stepValue = +step.value;
    console.log('step1', stepValue);
    if ((+start.value > +end.value) && (+step.value > 0)) { stepValue = +(-step.value); }
    console.log('step2', stepValue);
    ///
    if (stepValue == 0) {
      addList(+startValue, +(startValue * Math.PI / 180), count(startValue));
      list++;


    } else if (startValue <= endValue) {
      while (startValue <= endValue) {

        addList(+startValue, +(startValue * Math.PI / 180), count(startValue));
        startValue += +stepValue;
        console.log('start =', startValue);
        console.log('step =', stepValue);
        console.log('end =', endValue);
        if (((+startValue == 90) || (+startValue == -90) || (startValue == 90) || (startValue == 270) || (startValue == -270)) && (form.function.value == 'tan')) extra();
        list++;

      }

    }
    else {
      while (startValue >= endValue) {

        addList(+startValue, +(startValue * Math.PI / 180), count(startValue));
        startValue += +stepValue;
        if (((+startValue == 90) || (+startValue == -90) || (startValue == 90) || (startValue == 270) || (startValue == -270)) && (form.function.value == 'tan')) extra();
        list++;

      }
    }
  }

})

