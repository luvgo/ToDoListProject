const listItems = [];

const btnElement = document.getElementById("button-addon1");

const refreshUI = () => {
    const liElement = document.createElement("li");
    const inputElement = document.createElement("input");
    const ulElement = document.getElementById("list");
    const btnElement = document.createElement("button");

    ulElement.appendChild(liElement);
    liElement.appendChild(inputElement);
    liElement.appendChild(btnElement);
    assignClass(liElement,["list-group-item"])
    assignClass(btnElement,["btn-close", "position-absolute", "top-50", "end-0", "translate-middle-y"])
    assignClass(inputElement, ["form-check-input", "me-1"]);
    assignAttrs(inputElement,{"type":"checkbox", "value": "", "aria-label": "input"});
    document.body.appendChild(ulElement);
}

const addList = (item) => {
    listItems.push(item);
    alert('Hello');
    console.log(item);
    refreshUI();
}

const deleteList = () =>{
    alert("This will delete your list are you sure?");
}

const assignAttrs = (el, attrs) => {
   for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
const assignClass = (el, classes) => {
    for(let i in classes){
        el.classList.add(classes[i]);
    }
}

//onkeyup="addList(document.getElementsByName('addToList').value)"
btnElement.addEventListener("click", () =>{
    document.getElementsByName('addToList').value;
});