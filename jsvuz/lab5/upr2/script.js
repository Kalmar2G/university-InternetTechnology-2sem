const child = document.querySelector('.child');
flag = false;

function init() {
  child.onmousedown = take;
  child.onmousemove = move;
  document.onmouseup = drop;
}



function move(event) {
  console.log(flag);
  event.preventDefault();
  if (flag) {

    if (event.clientY < 975 && event.clientY > 525) {
      child.style.top = event.clientY - 25 + 'px';
    } else if (event.clientY >= 950) child.style.top = 950 + 'px';
    if (event.clientY <= 500) child.style.top = 499 + 'px';

    if (event.clientX < 975 && event.clientX > 525) {
      child.style.left = event.clientX - 25 + 'px';
    } else if (event.clientX >= 950) child.style.left = 950 + 'px';
    if (event.clientX <= 500) child.style.left = 499 + 'px';

    if (event.clientY > 975 || event.clientY < 525 || event.clientX > 975 || event.clientX < 525) drop();


  }

}

const drop = () => {
  flag = false;
  console.log('drop');
}

const take = () => {
  flag = true;
  console.log('catch');
}

init();