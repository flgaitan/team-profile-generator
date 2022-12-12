//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//page markdown link
const generateIndexHTML = require('./src/profileMarkdown');

//required team members 
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const Employee = require('./lib/Employee');

//team array
teamList = [];

//starting adding the head of the employees = manager
const employeeQs = [
    {
        type: "input",
        name: "firstname",
        message: "Enter team manager's name",

    },
    {
        type: "input",
        message: "Enter manager's employee ID",
        name: "id",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter a valid ID")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter manager's office number",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter a valid number")
                return false;
            } else {
                return true;
            }
        }
    }
];

//new fnc containing engineer and intern info
const addedEmplys = [
    {
        type: "list",
        name: "role",
        message: "Choose employee's role: ",
        choices:
            [
                'Engineer',
                'Intern'
            ]
    },
    {
        type: "input",
        name: "Engineer's name",
        message: "Enter engineer's name"
        
    },
    {
        type: "input",
        message: "Enter engineer's employee ID",
        name: "Engineer's Id",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter a valid ID");
                return false;
            } else {
                return true;
            }
        }
        //when: (input) => input.role === "Engineer"
    },
    {
        type: "input",
        name: "Enter engineer's email",
        message: "Enter email",
        //when: (input) => input.role === "Engineer",
    },
    {
        type: "input",
        name: "github_username",
        message: "Enter engineer's GitHub username",
        //when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter engineer's GitHub username");
            }
        }
    },
    {
        type: "input",
        name: "Intern's name",
        message: "Enter intern's name"
    },
    {
        type: "input",
        message: "Enter intern's employee ID",
        name: "Intern's Id",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter a valid ID");
                return false;
            } else {
                return true;
            }
        },
        
        //when: (input) => input.role === "Intern"
    },
    {
        type: "input",
        name: "Intern's email",
        message: "Enter intern's email",
        //when: (input) => input.role === "Intern"
    },
    {
        type: "input",
        name: "school",
        message: "Enter Intern's last school attended",
        //when: (input) => input.role === "Intern",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter Intern's school");
            }
        }
    }
    
 ];


// write to file func
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// Created a function to initialize app, added the classes that pass that given set of information
function init() {
    inquirer.prompt(employeeQs)
    .then(function(inputs) {
        let addedMan = new Manager(inputs.id, inputs.firstname, inputs.email, inputs.officeNumber)
            teamList.push(addedMan);
            //console.log(JSON.stringify(teamList) + " got it");
            //console.log(addedMan);
            
        moreEmployees();
        });
        
};
//running this fnction that contains array of objects for engineer and intern. part of breaking down code 
//this fnc is doing a switch conditional for role selected , created with classes that will input needed information for that role
function moreEmployees () {
    inquirer.prompt(addedEmplys)
    .then (function(inputs){
        let role = inputs.role;
        switch(role) {
            case 'Engineer' :
                let engineer = new Engineer(inputs.id, inputs.name, inputs.email, inputs.github_username);
                teamList.push(engineer);
                finishTeam();
                break;
            case 'Intern' :
                let intern = new Intern(inputs.id, inputs.name, inputs.email, inputs.school);
                teamList.push(intern);
                finishTeam();
                break;
        };
        
        writeToFile("Index.hmtl", generateIndexHTML(teamList));
        

    })

//finishTeam(); basically is the fnc used to ask user if more team members need to be added.
//function works but functionality is off, however this is a big step from where code was before.

}

function finishTeam() {
    inquirer.prompt([
        {
        type: "confirm",
        name: "finalchoice",
        message: "Would you like to add more members to the team?",
        default: false
        }
    ])
    .then(function (response){
        if (response === false){
            writeToFile("Index.hmtl", generateIndexHTML(teamList));
            console.log('creating Index...');

        } else {
            moreEmployees();
        }
    });
}

init();
