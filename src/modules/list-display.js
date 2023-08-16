import Task from './task.js';
import List from './list.js';
import Storage from './storage.js';
import defaultList from './create-default-list.js';

var numListsTracker = 1;
var selectedList = defaultList;

function addList(lOL) {
    const sidebar = document.querySelector('#sidebar');
    const lOLDiv = document.querySelector('#list-of-lists');
    const addListButton = document.createElement('button');
    addListButton.setAttribute('type', 'button');
    addListButton.setAttribute('id', 'add-list-button');
    addListButton.innerText = '＋ Add list';
    addListButton.addEventListener('click', function (e) {
        addListButton.hidden = true;
        const listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');
    
        const listNameField = document.createElement('input');
        listNameField.setAttribute('id', 'listNameField');
        listNameField.setAttribute('type', 'text');
        listNameField.addEventListener('keypress', function(e) {

            if (e.key === 'Enter') {
                numListsTracker += 1;
                // lOL.forEach(l => {
                //     l.selected = false;
                // });
                const newList = new List(e.target.value, numListsTracker);
                selectedList = newList;
                lOL.push(newList);

                addListButton.hidden = false;
                displaySidebarLists(lOL);

                const listSpace = document.querySelector('#list-space');
                listSpace.innerHTML = '';
                displayList(newList, lOL);

                Storage.addList(newList);
            }
        })
        listCard.appendChild(listNameField);
        lOLDiv.appendChild(listCard);

        document.getElementById('listNameField').focus();
    })
    sidebar.appendChild(addListButton);
}


function displayTask(task, lst, listOfLists) {
    const listSpace = document.querySelector('#list-space');
    const taskCard = document.createElement('div');
    taskCard.setAttribute('class', 'task-card');
    const deleteTaskButton = document.createElement('img');
    deleteTaskButton.setAttribute('src', '../dist/images/xbutton.svg');
    deleteTaskButton.setAttribute('id', 'delete-task-button'); // css
    deleteTaskButton.addEventListener('click', function (e) {
        lst.tasks.splice(lst.tasks.indexOf(task), 1);
        if (!task.complete) {
            lst.numIncomplete -= 1;
        }
        listSpace.innerHTML = '';
        displayList(lst, listOfLists);
        displaySidebarLists(listOfLists);

        Storage.deleteTask(task, lst);
    })

    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', 'taskContainer');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('name', 'cssCheckbox');
    checkbox.setAttribute('id', task.id);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'css-checkbox');
    if (task.complete) {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', function (e) {
        if (e.target.checked) {
            lst.numIncomplete -= 1;
            displaySidebarLists(listOfLists);
            task.complete = true;
        } else {
            lst.numIncomplete += 1;
            displaySidebarLists(listOfLists);
            task.complete = false;
        }
        Storage.checkOrUncheckTask(task, lst);
    })

    const label = document.createElement('label');
    label.setAttribute('for', task.id);
    label.innerText = task.name;

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(label);
    // add checked object update logic

    // add date and way to edit date later

    taskCard.appendChild(taskContainer);
    taskCard.appendChild(deleteTaskButton);

    return taskCard;
}


