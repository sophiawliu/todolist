class Task {
    constructor(name, id, dueDate='', complete=false) {
        this.name = name;
        this.dueDate = dueDate;
        this.id = id;
        this.complete = complete;
    }
    changeComplete(bool) {
        this.complete = bool;
    }
}
export default Task;