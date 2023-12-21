document.addEventListener("DOMContentLoaded", function () {
    // Получаем ссылку на элемент canvas и его контекст
    var canvas = document.getElementById("rainCanvas");
    var ctx = canvas.getContext("2d");

    // Устанавливаем размеры canvas в размеры окна браузера
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Создаем массив для хранения капель
    var drops = [];

    // Функция для создания капли
    function createDrop() {
        return {
            x: Math.random() * canvas.width,  // случайная позиция по горизонтали
            y: Math.random() * canvas.height, // случайная позиция по вертикали
            length: Math.random() * 30 + 5,   // случайная длина
            speed: Math.random() * 10 + 50     // случайная скорость
        };
    }

    // Заполняем массив каплями
    for (var i = 0; i < 100; i++) {
        drops.push(createDrop());
    }

    // Функция для анимации
    function animate() {
        // Очищаем canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Рисуем каждую каплю и двигаем её вниз
        for (var i = 0; i < drops.length; i++) {
            var drop = drops[i];

            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"; // цвет капли (синий)
            ctx.stroke();

            drop.y += drop.speed;

            // Если капля достигает нижней границы canvas, создаем новую каплю сверху
            if (drop.y > canvas.height) {
                drops[i] = createDrop();
            }
        }

        // Запускаем анимацию на следующем кадре
        requestAnimationFrame(animate);
    }

    // Запускаем анимацию
    animate();
});
