const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(id, name, email, github_username){
        super (id, name, email)
        this.github_username = github_username
    }
    getGithub(){
        return this.github_username;
    }
    
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;