const inputFirstRef = document.querySelector('.input-first');
const inputTwoRef = document.querySelector('.input-two');
const inputThreeRef = document.querySelector('.input-three');
const inputFourRef = document.querySelector('.input-four');
const resultRef = document.querySelector('.result');
const btntRef = document.querySelector('.btn');

function multOfWord(e) {
  const firstEquation =
    inputFirstRef.value.repeat(inputTwoRef.value) + inputThreeRef.value;

  const result = firstEquation.repeat(inputFourRef.value);

  // Первое поле
  if (inputFirstRef.value.match('[p{Alpha}p{M}p{Nd}p{Pc}p{Join_C}]')) {
    inputFirstRef.style.borderColor = 'green';
  } else if (inputFirstRef.value === '') {
    inputFirstRef.style.borderColor = 'red';
    alert('Напишите фразу из букв и цифр!');
  }

  // Второе поле
  if (inputTwoRef.value.match('[0-9]+')) {
    inputTwoRef.style.borderColor = 'green';
  } else {
    e.preventDefault();
    alert('Введите цифру(к-во повторений)!');
    inputTwoRef.style.borderColor = 'red';
  }

  // Третье поле
  if (inputThreeRef.value.match('[p{Alpha}p{M}p{Nd}p{Pc}p{Join_C}]')) {
    inputThreeRef.style.borderColor = 'green';
  } else if (inputThreeRef.value === '') {
    inputThreeRef.style.borderColor = 'red';
    alert('Напишите фразу из букв и цифр!');
  }

  // Четвертое поле
  if (inputFourRef.value.match('[0-9]+')) {
    inputFourRef.style.borderColor = 'green';
  } else {
    e.preventDefault();
    alert('Введите цифру(к-во повторений)!');
    inputFourRef.style.borderColor = 'red';
  }

  return (resultRef.innerHTML = result);
}

btntRef.addEventListener('click', multOfWord);
