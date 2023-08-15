class List {
    constructor(name, description='', tasks=[]) {
        this.name = name;
        this.description = description;
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
}
export default List;