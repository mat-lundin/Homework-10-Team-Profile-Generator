const Employee = require("./employee");

class Intern extends Employee(){
    constructor(name, id, email, school){
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        school = school
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){

    }
}

module.exports = Intern