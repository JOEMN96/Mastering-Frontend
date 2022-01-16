class Particle {
  public x: number | null;
  public y: number | null;
  public size: number;
  public speedX: number;
  public speedY: number;

  constructor() {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.floor(Math.random() * 16 + 1);
    this.speedX = Math.floor(Math.random() * 3 - 1.5);
    this.speedY = Math.floor(Math.random() * 3 - 1.5);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 360);
    ctx.stroke();
  }
}
let particlesArr: Particle[] = [];

(function () {
  for (let i = 0; i < 50; i++) {
    particlesArr.push(new Particle());
  }
})();

function particleEffect() {
  for (let i = 0; i < particlesArr.length; i++) {
    particlesArr[i].update();
    particlesArr[i].draw();

    if (particlesArr[i].size < 0.2) {
      particlesArr.splice(i, 1);
      // i--;
    }
  }
}

function animateParticle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particleEffect();
  console.log(particlesArr);

  requestAnimationFrame(animateParticle);
}

animateParticle();

// canvas.addEventListener('mousemove', (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

// function draw(): void {
//   ctx!.strokeStyle = 'green';
//   ctx?.beginPath();
//   ctx?.arc(mouse.x as number, mouse.y as number, 15, 0, 360);
//   ctx?.stroke();
// }

// function animate(): void {
//   ctx?.clearRect(0, 0, canvas.width, canvas.height);
//   draw();
//   requestAnimationFrame(animate);
// }

// // animate();
