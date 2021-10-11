"use strict"
const SECRET_KEY = "$2b$10$OhbmQ/buJ2hV4lLkDG3u7uhQrFwHP5OtoWsgTdjzIyw0Nz7FAFwvO"
let todoList = []; //declares a new array for Your todo list

let initList = () => {
    let savedList = window.localStorage.getItem("todos");
    if (savedList != null)
        todoList = JSON.parse(savedList);

    else
        //code creating a default list with 2 items
        todoList.push(
            {
                title: "Learn JS",
                description: "Create a demo application for my TODO's",
                place: "445",
                dueDate: new Date(2019, 10, 16)
            },
            {
                title: "Lecture test",
                description: "Quick test from the first three lectures",
                place: "F6",
                dueDate: new Date(2019, 10, 17)
            });
}

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
    let todoListTable = $("#todoListView");

    //remove all elements
    // while (todoListTable.first().next()) {
    //     todoListTable.first().next().remove()
    // }

    //add all elements
    let filterInput = $("#inputSearch");
    console.log("todoList => " + todoList);
    for (let todo in todoList) {
        if ((filterInput.value == "") ||
            (todoList[todo].title.includes(filterInput.value)) ||
            (todoList[todo].description.includes(filterInput.value))) {
        }
        let newRow = $("<tr></tr>");
        newRow.appendTo(todoListTable);
        // tutaj wyodrebnij funkcje z tworzeniem tr'a
        for (let field of Object.values(todoList[todo])) {
            let newTableData = $(`<td>${field}</td>`);
            newTableData.appendTo(newRow);
        }
        let newDeleteButton = $("<input type='button' value='x')></input>").click(function () {
            deleteTodo(todo);
        });
        newDeleteButton.appendTo(newRow);
    }
}

setInterval(updateTodoList, 1000)

let deleteTodo = function(index) {
    todoList.splice(index,1);
    updateJSONbin();
}

let addTodo = function() {
    updateJSONbin();
  //get the elements in the form
    let inputTitle = document.getElementById("inputTitle");
    let inputDescription = document.getElementById("inputDescription");
    let inputPlace = document.getElementById("inputPlace");
    let inputDate = document.getElementById("inputDate");
  //get the values from the form
    let newTitle = inputTitle.value;
    let newDescription = inputDescription.value;
    let newPlace = inputPlace.value;
    let newDate = new Date(inputDate.value);
  //create new item
    let newTodo = {
        title: newTitle,
        description: newDescription,
        place: newPlace,
        dueDate: newDate
    };
  //add item to the list
    todoList.push(newTodo);
    window.localStorage.setItem("todos", JSON.stringify(todoList));
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
