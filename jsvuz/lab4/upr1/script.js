const add = document.querySelector('body');
const list = document.querySelector('select');
let img = document.createElement('img');
add.append(img);
list.onchange = event => {
  img.src = list.value + '.jpg';
}