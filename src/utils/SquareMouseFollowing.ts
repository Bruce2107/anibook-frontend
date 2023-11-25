function randomColor() {
  const colors = ['#00d2d3', '#2e86de', '#ffd500', '#ff1493'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createAndRemoveSquare(ev: MouseEvent) {
  const square = document.createElement('div');
  square.style.top = `${ev.clientY}px`;
  square.style.left = `${ev.clientX}px`;
  square.style.background = randomColor();
  square.setAttribute('class', 'square');
  // document.body.appendChild(square);
  // setTimeout(() => {
  //   document.body.removeChild(square);
  // }, 1000);
}

export default createAndRemoveSquare;
