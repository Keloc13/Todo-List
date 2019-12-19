let formatTodo = document.createElement('template');
formatTodo.innerHTML = `
<style>
    .outer-container {
        width: 100%;
        height: 40px;
        border: 1px solid gray;
        background-color: white;
        padding-top: 20px;
        padding-left: 40px;
        background-color: rgba(255,255,255,0.85);
    }

    h3 {
        position: relative;
        bottom: 35px;
        left: 40px;
        font-weight: normal;
    }

    .description {
        position: relative;
        bottom: 80px;
        left: 40px;
    }

    .date {
        position: relative;
        bottom: 72px;
        left: 100px;
    }
    
</style>
<div class="outer-container">
    <h3 class="title">title</h3>
    <p class="date">12/18/19</p>
    <p class="description">Description Here</p>
</div>
`

class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.append(formatTodo.content.cloneNode(true));

        this._title = "";
        this._description = "";
        this._date = "";
    }

    set title(newTitle) {
        this._title = newTitle;
        this.shadow.querySelector('h3.title').innerHTML = this._title;
    }

    set date(newDate) {
        this._date = newdate;
        this.shadow.querySelector('p.date').innerHTML = this._date;
    }

    set description(newDescription) {
        this._description = newDescription;
        this.shadow.querySelector('p.description').innerHTML = this._description;
    }

    connectedCallback() {}

}

window.customElements.define('todo-item', TodoItem);