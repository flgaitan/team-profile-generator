class Employee {
    constructor (id, name, email){
        this.id = id,
        this.name = name,
        this.email =email
    }

    getName(){
        return this.name;

    }

    getId(){
        return this.id;
    }

    getEmail(){
        this.email;
    }

    getRole(){
        return "Employee"
    }
}
module.exports = Employee