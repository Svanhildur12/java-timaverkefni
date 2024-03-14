let number = 0

const numberTag = document.getElementById('number');
const boomMessage = document.querySelector('.boomMessage');

boomMessage.textContent = '';

const onIncrementClick = () => {
  number += 5;
  numberTag.textContent = number;
  if (number >= 35) {
   boomMessage.textContent = 'BOOM!';
  }else {
    boomMessage.textContent = '';
  }
  console.log(number);
};

const onDecrementClick = () => {
  number -= 5;
  numberTag.textContent = number;
  if(number <= -35) {
    boomMessage.textContent = 'BOOM!';
  }else {
    boomMessage.textContent = '';
  }
  console.log(number);
};

