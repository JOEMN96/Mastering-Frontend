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
let particles: Particle[] = [];
// ctx.strokeStyle = 'white';

// ctx.strokeRect(canvas.width / 2 - 100, canvas.height / 2 - 120, 200, 200);

let data = ctx.getImageData(canvas.width / 2 - 100, canvas.height / 2 - 120, 200, 200);
console.log(data);

class Particle {
  public x: number;
  public y: number;
  public baseX: number;
  public baseY: number;
  public density: number;
  public size: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
    this.size = 3;
  }

  draw() {
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 360);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
      this.size = 10;
    } else {
      this.size = 3;
    }
  }
}

function init() {
  for (let i = 0; i < 200; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();

export { canvas };

// CAnvas is just a transparent layer with black backgrounds
