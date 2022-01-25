const submit = document.getElementById('submit')
const root = document.getElementById('root')
let i = 1;
submit.addEventListener('click', () => {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  createUser(username, password)
})


const syncStorage = (key, data) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, data);
  renderUsers();
}

const listUser = (user) => {
  return `
  <tr>
    <td>${user.id}</td>
    <td>${user.username}</td>
    <td>${user.isActive = true ? 'Aktif' : 'Tidak Aktif'}</td>
    <td><a href="#">Hapus</a></td>
  </tr>
  `
}

const createUser = (user, secret) => {
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  users.push({
    id: i,
    username: user,
    password: secret,
    isActive: true
  })

  const output = JSON.stringify(users);
  syncStorage('users', output);
  i++
}

const renderUsers = () => {
  root.innerHTML = '';
  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
  users.forEach(user => {
    root.innerHTML += listUser(user)
  });
}

const main = () => {
  renderUsers()
}

window.addEventListener('load', () => main());
