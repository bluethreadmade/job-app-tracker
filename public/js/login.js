const loginForm = document.querySelector('#login-form');
const signUpForm = document.querySelector('#signup-form');

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#loginInput').value.trim();
    const password = document.querySelector('#loginPasswordInput').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ login, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#signUpEmailInput').value.trim();

    const password = document
        .querySelector('#signUpPasswordInput')
        .value.trim();

    if (email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};

if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
}

if (signUpForm) {
    signUpForm.addEventListener('submit', signupFormHandler);
}
