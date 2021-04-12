const moving = () => {
  rocket.style.top = `${(300 * Math.cos(t)) + 480}px`;
  rocket.style.left = `${300 * Math.sin(t) + 450}px`;
  t += .05;
  rotate -= 2.88;
  rocket.style.transform = 'rotate(' + rotate + 'deg)';
  console.log(rotate);
  if (rotate <= -360) rotate = 0;
}


const Start_stop = () => {
  if (st) {
    clearInterval(move);
    st = false;
    button.textContent = "ПУСК";
  }
  else {
    move = setInterval('moving()', 30);
    st = true;
    button.textContent = "СТОП";

  }
}
let move;
let t = 0;
let rotate = 50;
const rocket = document.querySelector('.rocket');
const rocketFrame = document.querySelector('animation');
const button = document.querySelector('.submit');
let st = false;
button.addEventListener('click', Start_stop);




