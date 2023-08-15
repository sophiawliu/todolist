import addLines from './modules/lines.js';
import defaultList from './modules/create-default-list.js';
import {displayList, displaySidebarLists, addList} from './modules/list-display.js';

addLines();

var myLists = [defaultList];
displaySidebarLists(myLists);
var selectedList = displayList(defaultList, myLists);

addList(myLists);