/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_lines_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/lines.js */ \"./src/modules/lines.js\");\n/* harmony import */ var _modules_create_default_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-default-list.js */ \"./src/modules/create-default-list.js\");\n/* harmony import */ var _modules_list_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list-display.js */ \"./src/modules/list-display.js\");\n\n\n\n\n(0,_modules_lines_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nvar myLists = [_modules_create_default_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n(0,_modules_list_display_js__WEBPACK_IMPORTED_MODULE_2__.displaySidebarLists)(myLists);\nvar selectedList = (0,_modules_list_display_js__WEBPACK_IMPORTED_MODULE_2__.displayList)(_modules_create_default_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], myLists);\n\n(0,_modules_list_display_js__WEBPACK_IMPORTED_MODULE_2__.addList)(myLists);\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/create-default-list.js":
/*!********************************************!*\
  !*** ./src/modules/create-default-list.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/modules/list.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\nconst defaultTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('My task 1', 1);\nconst defaultList = new _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('My List 1', 'This is my first list!', [defaultTask], 1);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultList);\n\n//# sourceURL=webpack://todolist/./src/modules/create-default-list.js?");

/***/ }),

/***/ "./src/modules/lines.js":
/*!******************************!*\
  !*** ./src/modules/lines.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addLines() {\n    // first line\n    const lines = document.querySelector('#lines');\n    const firstLine = document.createElement('div');\n    firstLine.setAttribute('id', 'first-line');\n    lines.appendChild(firstLine);\n    for (let i = 0; i < 15; i++) {\n        var line = document.createElement('div');\n        line.setAttribute('class', 'line');\n        lines.appendChild(line);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLines);\n\n//# sourceURL=webpack://todolist/./src/modules/lines.js?");

/***/ }),

