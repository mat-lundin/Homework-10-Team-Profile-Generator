const Employee = require('./employee')

class Engineer extends Employee{
  constructor(name, id, email, github){
    super(name, id, email)
    this.name = name;
    this.id = id;
    this.email = email
    github = github
  }
  getRole(){
    return 'Engineer'
  }
  getGithub(){
    return `https://github.com/${github}`
    
  }
}

module.exports = Engineer