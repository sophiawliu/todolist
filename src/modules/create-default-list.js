import List from './list.js';
import Task from './task.js';

const defaultTask = new Task('My task 1', 0);
const defaultList = new List('My List 1', 0, 'This is my first list!', [defaultTask], 1, true, 1);

export default defaultList;