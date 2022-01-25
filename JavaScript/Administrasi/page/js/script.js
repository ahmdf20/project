const formRegistration = document.getElementById('form-registration');
let i = 1;
formRegistration.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let repeatPassword = document.getElementById('repeat-password').value;

  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  if (email === users.email) {
    document.getElementById('error-email').innerText = 'This email already in use!';
  } else {
    document.getElementById('error-email').innerText = '';
  }

  if (repeatPassword != password) {
    document.getElementById('error-repeat-password').innerText = 'Password didnt match!';
  } else {
    document.getElementById('error-repeat-password').innerText = '';
    createUsers(name, email, password);
  }

})

const syncStorage = (key, data) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, data);
  formRegistration.submit();
}

const createUsers = (name, email, secret) => {
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  users.push({
    id: i,
    name: name,
    email: email,
    password: secret,
    isActive: true
  })

  const output = JSON.stringify(users);
  syncStorage('users', output)
  i++
}