let insertBoxHTML = document.createElement('template');
insertBoxHTML.innerHTML = `
<style>
    #box {
        display: none;
        height: 125px;
        width: 300px;
        background-color: white;
        border: 1px groove black;
        border-radius: 4px;
        z-index: 2;
    }

    form {
        display: flex;
        justify: center;
        flex-wrap: wrap;
        width: 300px;
    }

    ul {
        list-style-type: none;
    }

    form li {
        margin-top: 10px;
        width: 100px;
    }

    #nameDescription {
        width: 100px;
    }

    #inputVals {
        width: 100px;
        position: relative;
        right: 30px;
    }

    #buttonCheck {
        position: relative;
        left: 90px;
        width: 150px;
    }

    #buttonCheck button {
        
    }

</style>
<div id="box">
    <form>
        <ul id="nameDescription">
            <li>Title</li>
            <li>Description</li>
        </ul>

        <ul id="inputVals">
            <li><input type="text" id="title"></li>
            <li><input type="text" id="description"></li>
        </ul>

        <div id="buttonCheck">
            <button type="button" id="cancelBtn">Cancel</button>
            <button type="button" id="submitBtn">Submit</button>
        </div>
    </form>
</div>
`;

class InsertBox extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.append(insertBoxHTML.content.cloneNode(true));
        this._isOpen = false;
        this._dataFunc = () => {};
    }
    set isOpen(newOpenVal) {
        this._isOpen = newOpenVal;

        if(this._isOpen)
            this.shadow.querySelector('#box').style.display = "block";
        else
            this.shadow.querySelector('#box').style.display = "none";
    }

    get isOpen() {
        return this._isOpen;
    }

    set dataFunc(newDataFunc) {
        this._dataFunc = newDataFunc;
    }

    get dataFunc() {
        return this._dataFunc;
    }

    storeData() {
        let titleVal = this.shadow.getElementById('title').value;
        let descriptionVal = this.shadow.getElementById('description').value;
        this._dataFunc(titleVal, descriptionVal);
    }

    connectedCallback(){
        let cancelEl = this.shadow.getElementById('cancelBtn');
        cancelEl.addEventListener('click', () => {
            this.isOpen = false;
        });
     
        let submitBtn = this.shadow.getElementById('submitBtn');
        submitBtn.addEventListener('click', () => {
            this.storeData();
            this.isOpen = false;
        }); // storing data
    }
}

window.customElements.define('insert-box', InsertBox);