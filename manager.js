const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
      super(name, id, email)
      // this.name = name
      // this.id = id
      // this.email = email
      officeNum = officeNum
    }
    getRole(){
      return 'Manager'
    }
}

module.exports = Manager