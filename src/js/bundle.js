import * as THREE from 'three';
const gameArea = () => {
	const canvas = document.querySelector('.game-area');
	const renderer = new THREE.WebGLRenderer({ canvas });

	const fov = 75;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 4;

	const scene = new THREE.Scene();
	{
		const color = 0xffffff;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);
	}

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

	const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 }); // greenish blue

	const cube = new THREE.Mesh(geometry, material);
	const cube2 = new THREE.Mesh(geometry, material);
	cube.add(cube2);
	cube2.position.x = 3;
	scene.add(cube);

	renderer.render(scene, camera);
	function render(time) {
		time *= 0.001; // convert time to seconds

		// cube.rotation.x = time;
		cube.rotation.z = time;

		renderer.render(scene, camera);

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
};

// const keyPress = {
// 	up: false,
// 	down: false,
// 	left: false,
// 	right: false,
// };
// const myGameArea = {
// 	canvas: '',
// 	start: function () {
// 		this.context = this.canvas.getContext('2d');
// 	},
// 	clear: () => {},
// };
// function component(width, height, color, x, y) {
// 	this.width = width;
// 	this.height = height;
// 	this.x = x;
// 	this.y = y;
// 	this.ctx = myGameArea.context;
// 	this.ctx.fillStyle = color;
// 	this.ctx.fillRect(this.x, this.y, this.width, this.height);
// }

// function keyDownHandler(event) {
// 	if (event.keyCode == 39) {
// 		keyPress.right = true;
// 	} else if (event.keyCode == 37) {
// 		keyPress.left = true;
// 	}
// 	if (event.keyCode == 40) {
// 		keyPress.down = true;
// 	} else if (event.keyCode == 38) {
// 		keyPress.up = true;
// 	}
// }
// function keyUpHandler(event) {
// 	if (event.keyCode == 39) {
// 		keyPress.right = false;
// 	} else if (event.keyCode == 37) {
// 		keyPress.left = false;
// 	}
// 	if (event.keyCode == 40) {
// 		keyPress.down = false;
// 	} else if (event.keyCode == 38) {
// 		keyPress.up = false;
// 	}
// }
// document.addEventListener('keydown', keyDownHandler, false);
// document.addEventListener('keyup', keyUpHandler, false);
gameArea();
