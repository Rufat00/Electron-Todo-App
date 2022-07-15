import Group from "./Group.js";

const $ = (query) => {
    return document.querySelector(query)
}

const renderGoups = () => {
    $("#groups").innerHTML = ""

    Group.getAll().forEach((group, index) => {
        $("#groups").insertAdjacentHTML("beforeend", 
        `
            <div class="group">
                <button class="group_delete" id="delete_${index}">delete</button>
                <a href="./todos.html?group=${index}" class="group_link">
                    <h3>${group.name}</h3>
                </a>
            </div>
        `)
    
    });
}

const addListeners = () => {
    Group.getAll().forEach((group, index) => {
        $(`#delete_${index}`).onclick = () => {
            Group.delete(index)

            render()
        }
    })
}

const render = () => {
    renderGoups()
    addListeners()
} 

$("#create_new_button").onclick = () => {
    Group.create($("#create_new_input").value)
    $("#create_new_input").value = ""

    render()
}

window.onload = () => {
    render()
}