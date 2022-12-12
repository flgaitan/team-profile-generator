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
//const { Console } = require('console');
//const { type } = require('os');
//const Employee = require('./lib/Employee');

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
        name: "name",
        message: "Enter employee name"
        
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
        name: " Intern's name",
        message: "Enter intern's name"
    },
    {
        type: "input",
        message: "Enter intern's employee ID",
        name: " Intern's Id",
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
        
//    const responses = () => {
//     //inputs
//     let { name, id, email, github_username, role, school } = inputs;
//     let employee;
//     if (role === "Engineer") {
//         employee = new Engineer(name, id, email, github_username);
//         console.log(employee, "Engineer is in");

//     } else if (role === "Intern") {
//         employee = new Intern(name, id, email, school);
//         console.log(employee, "Intern in");
//     }
//     employeeQs.push(employee);
//     console.log(employeeQs);

// };






//defining next member function that will populate whatever team member needs to be filled out next
//needs work


function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(employeeQs)
    .then(function(inputs) {
        let addedMan = new Manager(inputs.id, inputs.firstname, inputs.email, inputs.officeNumber)
            teamList.push(addedMan);
            //console.log(JSON.stringify(teamList) + " got it");
            //console.log(addedMan);
            //console.log('creating Index...');
            
        moreEmployees();
        });
        
};
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
                //add another case if user wants to finish team*
        };
        
        writeToFile("Index.hmtl", generateIndexHTML(teamList));
        

    })
    //finishTeam();

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
        } else {
            moreEmployees();
        }
    });
}

init();
