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

let ballSpeedX = 4;
let ballSpeedY = 4;

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

  if(ballY <= 0 || ballY >= ch - ballSize) {
    ballSpeedY = -ballSpeedY;

  };
  if(ballX <= 0 || ballX >= cw - ballSize) {
    ballSpeedX = -ballSpeedX;
    speedUp();

  }
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



function playerPosition(e) {
  let topCanvas = canvas.offsetTop;
  console.log(e);
  playerY = e.offsetY - paddleHeight / 2;
  if(playerY >= ch - paddleHeight) {
    playerY = ch - paddleHeight;
  };
  if(playerY <= 0) {
    playerY = 0;
  }
  aiY = playerY;
}

function speedUp() {
  console.log("pam!");

  if(ballSpeedX > 0 && ballSpeedX < 16) {
    // ballSpeedY *= 1.2;
    ballSpeedX += 1;

    console.log(ballSpeedX);
  }
};

function aiPosition() {
  const middlePaddle = aiY + paddleHeight / 2;
  const middleBall = ballY + ballSize / 2;

  if(ballX > 500) {
    if(middlePaddle - middleBall) {

    };
  }
};

canvas.addEventListener("mousemove", playerPosition);

function game() {
  table();
  ball();
  player();
  ai();
  aiPosition();
}
game();
setInterval(game, 1000 / 60);
