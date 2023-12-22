document.addEventListener('DOMContentLoaded', function () {
  const snowContainer = document.getElementById('snow');

  // Создаем 500 снежинок
  for (let i = 0; i < 500; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}vw`; // Рандомное распределение по ширине

  }
});
