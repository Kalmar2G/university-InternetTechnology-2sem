const color = () => {
  return '#' + Math.random().toString(16).substr(2, 6);
}

const change = event => {
  const target = event.target;

  if (target.classList.contains('header')) {
    target.style.color = `${color()}`
    console.log(color());
  }

  if (target.classList.contains('img')) {
    if (target.getAttribute('src') == "img/1.jpg") {
      target.src = "img/2.jpg";
      target.nextElementSibling.innerHTML = 'Попугай Жако';
    }
    else {
      target.src = "img/1.jpg";
      target.nextElementSibling.innerHTML = 'Попугай Apa';
    }
  }


}
const container = document.querySelector('.container');
container.addEventListener('click', change);
