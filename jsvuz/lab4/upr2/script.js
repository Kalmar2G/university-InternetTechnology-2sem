
const arrows = () => {
  let i = 0;
  for (i = 130; i < 150; i += .5) {
    newPixel = pixel.cloneNode(true);
    newPixel.style.left = `${i}px`;
    newPixel.style.top = `${i + 150}px`;
    firstMethod.append(newPixel);
  }

  for (i = 130; i < 150; i += .5) {
    newPixel = pixel.cloneNode(true);
    newPixel.style.left = `${i}px`;
    newPixel.style.top = `${450 - i}px`;
    firstMethod.append(newPixel);
  }

  for (i = 150; i < 170; i += .5) {
    newPixel = pixel.cloneNode(true);
    newPixel.style.left = `${i - 150}px`;
    newPixel.style.top = `${i}px`;
    firstMethod.append(newPixel);
  }

  for (i = 150; i < 170; i += .5) {
    newPixel = pixel.cloneNode(true);
    newPixel.style.left = `${i - 170}px`;
    newPixel.style.top = `${320 - i}px`;
    firstMethod.append(newPixel);
  }

  for (i = 30; i < 300; i += 30) {
    newVsegment = vSegment.cloneNode(true);
    newVsegment.style.marginTop = `${i}px`;
    firstMethod.append(newVsegment);
  }

  for (i = 30; i < 300; i += 30) {
    newHsegment = hSegment.cloneNode(true);
    newHsegment.style.marginLeft = `${i}px`;
    firstMethod.append(newHsegment);
  }

  for (i = 30; i < 300; i += 30) {
    newVal = val.cloneNode(true);
    newVal.style.marginTop = `${i - 9}px`;
    newVal.textContent = `${150 - i}`;
    firstMethod.append(newVal);
  }

  for (i = 30; i < 300; i += 30) {
    newVal = val.cloneNode(true);
    newVal.style.marginTop = `160px`;
    newVal.style.marginLeft = `${i - 9}px`;
    newVal.textContent = `${-150 + i}`;
    firstMethod.append(newVal);
  }
}

const svg = () => {
  let i = 0;
  for (i = 20; i < 290; i += 30) {
    newSVGvSegment = svgVsegment.cloneNode(true);
    newSVGvSegment.setAttribute('y1', i);
    newSVGvSegment.setAttribute('y2', i);
    secondMethod.append(newSVGvSegment);
  }
  for (i = 20; i < 290; i += 30) {
    newSVGhSegment = svgHsegment.cloneNode(true);
    newSVGhSegment.setAttribute('x1', i);
    newSVGhSegment.setAttribute('x2', i);
    secondMethod.append(newSVGhSegment);
  }
  for (i = 30; i < 300; i += 30) {
    newVal = val.cloneNode(true);
    newVal.style.marginTop = `${i - 9}px`;
    newVal.textContent = `${150 - i}`;
    secondMethod.append(newVal);
  }

  for (i = 30; i < 300; i += 30) {
    newVal = svgVal.cloneNode(true);
    newVal.textContent = `${150 - i}`;
    newVal.setAttribute('x', `155px`);
    newVal.setAttribute('y', `${i - 7}px`);
    secondMethod.append(newVal);
  }
  for (i = 30; i < 300; i += 30) {
    newVal = svgVal.cloneNode(true);
    newVal.textContent = `${-150 + i}`;
    newVal.setAttribute('x', `${i - 20}px`);
    newVal.setAttribute('y', `160px`);
    secondMethod.append(newVal);
  }

}




