// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
// У завданні 6 бордер повинен набувати зеленого кольору, коли кількість введених символів дорівнює
// значенням атрибуту(ЦЕ ЧИСЛО) data - length(а не більше або менше).

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputBlur);

function onInputFocus() {
  inputRef.classList.remove('valid', 'invalid');
}

function onInputBlur(event) {
  const inputText = event.currentTarget.value.trim();
  inputText.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');

  inputRef.addEventListener('focus', onInputFocus);
}
