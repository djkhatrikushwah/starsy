const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const flowers = [];

function drawFlower(x, y, size) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`;
    ctx.fill();
    ctx.closePath();
}

function createFlower() {
    const flower = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 5,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2
    };
    flowers.push(flower);
}

function animateFlowers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach(flower => {
        flower.x += flower.speedX;
        flower.y += flower.speedY;

        if (flower.x < 0 || flower.x > canvas.width || flower.y < 0 || flower.y > canvas.height) {
            flower.x = Math.random() * canvas.width;
            flower.y = Math.random() * canvas.height;
        }

        drawFlower(flower.x, flower.y, flower.size);
    });
    requestAnimationFrame(animateFlowers);
}

setInterval(createFlower, 500);
animateFlowers();
