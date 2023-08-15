import Task from './task.js';
import List from './list.js';

function displayTask(task) {
    const taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'task-card');

    // <div id="inputPreview">
        // 	<input name="cssCheckbox" id="demo_opt_1" type="checkbox" class="css-checkbox">
        // 	<label for="demo_opt_1">Option 1</label>
        // 	<input name="cssCheckbox" id="demo_opt_2" type="checkbox" class="css-checkbox" checked="">
        // 	<label for="demo_opt_2">Option 2</label>
        // 	<input name="cssCheckbox" id="demo_opt_3" type="checkbox" class="css-checkbox">
        // 	<label for="demo_opt_3">Option 3</label>
	// </div>
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', 'taskContainer');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('name', 'cssCheckbox');
    checkbox.setAttribute('id', 'demo_opt_1');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'css-checkbox');

    const label = document.createElement('label');
    label.setAttribute('for', 'demo_opt_1');
    label.innerText = task.name;

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(label);
    // add checked object update logic

    // add date and way to edit date later

    taskCard.appendChild(taskContainer);
    taskCard.addEventListener('hover', function(e) {

    })

    return taskCard;
}

function displayList(lst, listOfLists) {
    const listSpace = document.querySelector('#list-space');
    const listNameDiv = document.querySelector('#list-name-div');

    const listName = document.createElement('h2');
    listName.innerText = lst.name;
    listName.setAttribute('class', 'list-name');

    const listDesc = document.createElement('p');
    listDesc.setAttribute('class', 'list-desc');
    listDesc.innerText = lst.description;

    const list = document.createElement('div');
    list.setAttribute('class', 'list');
    lst.tasks.forEach(task => {
        var taskCard = displayTask(task);
        list.appendChild(taskCard);
    });

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('class', 'add-task-button');
    addTaskButton.innerText = '+ add task';
    addTaskButton.addEventListener('click', function (e) {

        addTaskButton.hidden = true;
        const list = document.querySelector('.list');
        const taskCard = document.createElement('div');
        taskCard.setAttribute('class', 'task-card');
    
        const taskContainer = document.createElement('div');
        taskContainer.setAttribute('id', 'taskContainer');
    
        const checkbox = document.createElement('input');
        checkbox.setAttribute('name', 'cssCheckbox');
        checkbox.setAttribute('id', 'demo_opt_1');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'css-checkbox');
    
        const label = document.createElement('label');
        label.setAttribute('for', 'demo_opt_1');
        label.innerText = '';
    
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(label);
        // add checked object update logic
    
        const nameField = document.createElement('input');
        nameField.setAttribute('id', 'nameField');
        nameField.setAttribute('type', 'text');
        nameField.addEventListener('keypress', function(e) {

            if (e.key === 'Enter') {
                const task = new Task(e.target.value)
                lst.addTask(e.value);
                list.removeChild(taskCard);
                list.append(displayTask(task));
                addTaskButton.hidden = false;
                displaySidebarLists(listOfLists);
            }
        })
    
        taskContainer.append(nameField);
        taskCard.appendChild(taskContainer);
        list.appendChild(taskCard);
    });

    const deleteListButton = document.createElement('button');
    deleteListButton.setAttribute('class', 'delete-list-button');
    deleteListButton.innerText = 'delete list';

    listNameDiv.appendChild(listName);
    listSpace.appendChild(listDesc);
    listSpace.appendChild(list);
    listSpace.appendChild(addTaskButton);
    listSpace.appendChild(deleteListButton);

    return list;
}

function displaySidebarLists(listOfLists) {
    const lOL = document.querySelector('#list-of-lists'); // lOL = listOfLists
    listOfLists.forEach(list => {
        lOL.removeChild(lOL.lastChild);
        var listCard = document.createElement('li');
        listCard.setAttribute('class', 'list-card');
        listCard.innerText = list.name;
        var numTasks = document.createElement('p');
        numTasks.setAttribute('class', 'num-tasks');
        console.log(list)
        numTasks.innerText = list.tasks.length;
        listCard.appendChild(numTasks);
        lOL.appendChild(listCard);
    });
}

export {displayList, displaySidebarLists};