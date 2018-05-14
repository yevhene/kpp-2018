function loadTasks() {
  fetch('/tasks')
    .then((response) => response.json())
    .then(renderTasks)
}

function renderTasks(tasks) {
  let html = '';

  for (let i = 0, len = tasks.length; i < len; i++) {
    const task = tasks[i];
    html += `<li>${task.name} <a href="/tasks/${i}">X</a></li>`;
  }

  document.querySelector('#tasks').innerHTML = html;
}

function handleCreate() {
  document
    .querySelector('#new_task')
    .addEventListener('submit', onCreate);
}

function onCreate(e) {
  const name = e.target.querySelector('input[name=name]').value;
  const task = { name };

  createTask(task)
    .then(loadTasks);

  e.preventDefault();
  e.stopPropagation();
}

function createTask(task) {
  return fetch('/tasks', {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function init() {
  loadTasks();
  handleCreate();
}

init();
