import './style.css';
let canvas = document.querySelector('canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

canvas.addEventListener('click', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  mouse.radius = 150;
});

let mouse: MOUSE = {
  x: null,
  y: null,
  radius: 0,
};

ctx.font = '90px Courier New ';
ctx.fillStyle = 'white';
ctx.fillText('JOE', canvas.width / 2 - 90, canvas.height / 2);

export { canvas };

// CAnvas is just a transparent layer with black background
