// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color
//  і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyRef = document.body;
const colorDescrRef = document.querySelector('.color');
const btnColorChangeRef = document.querySelector('.change-color');

btnColorChangeRef.addEventListener('click', onBtnColorChange);

function onBtnColorChange() {
  colorDescrRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = `${colorDescrRef.textContent}`;
}
