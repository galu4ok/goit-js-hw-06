// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output. Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  const textInput = event.currentTarget.value.trim();
  outputRef.textContent = textInput ? textInput : 'Anonymous';
});

//  ----------------With if------------------------------------------
// inputRef.addEventListener('input', event => {
//   const textInput = event.currentTarget.value.trim();

//   if (textInput === '') {
//     outputRef.textContent = 'Anonymous';
//     return;
//   }
//   outputRef.textContent = textInput;
// });
