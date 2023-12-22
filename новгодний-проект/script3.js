document.addEventListener('DOMContentLoaded', function () {
    const garland = document.getElementById('garland');

    // Создаем 10 лампочек герлянды
    for (let i = 0; i < 10; i++) {
      const bulb = document.createElement('div');
      bulb.className = 'bulb';
      garland.appendChild(bulb);
    }
  });