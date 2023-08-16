import List from './list.js';
import Task from './task.js';

export default class Storage {
    
    static saveMyLists(lOL) {
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }
    static getMyLists() {
        return JSON.parse(localStorage.getItem('myLists'));
    }
    static addList(list) {
        const lOL = Storage.getMyLists();
        lOL.push(list);
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }
    static deleteList(list) {
        const lOL = Storage.getMyLists();
        const lst = lOL.find(l => {
            return l.id === list.id;
        });
        lOL.splice(lOL.indexOf(lst), 1);
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }
    static editListName(list, newName) {
        const lOL = Storage.getMyLists();
        const lst = lOL.find(l => {
            return l.id === list.id;
        });
        lst.name = newName;
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }
    static editListDescription(list, newDesc) {
        const lOL = Storage.getMyLists();
        const lst = lOL.find(l => {
            return l.id === list.id;
        });
        lst.description = newDesc;
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }
    
    static addNewTask(task, list) {
        const lOL = Storage.getMyLists();
        const lst = lOL.find(l => {
            return l.id === list.id;
        });
        lst.tasks.push(task);
        lst.numIncomplete += 1;
        lst.numTasksAdded += 1;
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }
    static deleteTask(task, list) {
        const lOL = Storage.getMyLists();
        const lst = lOL.find(l => {
            return l.id === list.id;
        });
        const tsk = lst.tasks.find(t => {
            return t.id === task.id;
        })
        lst.tasks.splice(lst.tasks.indexOf(tsk), 1);
        if (!task.complete) {
            lst.numIncomplete +=1; // +1 from numTasks in sidebar
        }
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }
    static checkOrUncheckTask(task, list) {
        // also update list check() and uncheck() ?
        const lOL = Storage.getMyLists();
        const lst = lOL.find(l => {
            return l.id === list.id;
        });
        const tsk = lst.tasks.find(t => {
            return t.id === task.id;
        })
        tsk.complete = task.complete; // make complete statuses match
        if (!task.complete) {
            lst.numIncomplete += 1;
        } else {
            lst.numIncomplete -= 1;
        }
        localStorage.setItem('myLists', JSON.stringify(lOL));
    }

    // pretty sure the objects are different
    // locally stored vs. in browser


    // update selected list (show on page load)

}