class List {
    constructor(name, id, description='Edit description.', tasks=[], numIncomplete=0, selected=false, numTasksAdded=0) {
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.numIncomplete = numIncomplete;
        this.selected = selected;
        this.id = id;
        this.numTasksAdded = numTasksAdded;
    }
    addTask(task) {
        this.tasks.push(task);
        this.numIncomplete += 1;
        this.numTasksAdded += 1;
    }
    updateDesc(newDesc) {
        this.description = newDesc;
    }
    updateName(newName) {
        this.name = newName;
    }
    uncheck() { // uncheck a task OR add new task
        this.numIncomplete += 1;
    }
    check() { // check a task
        this.numIncomplete -= 1;
    }
}
export default List;