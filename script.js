const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('#login-btn');
const exitBtn = document.querySelector('#exit-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Validate username and password
    if (username === 'Khalil' && password === 'Mazari') {
        // Admin login
        window.location.href = 'dashboard.html';
    } else if (username === 'Aqeel' && password === 'Khalil') {
        // Normal user login
        window.location.href = 'dashboard1.html';
    } else {
        alert('Wrong username or password');
    }
});
exitBtn.addEventListener('click', () => {
    window.close();
});