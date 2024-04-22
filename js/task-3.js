const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');
inputElem.addEventListener("input", onInputFill);
function onInputFill() {
    const inputValue = inputElem.value.trim();
    if (inputValue === "") {
        spanElem.textContent = 'Anonymous';
    } else {
        spanElem.textContent = inputValue;
    }
};