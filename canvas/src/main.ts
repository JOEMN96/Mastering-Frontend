import './style.css';
let canvas = document.querySelector('canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 5; i++) {
    particlesArr.push(new Particle());
  }
});

canvas.addEventListener('click', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 5; i++) {
    particlesArr.push(new Particle());
  }
});

let mouse: MOUSE = {
  x: null,
  y: null,
};

let hue = 0;

class Particle {
  public x: number | null;
  public y: number | null;
  public size: number;
  public speedX: number;
  public speedY: number;
  private color: string;

  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.floor(Math.random() * 16 + 1);
    this.speedX = Math.floor(Math.random() * 3 - 1.5);
    this.speedY = Math.floor(Math.random() * 3 - 1.5);
    this.color = `hsl(${hue},100%,50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 360);
    ctx.stroke();
  }
}
let particlesArr: Particle[] = [];

function particleEffect() {
  for (let i = 0; i < particlesArr.length; i++) {
    particlesArr[i].update();
    particlesArr[i].draw();

    for (let j = i; j < particlesArr.length; j++) {
      let dx = particlesArr[i].x - particlesArr[j].x;
      let dy = particlesArr[i].y - particlesArr[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(particlesArr[i].x, particlesArr[i].y);
        ctx.lineTo(particlesArr[j].x, particlesArr[j].y);
        ctx.stroke();
      }
    }

    if (particlesArr[i].size < 0.2) {
      particlesArr.splice(i, 1);
    }
  }
}

function animateParticle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  hue++;
  particleEffect();
  requestAnimationFrame(animateParticle);
}

animateParticle();

export { canvas };
