class Task {
    constructor(name, number, dueDate='', complete=false) {
        this.name = name;
        this.dueDate = dueDate;
        this.number = number;
        this.complete = complete;
    }
    changeComplete(bool) {
        this.complete = bool;
    }
}
export default Task;