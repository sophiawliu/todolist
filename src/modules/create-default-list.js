import List from './list.js';
import Task from './task.js';

const defaultTask = new Task('My task 1', 1);
const defaultList = new List('My List 1', 'This is my first list!', [defaultTask], 1);

export default defaultList;