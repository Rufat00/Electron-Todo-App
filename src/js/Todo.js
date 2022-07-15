class Todo{
    urlParams = new URLSearchParams(window.location.search)
    groups = JSON.parse(localStorage.getItem("groups"))
    currentGroup = this.groups[this.urlParams.get('group')]

    get(id){
        return this.currentGroup.todos[id]
    }

    getAll(){
        return this.currentGroup.todos
    }

    create(title, describtion, date){
        this.currentGroup.todos = [...this.currentGroup.todos, {title, describtion, date}]
        this.groups[this.urlParams.get("group")] = this.currentGroup

        localStorage.setItem("groups", JSON.stringify(this.groups))
    }

    delete(id){
        this.currentGroup.todos.splice(id, 1)
        this.groups[this.urlParams.get("group")] = this.currentGroup

        localStorage.setItem("groups", JSON.stringify(this.groups))
    }

    update(id ,title, describtion, date){
        this.currentGroup.todos[id] = {title, describtion, date}
        this.groups[this.urlParams.get("group")] = this.currentGroup

        localStorage.setItem("groups", JSON.stringify(this.groups))
    }

}

export default new Todo()