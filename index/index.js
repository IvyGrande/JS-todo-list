

// console.log($("#add"));
// $("#add").keypress(function(event){
//     if(event.which === 13) {
//         newElement();
//     }
// })

let idNum = 0;
$("#btn-add").onclick = function (){
    let text = $("#add").value;
    if(!text) return;
    let textSpan = document.createElement("span");
    textSpan.innerHTML = text;
    textSpan.className = "textContent";

    let childLi = document.createElement("li");

    let itemId = "item" + idNum;
    idNum ++;
    childLi.setAttribute("id", itemId)

    let statusChange = document.createElement("label");
    statusChange.setAttribute("for", itemId + "checked");
    let statusChangeSpan = document.createElement("input");
    statusChangeSpan.setAttribute("type", "checkbox");
    statusChangeSpan.setAttribute("id", itemId + "checked");
    statusChangeSpan.className = "checkedItems";
    childLi.appendChild(statusChange);
    childLi.appendChild(statusChangeSpan);
    childLi.appendChild(textSpan);

    let deleteSpan = document.createElement("span");
    deleteSpan.className = "delete";
    deleteSpan.setAttribute("id", itemId + "deleted");
    childLi.appendChild(deleteSpan);

    $(".todo-list")[0].appendChild(childLi);
    $("#add").value = "";

    statusChangeSpan.addEventListener('click', function () {
        let archivedId = statusChangeSpan.parentNode.id;
        console.log(archivedId);
        let archivedItem = $("#" + archivedId);
        if (statusChangeSpan.checked == true) {
            $("#archived").appendChild(archivedItem);
        }
        else {
            $("#todolist").appendChild(archivedItem);
        }
    })

}


function checkItem(){
    let listNum = $(".todo-list")[0].getElementsByTagName("li").length;
    let CompletedItemsNum = $("#archived").getElementsByTagName("li").length;
    let inputValue = $("#add");
    $(".unfinishedCount")[0].innerText = listNum + " items left";
}


$("#clearAllCompleted").onclick = function () {
        $("#archived").style.display = "none";
        $(".status")[0].style.display = "none";
}

$("#showAllItems").onclick = function () {
    $("#archived").style.display = "block";
    $(".status")[0].style.display = "block";
}

// $("#showActiveItems").onclick = function () {
//     this.innerHTML = "a";
//     $("#archived").style.display = "block";
//     $(".status-undone")[0].style.display = "none";
// }
//
// $("#showCompletedItem").onclick = function () {
//     $("#archived").style.display = "block";
//     $(".status-undone")[0].style.display = "none";
// }

function $(parameter) {
    if (parameter[0] === '.') {
        parameter = parameter.slice(1);
        let getItem = document.getElementsByClassName(parameter);
        return getItem;
    }
    else if (parameter[0] === '#') {
        parameter = parameter.slice(1);
        let getItem = document.getElementById(parameter);
        return getItem;
    }
}

setInterval(() => {
    checkItem();
}, 100);



/*

let todolist = [];
let listItems = [{
    text: " ",
    status: true
},{
    text: " ",
    status: true
}
];
todolist.push(listItems);
console.log(todolist);



console.log($("#add"));
$("#add").keypress(function(event){
    if(event.which === 13) {
        newElement();
    }
})



function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("add").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue !== '') {
        document.getElementById("todolist").appendChild(li);
    }
    document.getElementById("add").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
    todolist.push({ text: this.value, status: false });

}

let text = document.getElementsByTagName("li");


let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);



/!*
function addOneItem(item){
    let allLists = list.concat(item);
    return allLists;
}
*!/

function getItemById(id){
    return list.filter(function (e){
        if(e.id == id){
            return e;
        }
    })
}

function getByStatusFinished(){
    return todolist.filter(function (e){
        if(e.status){
            return e;
        }
    })
}

function getByStatusUnFinished(){
    return todolist.filter(function (e){
        if(!e.status){
            return e;
        }
    })
}

let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


function findIndexById(id){
    return list.findIndex(x => x.id == id);
}

function deleteItem(index){
    list.splice(index,1);
    return list;
}

function clearAllItems(){
    todolist.length = 0;

}


*/



