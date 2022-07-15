import Todo from "./Todo.js";

const $ = (query) => {
    return document.querySelector(query)
}

const deleteTodo = (id) => {
    Todo.delete(id)

    render()
}

const renderTodos = () => {
    $("#todos").innerHTML = ""

    Todo.getAll().forEach((todo, index) => {
        $("#todos").insertAdjacentHTML("beforeend", 
        `
            <div class="todo">
                <div class="todo_content">
                    <h3>${todo.title}</h3>
                    <p>${todo.describtion}</p>
                    <p class="date">${todo.date}</p>
                </div>
                <div class="todo_buttons">
                    <button class="delete_button" id="delete_${index}">delete</button>
                    <button class="update_button" id="update_${index}">update</button>
                </div>
            </div>
        `)
    });
}

const addListeners = () => {
    Todo.getAll().forEach((todo, index) => {
        $(`#delete_${index}`).onclick = () => deleteTodo(index)

        $(`#update_${index}`).onclick = () => {
            $("#create_title").value = todo.title,
            $("#create_describtion").value = todo.describtion,
            $("#create_date").value = todo.date,

            $("#create_new").remove()
            $("#todo_form").insertAdjacentHTML("beforeend", `<button class="update_button" id="update">update</button>`)

            $("#update").onclick = () => {
                Todo.update(
                    index,
                    $("#create_title").value,
                    $("#create_describtion").value,
                    $("#create_date").value,
                )
            
                $("#create_title").value = "",
                $("#create_describtion").value = "",
                $("#create_date").value = "",
            
                render()

                $("#update").remove()
                $("#todo_form").insertAdjacentHTML("beforeend", `<button class="create_button" id="create_new">create todo</button>`)
            }
        }
    })
}

const render = () => {
    renderTodos()
    addListeners()
}

$("#create_new").onclick = () => {
    Todo.create(
        $("#create_title").value,
        $("#create_describtion").value,
        $("#create_date").value,
    )

    $("#create_title").value = "",
    $("#create_describtion").value = "",
    $("#create_date").value = "",

    render()
}

window.onload = () => {
    render()
}