let templateTodoList = document.createElement('template');
templateTodoList.innerHTML = `
<style>
    ul {
        list-style-type: none;
        overflow: scroll;
        overflow-x: hidden;
        height: 100%;
    }

    #outer-listItem-container {
        position: relative;
        bottom: 16px;
        height: 560px;
        width: 100%;
    }

    #todo_header {

        height: 40px;
        position: relative;
        top: 16px;
        padding-top: 10px;

        border: 1px solid gray;
        background-color: white;
        
        
        opacity: .8;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    #addTodo {
        font-weight: normal;
        font-size: 16px;

        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    #addTodo button{
        background: transparent;
        position: relative;
        top: 2px;
        right: 0px;
        border: none;
        border-left: 1px groove gray;
    }

    #addTodo button:hover {
        cursor: pointer;
        opacity: .7;
    }

    .hideItem {
        invisibility: hidden;
    }

    li {
        position: relative;
        right: 40px;
    }

    #insertBox {
        position: absolute;
        z-index:2;  
        left: 35%;
        top: 30%;

        width: 40px;
        height: 40px;
    }
</style>
<div id="outer-listItem-container">
    <div id="todo_header">ToDo List 
        <span id="addTodo">
            <button><img src="Icons/add_circle.svg" height="50px" width="50px"></button>
        </span>
    </div>

    <div id="insertBox">
        <insert-box></insert-box>
    </div>

    <ul id="list-of-items">
    </ul>
</div>
`

class TodoList extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.append(templateTodoList.content.cloneNode(true));
    }
    
    createTodoItem(title, description, currentObject) {
        console.log("Calling create Todo Item");

        let newItem = new TodoItem(title, description);
        console.log(currentObject.shadow.innerHTML);
        let listOfItems = currentObject.shadow.getElementById('list-of-items');
        listOfItems.appendChild(newItem);

    } // callback function that is passed into insertBox

    checkBox(box) {
        let insertBox = this.shadow.querySelector('insert-box');
        if(!insertBox.isOpen) {
            insertBox.isOpen = true;
        } else {
            insertBox.isOpen = false;
        }
        insertBox.dataFunc = this.createTodoItem;
        insertBox.parentObject = this;
    }


    connectedCallback() {
        console.log("ConnectedCallback todoList");
        let box = this.shadow.querySelector('#addTodo button');
        box.addEventListener('click', function() {
            this.getRootNode().host.checkBox(box);
        });
    }
}

window.customElements.define('todo-list', TodoList);