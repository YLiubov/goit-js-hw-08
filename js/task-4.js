const logForm = document.querySelector(".login-form");
logForm.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = logForm.elements.email;
    const passwordInput = logForm.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();


    if (emailValue === "" || passwordValue === "") {
        alert("All form fields must be filled in!");
    }
    else {
        const logFormData = {
            email: emailValue,
            password: passwordValue,
        };
        console.log(logFormData);
    }
    logForm.reset();
});

logForm.style.display = 'inline-flex';
logForm.style.padding = '24px';
logForm.style.flexDirection = 'column';
logForm.style.alignItems = 'flex-start';
logForm.style.borderRadius = '8px';
logForm.style.background = '#fff';

const labels = logForm.querySelectorAll('label');
labels.forEach(label => {
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.alignItems = 'flex-start';
    label.style.gap = '8px';
    label.style.color = '#2e2f42';
    label.style.fontFamily = 'Montserrat';
    label.style.fontSize = '16px';
    label.style.fontStyle = 'normal';
    label.style.fontWeight = '400';
    label.style.letterSpacing = '0.04em';
});

const inputs = logForm.querySelectorAll('input');
inputs.forEach(input => {
    input.style.display = 'flex';
    input.style.width = '360px';
    input.style.height = '40px';
    input.style.justifyContent = 'center';
    input.style.alignItems = 'center';
    input.style.borderRadius = '4px';
    input.style.border = '1px solid #808080';
    input.style.marginBottom = '8px';
});

const button = logForm.querySelector('button');
button.style.display = 'flex';
button.style.padding = '8px 16px';
button.style.justifyContent = 'center';
button.style.alignItems = 'center';
button.style.gap = '10px';
button.style.borderRadius = '8px';
button.style.background = '#4e75ff';
button.style.color = '#fff';
button.style.fontFamily = 'Montserrat';
button.style.fontSize = '16px';
button.style.fontStyle = 'normal';
button.style.fontWeight = '500';
button.style.letterSpacing = '0.04em';
button.style.boxShadow = 'none';
button.style.marginTop = '8px';