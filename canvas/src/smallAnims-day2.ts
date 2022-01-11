let canvas = document.querySelector('canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse: MOUSE = {
  x: null,
  y: null,
};

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  draw(mouse);
});

function draw(coords: MOUSE): void {
  let colors: string[] = ['red', 'greeen', 'blue', 'yellow', 'white', 'teal'];
  ctx!.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx!.beginPath();
  ctx?.arc(coords!.x || 0, coords.y as number, 10, 0, Math.PI * 2);
  ctx?.stroke();
}