function displayList(lst, listOfLists) {
    selectedList = lst;
    const listSpace = document.querySelector('#list-space');
    const listNameDiv = document.createElement('div');
    listNameDiv.setAttribute('id', 'list-name-div');
    listSpace.appendChild(listNameDiv);

    const listName = document.createElement('p');
    listName.setAttribute('class', 'list-name');
    listName.innerText = lst.name;
    const pencil = document.createElement('img');
    pencil.setAttribute('src', '../dist/images/pencil.svg');
    pencil.setAttribute('id', 'list-name-pencil'); // css

    pencil.addEventListener('click', function (e) {
        const listNameFieldRight = document.createElement('input');
        listNameFieldRight.setAttribute('id', 'listNameFieldRight'); // css
        listNameFieldRight.setAttribute('type', 'text');
        listNameFieldRight.value = lst.name;
        listNameFieldRight.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                lst.name = e.target.value;
                listSpace.innerHTML = '';
                displayList(lst, listOfLists);
                displaySidebarLists(listOfLists);

                Storage.editListName(lst, e.target.value);
            }
        })
        listNameDiv.innerHTML = '';
        listNameDiv.appendChild(listNameFieldRight);
        document.getElementById('listNameFieldRight').focus();
    })
    listNameDiv.appendChild(listName);


    const listDescDiv = document.createElement('div');
    listDescDiv.setAttribute('id', 'list-desc-div');
    const listDesc = document.createElement('p');
    listDesc.setAttribute('class', 'list-desc');
    listDesc.innerText = lst.description;

    const descPencil = document.createElement('img');
    descPencil.setAttribute('src', '../dist/images/pencil.svg');
    descPencil.setAttribute('id', 'list-desc-pencil');
    listDescDiv.appendChild(descPencil);

    descPencil.addEventListener('click', function (e) {
        const descField = document.createElement('input');
        descField.setAttribute('id', 'descField');
        descField.setAttribute('type', 'text');
        if (lst.description !== "Edit description.") {
            // edit existing text
            descField.value = lst.description;
            
        }
        descField.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                lst.description = e.target.value;
                listSpace.innerHTML = '';
                displayList(lst, listOfLists);

                Storage.editListDescription(lst, e.target.value);
            }
        })
        listDescDiv.innerHTML = '';
        listDescDiv.appendChild(descField);
        document.getElementById('descField').focus();
    })
    listDescDiv.appendChild(listDesc);
    listDescDiv.appendChild(descPencil);

    const list = document.createElement('div');
    list.setAttribute('class', 'list');
    lst.tasks.forEach(task => {
        var taskCard = displayTask(task, lst, listOfLists);
        list.appendChild(taskCard);
    });

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('class', 'add-task-button');
    addTaskButton.innerText = '＋ Add task';

    addTaskButton.addEventListener('click', function (e) {

        if (lst.tasks.length == 13) {
            addTaskButton.disabled = true;
            addTaskButton.hidden = true;
            return;
        }
        addTaskButton.hidden = true;
        const list = document.querySelector('.list');
        const taskCard = document.createElement('div');
        taskCard.setAttribute('class', 'task-card');
    
        const taskContainer = document.createElement('div');
        taskContainer.setAttribute('id', 'taskContainer');
    
        const checkbox = document.createElement('input');
        checkbox.setAttribute('name', 'cssCheckbox');
        checkbox.setAttribute('id', lst.numTasks);
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'css-checkbox');
    
        const label = document.createElement('label');
        // label.setAttribute('for', 'demo_opt_1');
        label.innerText = '';
    
        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(label);
        // add checked object update logic
    
        const nameField = document.createElement('input');
        nameField.setAttribute('id', 'nameField');
        nameField.setAttribute('type', 'text');
        nameField.addEventListener('keypress', function(e) {

            if (e.key === 'Enter') {
                const taskID = lst.numTasksAdded;
                const newTask = new Task(e.target.value, taskID);
                // lst.addTask(newTask); // also +1 to numImcomplete
                lst.tasks.push(newTask);
                lst.numIncomplete += 1;
                lst.numTasksAdded += 1;
                list.removeChild(taskCard);
                list.appendChild(displayTask(newTask, lst, listOfLists));
                addTaskButton.hidden = false;
                displaySidebarLists(listOfLists);

                Storage.addNewTask(newTask, lst);
            }
        })
    
        taskContainer.append(nameField);
        taskCard.appendChild(taskContainer);
        list.appendChild(taskCard);
        document.getElementById('nameField').focus();
    });

    const deleteListLine = document.createElement('div');
    deleteListLine.setAttribute('id', 'deleteListLine');
    const deleteListButton = document.createElement('button');
    deleteListButton.setAttribute('class', 'delete-list-button');
    deleteListButton.innerText = 'Delete list';
    deleteListButton.addEventListener('click', function (e) {
        deleteListButton.disabled = true;
        const areYouSure = document.createElement('p');
        areYouSure.innerText = 'Are you sure?';
        deleteListLine.appendChild(areYouSure);
        const yes = document.createElement('p');
        yes.setAttribute('id', 'yesOrNo');
        yes.innerText = 'YES';
        yes.addEventListener('click', function (e) {
            listOfLists.splice(listOfLists.indexOf(lst), 1);
            listSpace.innerHTML = '';
            displayList(listOfLists[listOfLists.length-1], listOfLists);
            // listOfLists.forEach(l => {
            //     l.selected = false;
            // });
            selectedList = listOfLists[listOfLists.length-1];
            displaySidebarLists(listOfLists);

            Storage.deleteList(lst);
        })
        const no = document.createElement('p');
        no.setAttribute('id', 'yesOrNo');
        no.innerText = 'NO';
        no.addEventListener('click', function (e) {
            deleteListLine.removeChild(deleteListLine.lastChild);
            deleteListLine.removeChild(deleteListLine.lastChild);
            deleteListLine.removeChild(deleteListLine.lastChild);
            deleteListButton.disabled = false;
        })
        deleteListLine.appendChild(yes);
        deleteListLine.appendChild(no);
    })
    deleteListLine.appendChild(deleteListButton);

    listNameDiv.appendChild(listName);
    listNameDiv.appendChild(pencil);
    listSpace.appendChild(listDescDiv);
    listSpace.appendChild(list);
    listSpace.appendChild(addTaskButton);
    listSpace.appendChild(deleteListLine);

    return list;
}


function displaySidebarLists(listOfLists) {
    const lOL = document.querySelector('#list-of-lists'); // lOL = listOfLists
    lOL.innerHTML = '';
    listOfLists.forEach(list => {
        // console.log(list.id, list.selected)
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');
        var listCardText = document.createElement('p');
        listCardText.setAttribute('class', 'sidebarListName');
        listCardText.innerText = list.name;

        var numTasks = document.createElement('p');
        numTasks.setAttribute('class', 'num-tasks');
        numTasks.innerText = list.numIncomplete;

        if (list.id == selectedList.id) {
            listCardText.style = "font-weight: 600";
            numTasks.style = "font-weight: 600";
        }
        listCard.appendChild(listCardText);
        listCard.appendChild(numTasks);

        listCard.addEventListener('click', function (e) {
            const listSpace = document.querySelector('#list-space');
            listSpace.innerHTML = '';
            lOL.childNodes.forEach(child => {
                child.children[0].style = "font-weight: 400";
                child.children[1].style = "font-weight: 400";
            });
            displayList(list, listOfLists);
            listCardText.style = "font-weight: 600";
            numTasks.style = "font-weight: 600";
            // list.selected = true;
        })

        lOL.appendChild(listCard);
    });
}

export {displayList, displaySidebarLists, addList};
