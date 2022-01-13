
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
      this.size = Math.floor(Math.random() * 6 + 1);
      this.speedX = Math.floor(Math.random() * 2.5 - 1.5);
      this.speedY = Math.floor(Math.random() * 2.5 - 1.5);
    }
  
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
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
    for (let i = 0; i < 101; i++) {
      particlesArr.push(new Particle());
    }
  })();
  
  function particleEffect() {
    for (let i = 0; i < particlesArr.length; i++) {
      particlesArr[i].update();
      particlesArr[i].draw();
    }
  }
  
  function animateParticle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleEffect();
    requestAnimationFrame(animateParticle);
  }
  
  animateParticle();
  
  console.log(particlesArr);