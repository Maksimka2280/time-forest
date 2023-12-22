
document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('snowCanvas');
  const ctx = canvas.getContext('2d');

  // Установите размеры canvas в размеры окна браузера
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Создайте массив снежинок
  const flakes = [];
  const numFlakes = 200;

  for (let i = 0; i < numFlakes; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1, // радиус снежинки
      speed: Math.random() * 3 + 1, // скорость падения снежинки
    });
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';

    for (const flake of flakes) {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();

      // Перемещение снежинки вниз
      flake.y += flake.speed;

      // Если снежинка достигла нижней границы, поместите ее вверху с новыми случайными координатами
      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      }
    }

    // Рисуем светящуюся луну
    drawMoon();

    requestAnimationFrame(drawFlakes);
  }

  function drawMoon() {
    const moonRadius = 130; // увеличенный размер луны
    const moonX = 150; // измененное положение X (левый край)
    const moonY = 150;

    ctx.beginPath();
    ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  drawFlakes();
});