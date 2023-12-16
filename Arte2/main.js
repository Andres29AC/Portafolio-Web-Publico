import "./style.css";

// window.addEventListener("load", function() {
// 	const canvas = document.getElementById("canvas");
// 	const ctx = canvas.getContext("2d");
// 	canvas.width = 600;
// 	canvas.height = 600;
// 	console.log(ctx);
// 	ctx.lineWidth = 2;
// 	ctx.lineCap = "round";
// 	ctx.strokeStyle = "green";
// 	ctx.shadowColor = "black";
// 	ctx.shadowOffsetY = 10;
// 	ctx.shadowOffsetX = 5;
// 	ctx.shadowBlur = 10;

// 	class FractalTree {
// 		constructor(canvasWidth, canvasHeight) {
// 			this.canvasWidth = canvasWidth;
// 			this.canvasHeight = canvasHeight;
// 			this.size = this.canvasHeight * 0.25;
// 			this.angle = -Math.PI / 2;
// 			this.branchRatio = 0.7;
// 			this.depth = 8;
// 		}

// 		draw(context, x, y, length, angle, depth) {
// 			if (depth === 0) return;

// 			const x2 = x + length * Math.cos(angle);
// 			const y2 = y + length * Math.sin(angle);

// 			context.beginPath();
// 			context.moveTo(x, y);
// 			context.lineTo(x2, y2);
// 			context.stroke();

// 			this.draw(
// 				context,
// 				x2,
// 				y2,
// 				length * this.branchRatio,
// 				angle - Math.PI / 6,
// 				depth - 1
// 			);
// 			this.draw(context, x2, y2, length * this.branchRatio, angle, depth - 1);
// 			this.draw(
// 				context,
// 				x2,
// 				y2,
// 				length * this.branchRatio,
// 				angle + Math.PI / 6,
// 				depth - 1
// 			);
// 		}

// 		drawTree(context, depth, delay) {
// 			const startX = this.canvasWidth / 2;
// 			const startY = this.canvasHeight * 0.9;

// 			for (let i = 1; i <= depth; i++) {
// 				setTimeout(() => {
// 					ctx.clearRect(0, 0, canvas.width, canvas.height);
// 					this.draw(context, startX, startY, this.size, this.angle, i);
// 				}, i * delay);
// 			}
// 		}
// 	}

// 	const fractalTree = new FractalTree(canvas.width, canvas.height);

// 	fractalTree.drawTree(ctx, fractalTree.depth, 100);
// });
// script.js

// script.js

// script.js
//NOTE: Version 1
// window.addEventListener("load", function() {
// 	const canvas = document.getElementById("canvas");
// 	const ctx = canvas.getContext("2d");
// 	canvas.width = 900;
// 	canvas.height = 900;

// 	const centerX = canvas.width / 2;
// 	const centerY = canvas.height - 400;

// 	ctx.beginPath();
// 	ctx.moveTo(centerX, canvas.height);
// 	ctx.lineTo(centerX, centerY);
// 	ctx.lineWidth = 16;
// 	ctx.strokeStyle = "#8B4513";
// 	ctx.lineCap = "round";
// 	ctx.stroke();

// 	const petalCount = 60;
// 	const petalLength = 230;
// 	const petalWidth = 200; // Ancho constante de los pétalos
// 	const petalGap = (755.9 / petalCount) * 6;

// 	function drawPetal(i) {
// 		const angle = (i * petalGap * Math.PI) / 378.7;

// 		const x = centerX + petalLength * Math.cos(angle);
// 		const y = centerY - petalLength * Math.sin(angle);
// 		console.log(`Pétalo ${i + 1} - x: ${x}, y: ${y}`);

// 		ctx.beginPath();
// 		ctx.moveTo(centerX, centerY);
// 		ctx.quadraticCurveTo(x, y - petalWidth / 2, x, y);
// 		ctx.quadraticCurveTo(x, y + petalWidth / 2, centerX, centerY);
// 		ctx.fillStyle = "#FFD700";
// 		ctx.fill();

// 		if (i < petalCount - 1) {
// 			setTimeout(function() {
// 				drawPetal(i + 1);
// 			}, 500);
// 		}
// 	}

// 	drawPetal(0);

// 	setTimeout(function() {
// 		ctx.beginPath();
// 		ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI);
// 		ctx.fillStyle = "#996515";
// 		ctx.fill();
// 	}, petalCount * 600);
// });
//NOTE: Version 2
// window.addEventListener("load", function() {
// 	const canvas = document.getElementById("canvas");
// 	const ctx = canvas.getContext("2d");
// 	canvas.width = 900;
// 	canvas.height = 900;

// 	const centerX = canvas.width / 2;
// 	const centerY = canvas.height - 400;

// 	ctx.beginPath();
// 	ctx.moveTo(centerX, canvas.height);
// 	ctx.lineTo(centerX, centerY);
// 	ctx.lineWidth = 16;
// 	ctx.strokeStyle = "#8B4513";
// 	ctx.lineCap = "round";
// 	ctx.stroke();

// 	const petalCount = 60;
// 	const petalLength = 230;
// 	const petalWidth = 200; // Ancho constante de los pétalos
// 	const petalGap = (755.9 / petalCount) * 6;

// 	function drawPetal(i) {
// 		const angle = (i * petalGap * Math.PI) / 378.7;

// 		const x = centerX + petalLength * Math.cos(angle);
// 		const y = centerY - petalLength * Math.sin(angle);
// 		console.log(`Pétalo ${i + 1} - x: ${x}, y: ${y}`);

