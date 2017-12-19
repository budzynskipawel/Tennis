const canvas = document.querySelector("canvas");
// console.log(canv);
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddleHeight = 100;
const paddleWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 2;
const lineHeight = 16;

let ballSpeedX = -2;
let ballSpeedY = 1;

function player() {
  ctx.fillStyle = "green";
  ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
}

function ai() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);
}

function ball() {

  ctx.fillStyle = "yellow";
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;
}

function table() {
  // table
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cw, ch);
  // middle line
  ctx.fillStyle = "white";
  for(let linePosition = 10; linePosition <= 500; linePosition += 30) {
    ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
  }
};

function game() {
  table();
  ball();
  // setInterval(ball, 50);
  player();
  ai();
}
game();
setInterval(game, 1000 / 60);
