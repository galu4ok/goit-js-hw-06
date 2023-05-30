// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