/***/ "./src/modules/list-display.js":
/*!*************************************!*\
  !*** ./src/modules/list-display.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addList: () => (/* binding */ addList),\n/* harmony export */   displayList: () => (/* binding */ displayList),\n/* harmony export */   displaySidebarLists: () => (/* binding */ displaySidebarLists)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/modules/list.js\");\n\n\n\nfunction addList(lOL) {\n    const sidebar = document.querySelector('#sidebar');\n    const lOLDiv = document.querySelector('#list-of-lists');\n    const addListButton = document.createElement('button');\n    addListButton.setAttribute('type', 'button');\n    addListButton.setAttribute('id', 'add-list-button');\n    addListButton.innerText = '＋ Add list';\n    addListButton.addEventListener('click', function (e) {\n        addListButton.hidden = true;\n        const listCard = document.createElement('div');\n        listCard.setAttribute('class', 'list-card');\n    \n        const listNameField = document.createElement('input');\n        listNameField.setAttribute('id', 'listNameField');\n        listNameField.setAttribute('type', 'text');\n        listNameField.addEventListener('keypress', function(e) {\n\n            if (e.key === 'Enter') {\n                const newList = new _list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e.target.value);\n                lOL.push(newList);\n\n                addListButton.hidden = false;\n                displaySidebarLists(lOL);\n\n                const listSpace = document.querySelector('#list-space');\n                listSpace.innerHTML = '';\n                displayList(newList, lOL);\n            }\n        })\n        listCard.appendChild(listNameField);\n        lOLDiv.appendChild(listCard);\n\n        document.getElementById('listNameField').focus();\n    })\n    sidebar.appendChild(addListButton);\n}\n\n\n\nfunction displayTask(task, lst, listOfLists) {\n    const taskCard = document.createElement('div');\n    taskCard.setAttribute('class', 'task-card');\n\n    const taskContainer = document.createElement('div');\n    taskContainer.setAttribute('id', 'taskContainer');\n\n    const checkbox = document.createElement('input');\n    checkbox.setAttribute('name', 'cssCheckbox');\n    checkbox.setAttribute('id', task.number);\n    checkbox.setAttribute('type', 'checkbox');\n    checkbox.setAttribute('class', 'css-checkbox');\n    if (task.complete) {\n        checkbox.checked = true;\n    }\n\n    checkbox.addEventListener('change', function (e) {\n        if (e.target.checked) {\n            lst.check();\n            displaySidebarLists(listOfLists);\n            task.changeComplete(true);\n        } else {\n            lst.uncheck();\n            displaySidebarLists(listOfLists);\n            task.changeComplete(false);\n        }\n    })\n\n    const label = document.createElement('label');\n    label.setAttribute('for', task.number);\n    label.innerText = task.name;\n\n    taskContainer.appendChild(checkbox);\n    taskContainer.appendChild(label);\n    // add checked object update logic\n\n    // add date and way to edit date later\n\n    taskCard.appendChild(taskContainer);\n    taskCard.addEventListener('hover', function(e) {\n\n    })\n\n    return taskCard;\n}\n\n\n\nfunction displayList(lst, listOfLists) {\n    const listSpace = document.querySelector('#list-space');\n    const listNameDiv = document.createElement('div');\n    listNameDiv.setAttribute('id', 'list-name-div');\n    listSpace.appendChild(listNameDiv);\n\n\n    const listName = document.createElement('p');\n    listName.setAttribute('class', 'list-name');\n    listName.innerText = lst.name;\n    listName.addEventListener('mouseover', function (e) {\n        const pencil = document.createElement('img');\n        pencil.setAttribute('src', '../dist/images/pencil.svg');\n        pencil.setAttribute('id', 'list-name-pencil'); // css\n        listNameDiv.appendChild(pencil);\n    })\n    listName.addEventListener('mouseout', function (e) {\n        listNameDiv.removeChild(listNameDiv.lastChild);\n    })\n    listName.addEventListener('click', function (e) {\n        const listNameFieldRight = document.createElement('input');\n        listNameFieldRight.setAttribute('id', 'listNameFieldRight'); // css\n        listNameFieldRight.setAttribute('type', 'text');\n        listNameFieldRight.value = lst.name;\n        listNameFieldRight.addEventListener('keypress', function (e) {\n            if (e.key === 'Enter') {\n                lst.updateName(e.target.value);\n                listSpace.innerHTML = '';\n                displayList(lst);\n                displaySidebarLists(listOfLists);\n            }\n        })\n        listNameDiv.innerHTML = '';\n        listNameDiv.appendChild(listNameFieldRight);\n        document.getElementById('listNameFieldRight').focus();\n    })\n    listNameDiv.appendChild(listName);\n\n\n    const listDescDiv = document.createElement('div');\n    listDescDiv.setAttribute('id', 'list-desc-div');\n    const listDesc = document.createElement('p');\n    listDesc.setAttribute('class', 'list-desc');\n    listDesc.innerText = lst.description;\n    listDesc.addEventListener('mouseover', function (e) {\n        const pencil = document.createElement('img');\n        pencil.setAttribute('src', '../dist/images/pencil.svg');\n        pencil.setAttribute('id', 'list-desc-pencil');\n        listDescDiv.appendChild(pencil);\n    })\n    listDesc.addEventListener('mouseout', function (e) {\n        listDescDiv.removeChild(listDescDiv.lastChild);\n    })\n    listDesc.addEventListener('click', function (e) {\n        const descField = document.createElement('input');\n        descField.setAttribute('id', 'descField');\n        descField.setAttribute('type', 'text');\n        if (lst.description !== \"Edit description.\") {\n            // edit existing text\n            descField.value = lst.description;\n            \n        }\n        descField.addEventListener('keypress', function (e) {\n            if (e.key === 'Enter') {\n                lst.updateDesc(e.target.value);\n                listSpace.innerHTML = '';\n                displayList(lst);\n            }\n        })\n        listDescDiv.innerHTML = '';\n        listDescDiv.appendChild(descField);\n        document.getElementById('descField').focus();\n    })\n    listDescDiv.appendChild(listDesc);\n\n    const list = document.createElement('div');\n    list.setAttribute('class', 'list');\n    lst.tasks.forEach(task => {\n        var taskCard = displayTask(task, lst, listOfLists);\n        list.appendChild(taskCard);\n    });\n\n    const addTaskButton = document.createElement('button');\n    addTaskButton.setAttribute('class', 'add-task-button');\n    addTaskButton.innerText = '＋ Add task';\n    addTaskButton.addEventListener('click', function (e) {\n\n        addTaskButton.hidden = true;\n        const list = document.querySelector('.list');\n        const taskCard = document.createElement('div');\n        taskCard.setAttribute('class', 'task-card');\n    \n        const taskContainer = document.createElement('div');\n        taskContainer.setAttribute('id', 'taskContainer');\n    \n        const checkbox = document.createElement('input');\n        checkbox.setAttribute('name', 'cssCheckbox');\n        checkbox.setAttribute('id', lst.numTasks);\n        checkbox.setAttribute('type', 'checkbox');\n        checkbox.setAttribute('class', 'css-checkbox');\n    \n        const label = document.createElement('label');\n        // label.setAttribute('for', 'demo_opt_1');\n        label.innerText = '';\n    \n        taskContainer.appendChild(checkbox);\n        taskContainer.appendChild(label);\n        // add checked object update logic\n    \n        const nameField = document.createElement('input');\n        nameField.setAttribute('id', 'nameField');\n        nameField.setAttribute('type', 'text');\n        nameField.addEventListener('keypress', function(e) {\n\n            if (e.key === 'Enter') {\n                const taskID = `${lst.tasks.length + 1}`;\n                const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](e.target.value, taskID);\n                lst.addTask(newTask); // also +1 to numImcomplete\n                list.removeChild(taskCard);\n                list.appendChild(displayTask(newTask, lst, listOfLists));\n                addTaskButton.hidden = false;\n                displaySidebarLists(listOfLists);\n            }\n        })\n    \n        taskContainer.append(nameField);\n        taskCard.appendChild(taskContainer);\n        list.appendChild(taskCard);\n        document.getElementById('nameField').focus();\n    });\n\n    const deleteListLine = document.createElement('div');\n    deleteListLine.setAttribute('id', 'deleteListLine');\n    const deleteListButton = document.createElement('button');\n    deleteListButton.setAttribute('class', 'delete-list-button');\n    deleteListButton.innerText = 'Delete list';\n    deleteListButton.addEventListener('click', function (e) {\n        deleteListButton.disabled = true;\n        const areYouSure = document.createElement('p');\n        areYouSure.innerText = 'Are you sure?';\n        deleteListLine.appendChild(areYouSure);\n        const yes = document.createElement('p');\n        yes.setAttribute('id', 'yesOrNo');\n        yes.innerText = 'YES';\n        yes.addEventListener('click', function (e) {\n            listOfLists.splice(listOfLists.indexOf(lst), 1);\n            displaySidebarLists(listOfLists);\n            listSpace.innerHTML = '';\n        })\n        const no = document.createElement('p');\n        no.setAttribute('id', 'yesOrNo');\n        no.innerText = 'NO';\n        no.addEventListener('click', function (e) {\n            deleteListLine.removeChild(deleteListLine.lastChild);\n            deleteListLine.removeChild(deleteListLine.lastChild);\n            deleteListLine.removeChild(deleteListLine.lastChild);\n            deleteListButton.disabled = false;\n        })\n        deleteListLine.appendChild(yes);\n        deleteListLine.appendChild(no);\n    })\n    deleteListLine.appendChild(deleteListButton);\n\n    listNameDiv.appendChild(listName);\n    listSpace.appendChild(listDescDiv);\n    listSpace.appendChild(list);\n    listSpace.appendChild(addTaskButton);\n    listSpace.appendChild(deleteListLine);\n\n    return list;\n}\n\n\n\nfunction displaySidebarLists(listOfLists) {\n    const lOL = document.querySelector('#list-of-lists'); // lOL = listOfLists\n    lOL.innerHTML = '';\n    listOfLists.forEach(list => {\n        var listCard = document.createElement('li');\n        listCard.setAttribute('class', 'list-card');\n        listCard.innerText = list.name;\n    \n        listCard.addEventListener('click', function (e) {\n            const listSpace = document.querySelector('#list-space');\n            listSpace.innerHTML = '';\n            displayList(list, listOfLists);\n        })\n\n        var numTasks = document.createElement('p');\n        numTasks.setAttribute('class', 'num-tasks');\n        numTasks.innerText = list.numIncomplete;\n        listCard.appendChild(numTasks);\n        lOL.appendChild(listCard);\n    });\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/list-display.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass List {\n    constructor(name, description='Edit description.', tasks=[], numIncomplete=0) {\n        this.name = name;\n        this.description = description;\n        this.tasks = tasks;\n        this.numIncomplete = numIncomplete;\n    }\n    addTask(task) {\n        this.tasks.push(task);\n        this.numIncomplete += 1;\n    }\n    updateDesc(newDesc) {\n        this.description = newDesc;\n    }\n    updateName(newName) {\n        this.name = newName;\n    }\n    uncheck() { // uncheck a task OR add new task\n        this.numIncomplete += 1;\n    }\n    check() { // check a task\n        this.numIncomplete -= 1;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://todolist/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    constructor(name, number, dueDate='', complete=false) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.number = number;\n        this.complete = complete;\n    }\n    changeComplete(bool) {\n        this.complete = bool;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todolist/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;