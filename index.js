const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const inquirer = require("inquirer");
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

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
        name: 'mgmtEmail'
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
        name: 'engEmail'
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
        name: 'intEmail'
    },
    {
        type: 'input',
        message: 'Intern School:',
        name: 'intSchool'
    },
    {
        type: 'list',
        message: 'Add a team member? :',
        name: 'newEmp',
        choices: ['Engineer','Intern','Finish and build my team']
    },
];


function init(){
    inquirer
        .prompt(mgmtQuestions)
        .then((data) => {
            const mgmt = new Manager(data.mgmtName,data.mgmtId,data.mgmtEmail,data.mgmtOfficeNum);
        })


};

init();