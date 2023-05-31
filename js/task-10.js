// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити,колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// 1.Розміри найпершого <div> - 30px на 30px.
// 2.Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  divBox: document.querySelector('#boxes'),
};

let amount = 0;
const arrayBoxes = [];

refs.createBtn.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick() {
  amount = refs.input.value;
  createBoxes(amount);
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    const boxSize = 30 + 10 * arrayBoxes.length;
    newBox.style.cssText = `width:${boxSize}px;height:${boxSize}px;background-color:${getRandomHexColor()};`;
    arrayBoxes.push(newBox);
  }
  refs.divBox.append(...arrayBoxes);
}

refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onDestroyBtnClick() {
  refs.divBox.innerHTML = '';
  refs.input.value = '';
  arrayBoxes.length = 0;
}
