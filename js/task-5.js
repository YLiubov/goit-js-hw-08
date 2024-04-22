const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  const colorSpan = document.querySelector('.color');
  colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColorButton.style.color = '#FFF';
changeColorButton.style.fontFamily = 'Montserrat';
changeColorButton.style.fontSize = '16px';
changeColorButton.style.fontStyle = 'normal';
changeColorButton.style.fontWeight = '500';
changeColorButton.style.lineHeight = '24px';
changeColorButton.style.letterSpacing = '0.64px';