"use strict"
const SECRET_KEY = "$2b$10$OhbmQ/buJ2hV4lLkDG3u7uhQrFwHP5OtoWsgTdjzIyw0Nz7FAFwvO"
let todoList = [];

$.ajax({
    url: "https://api.jsonbin.io/b/6163e99d4a82881d6c5e6afa",
    type: "GET",
    headers: {
        'secret-key': SECRET_KEY
    },
    success: (data) => {
        todoList = data;
    },
    error: (err) => {
        console.log(err.responseJSON);
    }
});

let updateTodoList = () => {
    const todoListTable = $("#todoListView");
    // remove all elements
    $('tr:not(:first)').remove()  

    //add all elements
    let filterInput = $("#inputSearch");
    let dateFrom = $("#inputFilterStartingDate")
    let dateTo = $("#inputFilterEndingDate")
    for (let todo in todoList) {
        console.log('dobra data polska data ' + dateFrom.val())
        if ((filterInput.value == "") ||
            (todoList[todo].title.includes(filterInput.value)) ||
            (todoList[todo].description.includes(filterInput.value)) ||
            (todoList[todo].dueDate >= new Date(dateFrom.val()) && todoList[todo].dueDate <= new Date(dateTo.val()))) {
        }
        let row = makeNewTableRow(todoList[todo]).appendTo(todoListTable);
        let newDeleteButton = $("<input type='button' class='btn btn-danger' value='X')></input>").click(function () {
            deleteTodo(todo);
        });
        newDeleteButton.appendTo(row);
    }
}

const makeNewTableRow = (todo) => {
    let newRow = $("<tr></tr>");
    $(`<td colspan='2'>${todo.title}</td>`).appendTo(newRow);
    $(`<td colspan='2'>${todo.description}</td>`).appendTo(newRow);
    $(`<td>${todo.place}</td>`).appendTo(newRow);
    $(`<td>${todo.dueDate}</td>`).appendTo(newRow);
    return newRow;
}

setInterval(updateTodoList, 1000)

let deleteTodo = function(index) {
    todoList.splice(index,1);
    updateJSONbin();
}

let addTodo = function() {
    //get the elements in the form
    let inputTitle = $("#inputTitle").get(0);
    let inputDescription = $("#inputDescription").get(0);
    let inputPlace = $("#inputPlace").get(0);
    let inputDate = $("#inputDate").get(0);
    //get the values from the form
    let newTitle = inputTitle.value;
    let newDescription = inputDescription.value;
    let newPlace = inputPlace.value;
    let newDate = (new Date(inputDate.value)).toLocaleString();
    //create new item
    let newTodo = {
        title: newTitle,
        description: newDescription,
        place: newPlace,
        dueDate: newDate
    };
    //add item to the list
    todoList.push(newTodo);
    // window.localStorage.setItem("todos", JSON.stringify(todoList));
    updateJSONbin();
}

let updateJSONbin = function() {
    $.ajax({
        url: 'https://api.jsonbin.io/b/6160a4239548541c29x',
        type: 'PUT',
        headers: { //Required only if you are trying to access a private bin
            'secret-key': SECRET_KEY
        },
        contentType: 'application/json',
        data: JSON.stringify(todoList),
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err.responseJSON);
        }
    });
}
