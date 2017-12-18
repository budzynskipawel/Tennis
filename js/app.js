const canvas = document.querySelector("canvas");
// console.log(canv);
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

function table() {
  // table
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cw, ch);
  // middle line
  ctx.fillStyle = "white";
  ctx.fillRect(495, 0, 10, 500);
};

table();
