const turtle = document.querySelector('.turtle');
let x = 0;
let y = 0;
const speed = 5;
let flipped = false;
let rotate = 0;
function turtleMove(event) {
  if (!event.key.includes('Arrow')) return;

  // if (event.key === 'ArrowUp') {
  //   y = y - 1;
  // }
  // else if (event.key === 'ArrowDown') {
  //   y = y + 1;
  // }
  // else if (event.key === 'ArrowRight') {
  //   x = x + 1;
  // }
  // else if (event.key === 'ArrowLeft') {
  //   x = x - 1;
  // } else {
  //   console.log('done')
  // }

  switch (event.key) {
    case 'ArrowUp':
      y = y - 1;
      rotate = -90;
      break;
    case 'ArrowDown':
      y = y + 1;
      rotate = 90;
      break;
    case 'ArrowRight':
      flipped = false;
      x = x + 1;
      rotate = 0;
      break;
    case 'ArrowLeft':
      x = x - 1;
      rotate = 0;
      flipped = true;
      break;
    default:
      console.log('Not a valit move.');
      break;

  }

  turtle.setAttribute('style', `
  --x:${x * speed}px;
  --y:${y * speed}px;
  --rotateX:${flipped ? '180deg' : '0'};
  --rotate:${rotate}deg;
  `);


  console.log(event.key)
}
window.addEventListener('keydown', turtleMove)
