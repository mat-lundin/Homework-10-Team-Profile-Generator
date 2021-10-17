const Employee = require('./lib/employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./lib/intern');
const inquirer = require("inquirer");
const fs = require('fs');
const choices = require('inquirer/lib/objects/choices');

//array of the team objects so we don't have to worry about naming them and actually looping through any prompts
const team = [];

const mgmtQuestions = [
    {
        type: 'input',
        message: 'Manager Name:',
        name: 'mgmtName'
    },
    {
        type: 'input',
        message: 'Manager ID:',
        name: 'mgmtId'
    },
    {
        type: 'input',
        message: 'Manager Email:',
        name: 'mgmtEmail',
        validate: (answers) => {
            answers.mgmtEmail.includes('@');
        }
    },
    {
        type: 'input',
        message: 'Manager Office Number:',
        name: 'mgmtOfficeNum'
    },
    {
        type: 'list',
        message: 'Add a team member?:',
        name: 'newEmp',
        choices: ['Engineer','Intern','Finish and build my team']
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer Name:',
        name: 'engName'
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'engId'
    },
    {
        type: 'input',
        message: 'Employee Email:',
        name: 'engEmail',
        validate: (answers) => {
            answers.engEmail.includes('@');
        }
    },
    {
        type: 'input',
        message: 'Employee Github Username:',
        name: 'engGithub'
    },
    {
        type: 'list',
        message: 'Add a team member? :',
        name: 'newEmp',
        choices: ['Engineer','Intern','Finish and build my team']
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'intName'
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'intId'
    },
    {
        type: 'input',
        message: 'Intern Email:',
        name: 'intEmail',
        validate: (answers) => {
            answers.intEmail.includes('@');
        }
    },
    {
        type: 'input',
        message: 'Intern School:',
        name: 'intSchool'
    },
    {
        type: 'list',
        message: 'Add a team member?',
        name: 'newEmp',
        choices: ['Engineer','Intern','Finish and build my team']
    },
];

function engPrompt(){
    inquirer
    .prompt(engineerQuestions)
    .then((data) => {
        const eng = new Engineer(data.engName,data.engId,data.engEmail,data.engGithub);
        team.push(eng);
        if (data.newEmp === 'Engineer'){
            engPrompt();
        } else if (data.newEmp === 'Intern') {
            intPrompt();
        } else {
            renderHTML();
        };
    })
}

function intPrompt(){
    inquirer
    .prompt(internQuestions)
    .then((data) => {
        const int = new Intern(data.intName,data.intId,data.intEmail,data.intSchool);
        team.push(int);
        if (data.newEmp === 'Engineer'){
            engPrompt();
        } else if (data.newEmp === 'Intern') {
            intPrompt();
        } else {
            renderHTML();
        };
    })
}

//generate html for manager then remove them from the array so we can loop through rest of the team and separate the html
function mgmtHTML(){
    const obj = team[0];
    return `                <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${this.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Role</h6>
      <p class="card-text">
          <ul>
              <li>Employee ID: ${obj.getId()}</li>
              <li>Email: </li>
              <li>Office Number: </li>
          </ul>
      </p>
      <a href="#" class="card-link">Card link</a>`
}

//return html from the object array
function teamHTML(){

}

//loop through the team array and build our HTML
function renderHTML(){
    console.log(team);
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <div class='container'>
        <div class='row'>
            <div class=col>
                ${mgmtHTML}

                    </div>
                  </div>
            </div>
        </div>
    </div>
</body>
</html>
    `
}

//ask manager questions, then do an if then to call the engineer, intern, or build function. at the end of each function do the same if then to call the appropriate one
function init(){
    inquirer
        .prompt(mgmtQuestions)
        .then((data) => {
            const mgmt = new Manager(data.mgmtName,data.mgmtId,data.mgmtEmail,data.mgmtOfficeNum);
            team.push(mgmt);
            if (data.newEmp === 'Engineer'){
                engPrompt();
            } else if (data.newEmp === 'Intern') {
                intPrompt();
            } else {
                renderHTML();
            };
        })


};

init();