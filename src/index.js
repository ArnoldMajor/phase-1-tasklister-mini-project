document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const inputField = document.getElementById('new-task-description');
    const todoList = document.getElementById('tasks');
    const taskItem = document.createElement('li');
    const deleteBtn = document.createElement('button');

    todoList.appendChild(taskItem);
    taskItem.textContent = `${inputField.value} `;
    taskItem.appendChild(deleteBtn);
    deleteBtn.textContent = 'X';

    deleteBtn.addEventListener('click', () => {
      taskItem.remove();
    })
  });
});