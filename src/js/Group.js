class Group{

    checkGroup(){
        if(!localStorage.getItem("groups")){
            localStorage.setItem("groups", JSON.stringify([]))
        }
    }

    get(id){
        this.checkGroup()

        return JSON.parse(localStorage.getItem("groups"))[id]
    }

    getAll(){
        this.checkGroup()
        return JSON.parse(localStorage.getItem("groups"))
    }

    create(name){
        this.checkGroup()

        localStorage.setItem("groups", JSON.stringify([...JSON.parse(localStorage.getItem("groups")), {name, todos: []}]))
    }

    delete(id){
        this.checkGroup()

        const groups = JSON.parse(localStorage.getItem("groups"))
        groups.splice(id, 1)

        localStorage.setItem("groups", JSON.stringify(groups))
    }
}

export default new Group()