const gameArea = () => {
  myGameArea.canvas = document.querySelector('.game-area');
  myGameArea.start();
    // console.log( myGameArea.context )
  let playerPiece = new component(25, 25, 'blue', 10, 10);
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
gameArea();
