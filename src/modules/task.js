class Task {
    constructor(name, number, dueDate='', complete=false) {
        this.name = name;
        this.dueDate = dueDate;
        this.number = number;
        this.complete = complete;
    }
}
export default Task;