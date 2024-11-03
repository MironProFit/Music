const items = document.querySelectorAll('.slider-teacher'); // Выбираем все карточки
const prevBtn = document.getElementById('prevBtn'); // Кнопка "Назад"
const nextBtn = document.getElementById('nextBtn'); // Кнопка "Вперед"

// Счетчик для отслеживания текущей позиции слайдера
let currentIndex = 0;

// Функция для сброса всех карточек и установки активного состояния
function resetActiveClasses() {
    items.forEach(item => {
        item.classList.remove('active'); // Убираем класс 'active' у всех карточек
    });
}

// Функция для обновления активности карточек
function updateActiveCard() {
    resetActiveClasses(); // Сбрасываем активные классы
    items[currentIndex].classList.add('active'); // Добавляем класс 'active' для текущей карточки
}

// Обработчик события для кнопки "Назад"
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { // Проверяем, не находимся ли мы на первой карточке
        currentIndex--; // Уменьшаем индекс
    } else {
        currentIndex = items.length - 1; // Если на первой карточке, переходим к последней
    }
    updateActiveCard(); // Обновляем активную карточку
});

// Обработчик события для кнопки "Вперед"
nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) { // Проверяем, не находимся ли мы на последней карточке
        currentIndex++; // Увеличиваем индекс
    } else {
        currentIndex = 0; // Если на последней карточке, переходим к первой
    }
    updateActiveCard(); // Обновляем активную карточку
});

// Обработчик клика на карточку
items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index; // Устанавливаем индекс на выбранную карточку
        updateActiveCard(); // Обновляем активную карточку
    });
});

// Инициализация: установка активной карточки при загрузке страницы
updateActiveCard();



var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
}

