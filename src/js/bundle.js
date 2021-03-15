const gameArea = () => {
  myGameArea.canvas = document.querySelector('.game-area');
  myGameArea.start();
    // console.log( myGameArea.context )
  const ctx = myGameArea.context
  // console.log(ctx)
  const playerPiece = new component(25, 25, 'blue', 10, 10);
  // console.log(playerPiece.ctx)
  draw(playerPiece);
  function draw(component) {
    if(keyPress.left) {
        component.x += 5;
    }
    else if(keyPress.right) {
        component.x -= 5;
    }
    if(keyPress.up) {
        component.y += 5;
    }
    else if(keyPress.down) {
        component.y -= 5;
    }
    ctx.fillRect(component.x, component.y, component.width, component.height);
    requestAnimationFrame(draw);
  }
};

const keyPress = {
    up: false,
    down: false,
    left: false,
    right: false
}
const myGameArea = {
  canvas: '',
  start: function () {
    this.context = this.canvas.getContext('2d');
  },
  clear: ( ) => {

  }
};
function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.ctx = myGameArea.context;
  this.ctx.fillStyle = color;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};


function keyDownHandler(event) {
  if(event.keyCode == 39) {
    keyPress.right = true;
  }
  else if(event.keyCode == 37) {
    keyPress.left = true;
  }
  if(event.keyCode == 40) {
    keyPress.down = true;
  }
  else if(event.keyCode == 38) {
    keyPress.up = true;
  }
}
function keyUpHandler(event) {
  if(event.keyCode == 39) {
    keyPress.right = false;
  }
  else if(event.keyCode == 37) {
    keyPress.left = false;
  }
  if(event.keyCode == 40) {
    keyPress.down = false;
  }
  else if(event.keyCode == 38) {
    keyPress.up = false;
  }
}
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
gameArea();
