//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//page creation
const profileMarkdown = require('./src/profileMarkdown');

//required team members 
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//team array
const teamList = [];


function init() {
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([
        {
            message: "Enter employee name",
            name: "name",
        },
        {
            type: "list",
            message: "Select employee role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role",
        },
        {
            message: "Enter employee ID",
            name: "id"
        },
        {
            message: "Enter employee email",
            name: "email"
        }
    ])
}
.then(function({name, role, id, email}) {
    let employeeRole = "";
    if (role === "Manager") {
        employeeRole = "office phone number";
    } else if (role === "Engineer") {
        employeeRole = "github_username";
    } else {
        employeeRole = "school";
    }
    inquirer.prompt([
        {
            message: `Enter employee ${employeeRole}`,
            name: "employeeRole"
        },
        {
            type: "list",
            message: "Would you like to add any more members to the team?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreEmployees"
        }
    ])
});
    // .then(function ({ employeeRole, moreEmployees }) {
    //     let newEmployee;
    //     if (role === "Manager") {
    //         newEmployee = new Manager(name, id, email, employeeRole);
    //     } else if (role === "Engineer") {
    //         newEmployee = new Engineer(name, id, email, employeeRole);
    //     } else {
    //         newEmployee = new Intern(name, id, email, employeeRole);
    //     }
    //     teamList.push(newEmployee);
    //     createHtmlFile(newEmployee)
    //         .then(function () {
    //             if (moreEmployees === "yes") {
    //                 createHtmlFile();
    //             }
    //          });
            
    //     });
    // });



// //Manager array
// const promptManager = () => {
//     console.log('\n\n-- Manager --');

//     return inquirer.prompt ([

//     {
//         type: 'input',
//         name: 'name',
//         message: 'Please provide the name of the team manager',

//         },

//     {
//         type: 'input',
//         name: 'id',
//         message: 'Provide manager ID',

//     },

//     {
//         type: 'input',
//         name: 'email',
//         message: 'Provide manager email',

//     },

//     {
//         type: 'input',
//         name: 'officeNumber',
//         message: 'Please provide office number',

//     },

//     ])
//     .then(teamManager => {
//         const {name, id, email, officeNumber} = teamManager;
//         const manager = new Manager (
//             name, 
//             id, 
//             email, 
//             officeNumber
//             );

//         teamList.push(manager);
//         console.log(manager, "Manager added to the list");

//     })

// };

// const promptEngineer = () => {
//     console.log('\n\n-- Engineer --');

//     return inquirer.prompt ([

//     {
//         type: 'input',
//         name: 'name',
//         message: 'Please provide the name of the team enginner',

//         },

//     {
//         type: 'input',
//         name: 'id',
//         message: 'Provide engineer ID',

//     },

//     {
//         type: 'input',
//         name: 'email',
//         message: 'Provide engineer email',

//     },

//     {
//         type: 'input',
//         name: 'github_username',
//         message: 'Please provide the engineer github username',

//     },

//     ])
//     .then(teamEngineer => {
//         const {name, id, email, github_username} = teamEngineer;
//         const engineer = new Engineer (
//             name, 
//             id, 
//             email, 
//             github_username
//             );

//         teamList.push(engineer);
//         console.log(engineer, "Engineer added to the list");


//     })

// };

// const promptIntern = () => {
//     console.log('\n\n-- Intern --');

//     return inquirer.prompt ([

//     {
//         type: 'input',
//         name: 'name',
//         message: 'Please provide the name of the team intern',

//         },

//     {
//         type: 'input',
//         name: 'id',
//         message: 'Provide intern ID',

//     },

//     {
//         type: 'input',
//         name: 'email',
//         message: 'Provide intern email',

//     },

//     {
//         type: 'input',
//         name: 'school',
//         message: 'Please provide school attended for intern',

//     },

//     ])
//     .then(teamIntern => {
//         const {name, id, email, school} = teamIntern;
//         const intern = new Intern (
//             name, 
//             id, 
//             email, 
//             school
//             );

//         teamList.push(intern);
//         console.log(intern, "Intern added to the list");


//     })

// };

// //defining next member function that will populate whatever team member needs to be filled out next

// //needs work

fs.writeFile ("./")

init();



