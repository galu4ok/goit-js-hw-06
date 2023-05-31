// Напиши скрипт, який реагує на зміну значення
// input#font - size - control (подія input) і змінює інлайн - стиль span#text,
//  оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
  inputRef: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};
function onFontSizeChange(event) {
  refs.spanText.style.fontSize = `${event.currentTarget.value}px`;
}
refs.inputRef.addEventListener('input', onFontSizeChange);
