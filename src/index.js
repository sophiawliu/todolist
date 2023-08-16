import addLines from './modules/lines.js';
import defaultList from './modules/create-default-list.js';
import {displayList, displaySidebarLists, addList} from './modules/list-display.js';
import Storage from './modules/storage.js';

addLines();

var listOfLists;
if (localStorage.getItem('myLists') === null) {
    listOfLists = [defaultList];
    Storage.saveMyLists(listOfLists);
    displayList(defaultList, listOfLists);
} else {
    listOfLists = Storage.getMyLists();
    displayList(listOfLists[0], listOfLists);
}

displaySidebarLists(listOfLists);
addList(listOfLists);