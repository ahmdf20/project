const buttonSubmit = document.getElementById('submit-activity');
let index = 1;
buttonSubmit.addEventListener("click", function () {
  let input = document.getElementById('activity').value
  createTodo(input)
})

const syncStorage = (key, payload) => {
  localStorage.removeItem(key);
  localStorage.setItem(key, payload)
  renderCounting();
  renderTodo();
}

const createTodo = (text) => {
  const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  todos.push({
    id: index,
    title: text,
    isCompleted: false
  })

  const output = JSON.stringify(todos);

  syncStorage('todos', output);
  index++;
}

const listTodo = (todo) => {
  return `
  <tr>
    <td>${todo.id}</td>
    <td>${todo.title}</td>
    <td><a href="#" aria-key="${todo.id}" class="delete-activity btn btn-sm btn-danger">Hapus</td>
  </tr>
  `
  // return `<li aria-key="${todo.id}" class="${todo.isCompleted ? '--green' : '--red'}">${todo.title}<a href="#" aria-key="${todo.id}" class="delete-todo">Hapus</a></li>`;
}


const renderCounting = () => {
  const count = document.getElementById("count-activity");

  count.innerHTML = "";

  const counting = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).length : []

  if (!counting) {
    count.innerHTML = "Your task count : 0";
  } else {
    count.innerHTML = "Your task count : " + counting
  }

}

const renderTodo = () => {
  const wrapper = document.getElementById("list-activity");

  wrapper.innerHTML = "";

  const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

  todos.forEach(todo => {
    wrapper.innerHTML += listTodo(todo);
  })

  deleteTodoInit();
}

const deleteTodoInit = () => {
  const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

  document.querySelectorAll('.delete-activity').forEach((element) => {
    let id = element.getAttribute('aria-key');

    element.addEventListener('click', () => {
      let output = JSON.stringify(todos.filter(todo => todo.id != id));
      console.log(id);
      syncStorage('todos', output);
    });
  });
}

const main = () => {
  renderCounting()
  renderTodo()
};

window.addEventListener('load', () => main());