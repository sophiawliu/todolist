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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_lines_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/lines.js */ \"./src/modules/lines.js\");\n/* harmony import */ var _modules_create_default_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/create-default-list.js */ \"./src/modules/create-default-list.js\");\n/* harmony import */ var _modules_list_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list-display.js */ \"./src/modules/list-display.js\");\n\n\n\n\n(0,_modules_lines_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nvar myLists = [_modules_create_default_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n(0,_modules_list_display_js__WEBPACK_IMPORTED_MODULE_2__.displaySidebarLists)(myLists);\nvar selectedList = (0,_modules_list_display_js__WEBPACK_IMPORTED_MODULE_2__.displayList)(_modules_create_default_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], myLists);\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/create-default-list.js":
/*!********************************************!*\
  !*** ./src/modules/create-default-list.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/modules/list.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\nconst defaultTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('My task 1', 1);\nconst defaultList = new _list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('My List 1', 'This is my first list!', [defaultTask]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultList);\n\n//# sourceURL=webpack://todolist/./src/modules/create-default-list.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayList: () => (/* binding */ displayList),\n/* harmony export */   displaySidebarLists: () => (/* binding */ displaySidebarLists)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/modules/list.js\");\n\n\n\nfunction displayTask(task) {\n    const taskCard = document.createElement('div');\n    taskCard.setAttribute('class', 'task-card');\n\n    const taskContainer = document.createElement('div');\n    taskContainer.setAttribute('id', 'taskContainer');\n\n    const checkbox = document.createElement('input');\n    checkbox.setAttribute('name', 'cssCheckbox');\n    checkbox.setAttribute('id', task.number);\n    checkbox.setAttribute('type', 'checkbox');\n    checkbox.setAttribute('class', 'css-checkbox');\n\n    const label = document.createElement('label');\n    label.setAttribute('for', task.number);\n    label.innerText = task.name;\n\n    taskContainer.appendChild(checkbox);\n    taskContainer.appendChild(label);\n    // add checked object update logic\n\n    // add date and way to edit date later\n\n    taskCard.appendChild(taskContainer);\n    taskCard.addEventListener('hover', function(e) {\n\n    })\n\n    return taskCard;\n}\n\nfunction displayList(lst, listOfLists) {\n    const listSpace = document.querySelector('#list-space');\n    const listNameDiv = document.querySelector('#list-name-div');\n\n    const listName = document.createElement('h2');\n    listName.innerText = lst.name;\n    listName.setAttribute('class', 'list-name');\n\n    const listDesc = document.createElement('p');\n    listDesc.setAttribute('class', 'list-desc');\n    listDesc.innerText = lst.description;\n\n    const list = document.createElement('div');\n    list.setAttribute('class', 'list');\n    lst.tasks.forEach(task => {\n        var taskCard = displayTask(task);\n        list.appendChild(taskCard);\n    });\n\n    const addTaskButton = document.createElement('button');\n    addTaskButton.setAttribute('class', 'add-task-button');\n    addTaskButton.innerText = '＋ Add task';\n    addTaskButton.addEventListener('click', function (e) {\n\n        addTaskButton.hidden = true;\n        const list = document.querySelector('.list');\n        const taskCard = document.createElement('div');\n        taskCard.setAttribute('class', 'task-card');\n    \n        const taskContainer = document.createElement('div');\n        taskContainer.setAttribute('id', 'taskContainer');\n    \n        const checkbox = document.createElement('input');\n        checkbox.setAttribute('name', 'cssCheckbox');\n        checkbox.setAttribute('id', lst.numTasks);\n        checkbox.setAttribute('type', 'checkbox');\n        checkbox.setAttribute('class', 'css-checkbox');\n    \n        const label = document.createElement('label');\n        // label.setAttribute('for', 'demo_opt_1');\n        label.innerText = '';\n    \n        taskContainer.appendChild(checkbox);\n        taskContainer.appendChild(label);\n        // add checked object update logic\n    \n        const nameField = document.createElement('input');\n        nameField.setAttribute('id', 'nameField');\n        nameField.setAttribute('type', 'text');\n        nameField.addEventListener('keypress', function(e) {\n\n            if (e.key === 'Enter') {\n                const taskID = `${lst.tasks.length + 1}`;\n                const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](e.target.value, taskID);\n                lst.addTask(e.value);\n                list.removeChild(taskCard);\n                list.append(displayTask(task));\n                addTaskButton.hidden = false;\n                displaySidebarLists(listOfLists);\n            }\n        })\n    \n        taskContainer.append(nameField);\n        taskCard.appendChild(taskContainer);\n        list.appendChild(taskCard);\n        document.getElementById('nameField').focus();\n    });\n\n    const deleteListLine = document.createElement('div');\n    deleteListLine.setAttribute('id', 'deleteListLine');\n    const deleteListButton = document.createElement('button');\n    deleteListButton.setAttribute('class', 'delete-list-button');\n    deleteListButton.innerText = 'Delete list';\n    deleteListButton.addEventListener('click', function (e) {\n        deleteListButton.disabled = true;\n        const areYouSure = document.createElement('p');\n        areYouSure.innerText = 'Are you sure?';\n        deleteListLine.appendChild(areYouSure);\n        const yes = document.createElement('p');\n        yes.setAttribute('id', 'yesOrNo');\n        yes.innerText = 'YES';\n        yes.addEventListener('click', function (e) {\n            listOfLists.splice(listOfLists.indexOf(lst), 1);\n            displaySidebarLists(listOfLists);\n            listSpace.innerHTML = '';\n        })\n        const no = document.createElement('p');\n        no.setAttribute('id', 'yesOrNo');\n        no.innerText = 'NO';\n        no.addEventListener('click', function (e) {\n            deleteListLine.removeChild(deleteListLine.lastChild);\n            deleteListLine.removeChild(deleteListLine.lastChild);\n            deleteListLine.removeChild(deleteListLine.lastChild);\n            deleteListButton.disabled = false;\n        })\n        deleteListLine.appendChild(yes);\n        deleteListLine.appendChild(no);\n    })\n    deleteListLine.appendChild(deleteListButton);\n\n    listNameDiv.appendChild(listName);\n    listSpace.appendChild(listDesc);\n    listSpace.appendChild(list);\n    listSpace.appendChild(addTaskButton);\n    listSpace.appendChild(deleteListLine);\n\n    return list;\n}\n\nfunction displaySidebarLists(listOfLists) {\n    const lOL = document.querySelector('#list-of-lists'); // lOL = listOfLists\n    if (listOfLists.length == 0) {\n        lOL.removeChild(lOL.lastChild);\n        lOL.style = 'height: 0';\n    }\n    listOfLists.forEach(list => {\n        lOL.removeChild(lOL.lastChild);\n        var listCard = document.createElement('li');\n        listCard.setAttribute('class', 'list-card');\n        listCard.innerText = list.name;\n        var numTasks = document.createElement('p');\n        numTasks.setAttribute('class', 'num-tasks');\n        numTasks.innerText = list.tasks.length;\n        listCard.appendChild(numTasks);\n        lOL.appendChild(listCard);\n    });\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/list-display.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass List {\n    constructor(name, description='', tasks=[]) {\n        this.name = name;\n        this.description = description;\n        this.tasks = tasks;\n    }\n    addTask(task) {\n        this.tasks.push(task);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://todolist/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    constructor(name, number, dueDate='', complete=false) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.number = number;\n        this.complete = complete;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todolist/./src/modules/task.js?");

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