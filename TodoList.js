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
        right: 40px;
        bottom: 16px;
        height: 620px;
        width: 1000px;
    }

    #todo_header {
        width: 100%;
        height: 40px;

        position: relative;
        top: 16px;
        left: 40px;
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
        right: 40px;
        top: 0px;
    }

    #addTodo button{
        background: transparent;
        padding: 18px 15px;
        border: 1px solid gray;
    }

    #addTodo button:hover {
        cursor: pointer;
        opacity: .7;
    }

    .hideItem {
        invisibility: hidden;
    }

    #insertBox {
        position: absolute;
        left: 50%;
        top: 30%;
    }
</style>
<div id="outer-listItem-container">
    <div id="todo_header">ToDo List 
        <span id="addTodo">
            <button onclick="checkBox()">Add Todo</button>
        </span>
    </div>

    <div id="insertBox">
        <insert-box></insert-box>
    </div>

    <ul>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li><todo-item></todo-item></li>
        <li class="hideItem"><todo-item></todo-item></li>
        <li class="hideItem"><todo-item></todo-item></li>
    </ul>
</div>
`


class TodoList extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.append(templateTodoList.content.cloneNode(true));
        this._isBoxOpen = false;
    }

    checkBox() {
        let box = this.shadow.querySelector('#insertBox insert-box')
        if(this._isBoxOpen) {
            box.display = 'block';
        }
    }
    

    connectedCallback() {}
}

window.customElements.define('todo-list', TodoList);