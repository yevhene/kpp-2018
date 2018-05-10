let socket;

document
  .querySelector('#new_message')
  .addEventListener('submit', function(e) {
    const form = e.target;
    const data = new FormData(form);
    const message = { text: data.get('text') };

    socket.send(JSON.stringify(message));
    form.reset();

    e.preventDefault();
    e.stopPropagation();
  });

function renderMessage(message) {
  const li = document.createElement('li');
  li.innerText = `${message.username}: ${message.text}`;

  document
    .querySelector('#messages')
    .appendChild(li);
}

document
  .querySelector('#login')
  .addEventListener('submit', function(e) {
    const form = e.target;
    const data = new FormData(form);
    const user = {
      username: data.get('username'),
      password: data.get('password')
    };

    fetch('/session', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        response.json().then(handleLogin);
        form.reset();
      } else {
        alert('Error: Wrong username or password');
      }
    })

    e.preventDefault();
    e.stopPropagation();
  });

function handleLogin({ token }) {
  document.querySelector('#login').style.display = 'none';
  document.querySelector('#new_message').style.display = 'block';
  connect(token);
  loadMessages(token);
}

function connect(token) {
  socket = new WebSocket(`ws://localhost:3001?token=${token}`);

  socket.addEventListener('message', function(event) {
    renderMessage(JSON.parse(event.data));
  });
}

function loadMessages(token) {
  fetch('/messages', {
    headers: {
      'Authorization': token
    }
  })
    .then((response) => response.json())
    .then((messages) => {
      document.querySelector('#messages').innerHtml = '';
      messages.forEach(renderMessage);
    });
}
