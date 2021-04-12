const changeFirst = () => {
  first.classList.contains('first-click') ? first.classList.remove('first-click') : first.classList.add('first-click')
}

const changeSecond = () => {
  second.classList.contains('second-click') ? second.classList.remove('second-click') : second.classList.add('second-click')
}

const changeThird = () => {
  third.classList.contains('third-click') ? third.classList.remove('third-click') : third.classList.add('third-click')
}



const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

first.addEventListener('click', changeFirst);
second.addEventListener('mousedown', changeSecond);
second.addEventListener('mouseup', changeSecond);
third.addEventListener('mouseover', changeThird);
third.addEventListener('mouseout', changeThird);
