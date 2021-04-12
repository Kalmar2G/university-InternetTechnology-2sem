
const count = () => {
  let str = 'Math.' + form.function.value + '(' + (form.input.value * Math.PI) / 180 + ')';
  let value = eval(str);
  if (form.function[4].selected) value = 1 / value;
  if (form.input.value == 0) value = none;
  value = value.toFixed(3);
  return value;
}

const form = document.querySelector('form');
const span = document.querySelector('span');
form.input.placeholder = 'Значение';

form.function.onchange = event => {
  form.function.classList.remove('invalid');
}

form.input.oninput = event => {
  if ((form.input.value >= 90) || (form.input.value < 0) || (Number.isNaN(+(form.input.value)))) {
    form.input.focus();
    form.input.classList.add('invalid');
  }
  else if (form.input.value == '0') {
    form.input.onchange = event => {
      if ((+(form.input.value) == 0)) { form.input.classList.add('invalid'); }
      else { form.input.classList.remove('invalid'); }
    }

  } else form.input.classList.remove('invalid');

}


form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.function.value == '') form.function.classList.add('invalid');
  if (form.input.value == '') form.input.classList.add('invalid');
  if (!(form.input.classList.contains('invalid')) && !(form.function.classList.contains('invalid')))
    span.textContent = count();
  else span.innerHTML = '';
})