const canvasLine = () => {
  let i = 0;
  ctx.lineWidth = 2;
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 300);
  ctx.stroke();
  ctx.moveTo(0, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();
  for (i = 30; i < 300; i += 30) {
    ctx.moveTo(140, i);
    ctx.lineTo(160, i);
    ctx.stroke();
  }

  for (i = 30; i < 300; i += 30) {
    ctx.moveTo(i, 140);
    ctx.lineTo(i, 160);
    ctx.stroke();
  }

  ctx.moveTo(130, 20);
  ctx.lineTo(150, 0);
  ctx.stroke();

  ctx.moveTo(170, 20);
  ctx.lineTo(150, 0);
  ctx.stroke();

  ctx.moveTo(280, 130);
  ctx.lineTo(300, 150);
  ctx.stroke();

  ctx.moveTo(280, 170);
  ctx.lineTo(300, 150);
  ctx.stroke();

  ctx.font = "11px Arial";
  ctx.lineWidth = 2;

  for (i = 30; i < 300; i += 30) {
    ctx.fillText(`${150 - i}`, 165, `${i + 3}`)
    ctx.fillText(`${-150 + i}`, `${i - 9}`, `170`)
  }


}

const drawEllipse = (x, y) => {
  let t = 0;
  while (t < 2 * Math.PI) {
    newPixel = pixel.cloneNode(true);
    newPixel.style.top = `${(x * Math.cos(t)) + 300}px`;
    newPixel.style.left = `${y * Math.sin(t)}px`;
    firstMethod.append(newPixel);
    t += .01;
  }
}

const form = document.querySelector('.form');
const ellipse = document.querySelector('ellipse');
const pixel = document.createElement('div');
pixel.classList.add('pixel');
const svgVsegment = document.querySelector('.svgVsegment');
const svgHsegment = document.querySelector('.svgHsegment');
const vSegment = document.querySelector('.vSegment');
const hSegment = document.querySelector('.hSegment');
const val = document.querySelector('.val');
const svgVal = document.querySelector('text');
const firstMethod = document.querySelector('.firstMethod');
const secondMethod = document.querySelector('.svg');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let newPixel;
let newVsegment;
let newVal;
let newSVGvSegment;
let newSVGhSegment;
let oldX = 0;
let oldY = 0;
arrows();
canvasLine();
svg();

form.inputY.oninput = event => {
  if ((form.inputY.value >= 146) || (form.inputY.value < 0) || (Number.isNaN(+(form.inputY.value)))) {
    form.inputY.focus();
    form.inputY.classList.add('invalid');
  }
  else if (form.inputY.value == '0') {
    form.inputY.onchange = event => {
      if ((+(form.inputY.value) == 0)) { form.inputY.classList.add('invalid'); }
      else { form.inputY.classList.remove('invalid'); }
    }

  } else form.inputY.classList.remove('invalid');

}


form.inputX.oninput = event => {
  if ((form.inputX.value >= 146) || (form.inputX.value < 0) || (Number.isNaN(+(form.inputX.value)))) {
    form.inputX.focus();
    form.inputX.classList.add('invalid');
  }
  else if (form.inputX.value == '0') {
    form.inputX.onchange = event => {
      if ((+(form.inputX.value) == 0)) { form.inputX.classList.add('invalid'); }
      else { form.inputX.classList.remove('invalid'); }
    }

  } else form.inputX.classList.remove('invalid');

}


form.addEventListener('submit', event => {
  event.preventDefault();
  if (!(form.inputY.classList.contains('invalid')) && !(form.inputX.classList.contains('invalid'))) {
    let sizeX = form.inputX.value;
    let sizeY = form.inputY.value;
    // SVG
    ellipse.setAttribute('rx', sizeX);
    ellipse.setAttribute('ry', sizeY);
    // CANVAS
    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    canvasLine();
    ctx.ellipse(150, 150, sizeX, sizeY, 0, 0, 7);
    ctx.stroke();
    // MOZAIKA
    drawEllipse(oldY, oldX);
    pixel.style.background = 'black';
    drawEllipse(sizeY, sizeX);
    pixel.style.background = 'rgb(255, 202, 202)';
    oldX = sizeX;
    oldY = sizeY;
  }
})

