let insertBoxHTML = document.createElement('template');
insertBoxHTML.innerHTML = `
<style>
    #box {
        display: none;
    }
</style>
<div id="box">
this is a test
</div>
`;

class InsertBox extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.append(insertBoxHTML.content.cloneNode(true));
        this._isDisplay = "none";
    }

    set display(newDisplay) {
        this._isDisplay = newDisplay;
        document.querySelector('#box').style.display = newDisplay;
    }

    connectedCallback(){}
}

window.customElements.define('insert-box', InsertBox);