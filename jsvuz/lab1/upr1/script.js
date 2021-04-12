
const change = () => {

  if (first.classList.contains('first')) {
    first.classList.remove('first');
    first.classList.add('first-click');
    third.classList.remove('third');
    third.classList.add('third-click');
  }
  else {
    first.classList.add('first');
    third.classList.add('third');
  }
}

const change2 = () => {

  if (second.classList.contains('second')) {
    second.classList.remove('second');
    second.classList.add('second-click');
  }
  else {
    second.classList.add('second');
  }
}

const first = document.getElementById('first');
const second = document.all.second;
const third = document.getElementById('third');

first.addEventListener('click', change);
second.addEventListener('click', change2);
third.addEventListener('click', change);