// 		ctx.beginPath();
// 		ctx.moveTo(centerX, centerY);
// 		ctx.quadraticCurveTo(x, y - petalWidth / 2, x, y);
// 		ctx.quadraticCurveTo(x, y + petalWidth / 2, centerX, centerY);
// 		ctx.fillStyle = "#FFD700";
// 		ctx.fill();

// 		// Agregar líneas para dar textura a la membrana
// 		ctx.beginPath();
// 		ctx.moveTo(centerX, centerY);
// 		ctx.quadraticCurveTo(x, y - petalWidth / 2, x, y);
// 		ctx.quadraticCurveTo(x, y + petalWidth / 2, centerX, centerY);
// 		ctx.strokeStyle = "#DAA520"; // Color para las líneas de textura
// 		ctx.lineWidth = 2;
// 		ctx.stroke();

// 		if (i < petalCount - 1) {
// 			setTimeout(function() {
// 				drawPetal(i + 1);
// 			}, 500);
// 		}
// 	}

// 	drawPetal(0);

// 	setTimeout(function() {
// 		// Dibujar círculos concéntricos en el centro
// 		for (let i = 0; i < 6; i++) {
// 			ctx.beginPath();
// 			ctx.arc(centerX, centerY, 36 + i * 10, 0, 2 * Math.PI);
// 			ctx.fillStyle = "#996515";
// 			ctx.fill();
// 		}

// 		// Agregar sombra al centro
// 		ctx.shadowBlur = 20;
// 		ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

// 		// Dibujar líneas para dar textura al centro
// 		for (let i = 0; i < 12; i++) {
// 			const angle = (i * Math.PI) / 6;
// 			const x1 = centerX + 50 * Math.cos(angle);
// 			const y1 = centerY + 50 * Math.sin(angle);
// 			const x2 = centerX + 80 * Math.cos(angle);
// 			const y2 = centerY + 80 * Math.sin(angle);

// 			ctx.beginPath();
// 			ctx.moveTo(x1, y1);
// 			ctx.lineTo(x2, y2);
// 			ctx.strokeStyle = "#996515";
// 			ctx.lineWidth = 2;
// 			ctx.stroke();
// 		}

// 		ctx.shadowBlur = 0; // Restablecer la sombra
// 	}, petalCount * 800);
// });
window.addEventListener("load", function() {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = 900;
	canvas.height = 900;

	const centerX = canvas.width / 2;
	const centerY = canvas.height - 400;

	// Dibujar el tronco
	const trunkWidth = 50;
	const trunkHeight = 150;

	ctx.beginPath();
	ctx.rect(centerX - trunkWidth / 2, centerY, trunkWidth, trunkHeight);
	ctx.fillStyle = "#8B4513";
	ctx.fill();

	// Dibujar las hojas
	const leafSize = 100;
	const leafDistance = 20;

	ctx.beginPath();
	ctx.moveTo(centerX - leafDistance, centerY + trunkHeight);
	ctx.lineTo(centerX - leafSize, centerY + trunkHeight - leafSize);
	ctx.lineTo(centerX, centerY + trunkHeight - leafDistance);
	ctx.lineTo(centerX + leafSize, centerY + trunkHeight - leafSize);
	ctx.lineTo(centerX + leafDistance, centerY + trunkHeight);
	ctx.fillStyle = "#228B22"; // Color verde para las hojas
	ctx.fill();

	// Cantidad y características de los pétalos
	const petalCount = 60;
	const petalLength = 230;
	const petalWidth = 200; // Ancho constante de los pétalos
	const petalGap = (755.9 / petalCount) * 6;

	function drawPetal(i) {
		const angle = (i * petalGap * Math.PI) / 378.7;

		const x = centerX + petalLength * Math.cos(angle);
		const y = centerY - petalLength * Math.sin(angle);
		console.log(`Pétalo ${i + 1} - x: ${x}, y: ${y}`);

		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.quadraticCurveTo(x, y - petalWidth / 2, x, y);
		ctx.quadraticCurveTo(x, y + petalWidth / 2, centerX, centerY);
		ctx.fillStyle = "#FFD700";
		ctx.fill();

		// Agregar líneas para dar textura a la membrana
		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.quadraticCurveTo(x, y - petalWidth / 2, x, y);
		ctx.quadraticCurveTo(x, y + petalWidth / 2, centerX, centerY);
		ctx.strokeStyle = "#DAA520"; // Color para las líneas de textura
		ctx.lineWidth = 2;
		ctx.stroke();

		if (i < petalCount - 1) {
			setTimeout(function() {
				drawPetal(i + 1);
			}, 500);
		}
	}

	drawPetal(0);

	setTimeout(function() {
		// Dibujar círculos concéntricos en el centro
		for (let i = 0; i < 6; i++) {
			ctx.beginPath();
			ctx.arc(centerX, centerY, 36 + i * 10, 0, 2 * Math.PI);
			ctx.fillStyle = "#996515";
			ctx.fill();
		}

		// Agregar sombra al centro
		ctx.shadowBlur = 20;
		ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

		// Dibujar líneas para dar textura al centro
		for (let i = 0; i < 12; i++) {
			const angle = (i * Math.PI) / 6;
			const x1 = centerX + 50 * Math.cos(angle);
			const y1 = centerY + 50 * Math.sin(angle);
			const x2 = centerX + 80 * Math.cos(angle);
			const y2 = centerY + 80 * Math.sin(angle);

			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.strokeStyle = "#996515";
			ctx.lineWidth = 2;
			ctx.stroke();
		}

		ctx.shadowBlur = 0; // Restablecer la sombra
	}, petalCount * 800);
});
