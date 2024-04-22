const inputElement = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const numberOfBoxes = inputElement.value;
  if (numberOfBoxes < 1 || numberOfBoxes > 100) {
    alert("Number of elements must be from 1 to 100");
    return;
  }
  destroyBoxes();
  const boxesArray = createBoxesArray(numberOfBoxes);
  boxesDiv.append(...boxesArray);
  inputElement.value = '';
}

function createBoxesArray(numberOfBoxes) {
  const boxesArray = [];
  let size = 30;
  for (let i = 0; i < numberOfBoxes; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;

    box.style.display = 'flex';
    box.style.alignItems = 'flex-start';
    box.style.gap = '16px';
    box.style.borderRadius = '8px';

    boxesArray.push(box);
  }
  return boxesArray;
}
function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}