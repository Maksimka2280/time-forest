function sendLetter() {
    // Вызываем анимацию Деда Мороза
    animateSanta();
    
    // Дополнительный код для отправки письма (можете добавить свою логику)
  }
  
  function animateSanta() {
    const santa = document.getElementById('santa');
    santa.style.backgroundImage = 'url("сани-рож-ества-santa-claus-62638819.jpg")'; // Замените на свой путь к изображению Деда Мороза
  
    // Настройки анимации
    const animationDuration = 5000; // 5 секунд
    const startPosition = -100; // Начальная позиция Деда Мороза (выше экрана)
  
    // Начальные стили
    santa.style.position = 'fixed';
    santa.style.left = '0';
    santa.style.top = `${startPosition}px`;
    santa.style.width = '100px'; // Замените на соответствующую ширину Деда Мороза
  
    // Запускаем анимацию
    santa.style.transition = `top ${animationDuration}ms linear`;
    santa.style.top = `${window.innerHeight}px`;
  
    // По завершению анимации убираем Деда Мороза
    setTimeout(() => {
      santa.style.transition = 'none';
      santa.style.top = `${startPosition}px`;
    }, animationDuration);
  }
  