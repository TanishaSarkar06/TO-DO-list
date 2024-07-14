document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task === '') return;

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTask);

        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.contentEditable = true;
        taskText.addEventListener('blur', editTask);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }

    function toggleTask(e) {
        const listItem = e.target.parentNode;
        listItem.classList.toggle('completed');
    }

    function editTask(e) {
        const taskText = e.target;
        if (taskText.textContent === '') {
            taskText.textContent = 'Unnamed task';
        }
    }

    function deleteTask(e) {
        const listItem = e.target.parentNode;
        taskList.removeChild(listItem);
    }
});
