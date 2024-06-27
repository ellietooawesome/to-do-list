ocument.getElementById("todo").addEventListener('submit', function(event) {
  event.preventDefault();

const todoinput = document.getElementById("todoinput");
const todo = todoinput.value.trim();
if (todo !=='') {
  addtodo(todo);
  todoinput.value = '';
}
});

function addtodo(todotext) {
  const li = document.createElement('li');
  li.textContent = todotext;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function() {
    li.remove();
});
  li.appendChild(removeButton);
  document.getElementById("todolist").appendChild(li);
}


/*
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public'))); 
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'index.html')); }); 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
*/
