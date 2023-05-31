// Обробка відправлення форми form.login-form повинна відбуватися
// відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//  що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості. Для доступу до елементів форми використовуй
// властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  const formData = { userEmail, userPassword };

  if (userEmail === '' || userPassword === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(formData);
  form.reset();
}
//  ------------------------------------------------
// const formElements = event.currentTarget.elements;
// const email = formElements.email.value.trim();
// const password = formElements.password.value.trim();
// const formData = { email, password };
// if (email === '' || password === '') {
//   return alert('Please fill in all the fields!');
//  console.log(formData);
//  event.currentTarget.reset();
// }
