// We can layer canvas ontop on canvas to create layering (advanced)
import { canvas } from './main';

let ctx = canvas.getContext('2d');
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx!.fillStyle = 'white';
ctx!.fillRect(canvas.width / 3, canvas.height / 4, 100, 50); /*  X, Y, Width, Height */

ctx!.strokeStyle = 'green';

ctx?.beginPath();
ctx!.arc(canvas.width / 2, canvas.height / 2, 100, 0, 360);
ctx!.lineWidth = 5;
ctx?.stroke();
