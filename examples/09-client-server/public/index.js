function loadTasks() {
  fetch('/tasks')
    .then((response) => response.json())
    .then(renderTasks)
}

function renderTasks(tasks) {
  let html = '';

  for (let i = 0, len = tasks.length; i < len; i++) {
    const task = tasks[i];
    html += `<li>${task.name} <a data-index="${i}" href="#">Delete</a></li>`;
  }

  document.querySelector('#tasks').innerHTML = html;
}

function createTask(task) {
  return fetch('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
}

function handleCreate() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    const name = form.querySelector('[name=name]').value;
    const task = { name };

    createTask(task)
      .then(loadTasks);

    e.preventDefault();
    e.stopPropagation();
  });
}

function destroyTask(index) {
  return fetch(`/tasks/${index}`, {
    method: 'DELETE'
  })
}

function handleDestroy() {
  document
    .querySelector('#tasks')
    .addEventListener('click', function(e) {
      const index = parseInt(e.target.getAttribute('data-index'))
      destroyTask(index)
        .then(loadTasks);

      e.preventDefault();
      e.stopPropagation();
    });
}

function init() {
  loadTasks();
  handleCreate();
  handleDestroy();
}

init();
