import "./style.css";
import jsPDF from "jspdf";

window.addEventListener("load", function() {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = 600;
	canvas.height = 600;
	console.log(ctx);
	ctx.lineWidth = 40;
	ctx.lineCap = "round";
	ctx.fillStyle = "blue";
	ctx.strokeStyle = "green";
	ctx.shadowColor = "black";
	ctx.shadowOffsetY = 10;
	ctx.shadowOffsetX = 5;
	ctx.shadowBlur = 10;
	const canvas2 = document.getElementById("canvas2");
	const ctx2 = canvas2.getContext("2d");
	canvas2.width = window.innerWidth;
	canvas2.height = window.innerHeight;

	class Fractal {
		constructor(canvasWidth, canvasHeight) {
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.size = this.canvasWidth * 0.25;
			this.side = 6;
			this.scale = 0.5;
			this.spread = Math.random() * 2.8 + 0.1;
			this.branches = 2;
			this.color = "hsl( " + Math.random() * 360 + ", 100 %, 50 % )";
			this.maxLevel = 4;
		}

		draw(context, zoom) {
			context.strokeStyle = this.color;
			context.save();
			context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
			context.scale(zoom, zoom); // Aplicar el zoom aquí
			context.rotate(0);
			for (let i = 0; i < this.side; i++) {
				this.drawLine(context, 0);
				context.rotate((Math.PI * 2) / this.side);
			}
			context.restore();
		}

		drawLine(context, level) {
			if (level > this.maxLevel) return;
			context.beginPath();
			context.moveTo(0, 0);
			context.lineTo(this.size, 0);
			context.stroke();
			context.save();
			for (let i = 0; i < this.branches; i++) {
				context.translate(this.size - (this.size / this.branches) * i, 0);
				context.scale(this.scale, this.scale);
				context.save();
				context.rotate(this.spread);
				this.drawLine(context, level + 1);
				context.restore();
				context.save();
				context.rotate(-this.spread);
				this.drawLine(context, level + 1);
				context.restore();
			}
			context.restore();
		}
	}

	const fractal = new Fractal(canvas.width, canvas.height);

	let zoom = 1;
	// Evento de rueda del mouse para manejar el zoom
	canvas.addEventListener("wheel", function(event) {
		event.preventDefault();
		if (event.deltaY < 0) {
			// Zoom in
			zoom *= 1.1;
		} else {
			// Zoom out
			zoom /= 1.1;
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		fractal.draw(ctx, zoom);
	});

	const randomizeButton = document.getElementById("randomizeButton");
	const exportPDFButton = document.getElementById("exportPDFButton");
	const exportImageButton = document.getElementById("exportImageButton");
	const applyColorButton = document.getElementById("applyColorButton");

	// Función para exportar el fractal como PDF
	exportPDFButton.addEventListener("click", function() {
		const pdf = new jsPDF();
		const imageData = canvas.toDataURL("image/png");

		// Ajusta el tamaño de la imagen en el PDF ajustando la escala
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = pdf.internal.pageSize.getHeight();
		const scaleFactor = Math.min(
			pdfWidth / canvas.width,
			pdfHeight / canvas.height
		);

		pdf.addImage(
			imageData,
			"PNG",
			0,
			0,
			canvas.width * scaleFactor,
			canvas.height * scaleFactor
		);
		pdf.save("fractal.pdf");
	});

	// Función para exportar el fractal como imagen
	exportImageButton.addEventListener("click", function() {
		const imageLink = document.createElement("a");
		imageLink.href = canvas.toDataURL("image/png");
		imageLink.download = "fractal.png";
		imageLink.click();
	});
	// Cambia el color del fractal según la selección del color
	applyColorButton.addEventListener("click", function() {
		fractal.color = colorPicker.value;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		fractal.draw(ctx, zoom);
	});
	randomizeButton.addEventListener("click", function() {
		fractal.spread = Math.random() * 2.8 + 0.1;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		fractal.draw(ctx, zoom);
	});

	class Particle {
		constructor(canvasWidth, canvasHeight, image) {
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.image = image;
			this.x = Math.random() * this.canvasWidth;
			this.y = Math.random() * this.canvasHeight;
			this.sizeModifier = Math.random() * 0.5 + 0.1;
			//this.speed = Math.random() * 3 + 1;
			this.width = this.image.width * this.sizeModifier;
			this.height = this.image.height * this.sizeModifier;
			this.speed = Math.random() * 1 + 0.2;
		}
		update() {
			this.x += this.speed;
			if (this.x > this.canvasWidth + this.width) this.x = -this.width;
			this.y += this.speed;
			if (this.y > this.canvasHeight + this.height) this.y = -this.height;
		}
		draw(context) {
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		}
	}
	class Rain {
		constructor(canvasWidth, canvasHeight, image) {
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.image = image;
			this.numberOfParticles = 20;
			this.particles = [];
			this.#initialize();
		}
		#initialize() {
			for (let i = 0; i < this.numberOfParticles; i++) {
				this.particles.push(
					new Particle(this.canvasWidth, this.canvasHeight, this.image)
				);
			}
		}
		run(context) {
			this.particles.forEach((particle) => {
				particle.draw(context);
				particle.update();
			});
		}
	}
	fractal.draw(ctx, zoom);
	const fractalImage = new Image();
	fractalImage.src = canvas.toDataURL();

	fractalImage.onload = function() {
		const rainEffect = new Rain(canvas2.width, canvas2.height, fractalImage);
		function animate() {
			ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
			rainEffect.run(ctx2);
			requestAnimationFrame(animate);
		}
		animate();
	};
});
