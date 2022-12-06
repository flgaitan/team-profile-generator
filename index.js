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
//const Employee = require('./lib/Employee');

//team array
const teamList = [];

//starting adding the head of the employees = manager
const addManager = () => {
    return inquirer.prompt
    ([
        {
            type: "input",
            name: "name",
            message: "Enter team manager's name",
            
        },
         {
            type: "input",
            message: "Enter employee ID",
            name: "id",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("Please enter a valid ID")
                    return false;
                }else {
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
                if (isNaN(nameInput)){
                    console.log("Please enter a valid ID")
                    return false;
                }else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, role, id, email} = managerInput;
        const manager = new Manager (name, id, email, role);

        teamList.push(manager);
        console.log(manager, "New manager added");
    })

};

const addMembers = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Choose employee's role:",
            choices: 
            [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee name",
        },
        {
            type: "input",
            message: "Enter employee ID",
            name: "id",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("Please enter a valid ID")
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee's email"
        },
        {
            type: "input",
            name: "github_username",
            message: "Enter employee's GitHub username",
            when: (input) => input.role === "Engineer",
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
            name: "school",
            message: "Enter Intern's last school attended",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's school");
                }
            }
        }
    ])
    .then(membersInput => {
        //inputs
        let {name, id, email, role, github_username, school} = membersInput;
        let employee;
        if (role == "Engineer") {
            employee = new Engineer(name, id, email, github_username);
            console.log(employee);

        } else if (role == "Intern") {
            employee = new Intern (name, id, role, school);
            console.log(employee);
        }
        teamList.push(employee);

        })

    }


 
//            
//     ])
// }
// .then(function({name, role, id, email}) {
//     let employeeRole = "";
//     if (role === "Manager") {
//         employeeRole = "office phone number";
//     } else if (role === "Engineer") {
//         employeeRole = "github_username";
//     } else {
//         employeeRole = "school";
//     }
//     inquirer.prompt([
//         {
//             message: `Enter employee ${employeeRole}`,
//             name: "employeeRole"
//         },
//         {
//             type: "list",
//             message: "Would you like to add any more members to the team?",
//             choices: [
//                 "yes",
//                 "no"
//             ],
//             name: "moreEmployees"
//         }
//     ])
// });
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



//  //Manager array
//  const promptManager = () => {
//      return inquirer.prompt ([

//      {
//          type: 'input',
//          name: 'name',
//          message: 'Please provide the name of the team manager',

//          },

//      {
//          type: 'input',
//          name: 'id',
//          message: 'Provide manager ID',

//      },

//      {
//          type: 'input',
//          name: 'email',
//          message: 'Provide manager email',

//      },

//      {
//          type: 'input',
//          name: 'officeNumber',
//          message: 'Please provide office number',

//      },

//      ])
//      .then(teamManager => {
//          const {name, id, email, officeNumber} = teamManager;
//          const manager = new Manager (
//              name, 
//              id, 
//              email, 
//              officeNumber
//              );

//          teamList.push(Manager);
//          console.log(Manager, "Manager added to the list");

//      })

//  };

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
const writeFile = data => {
    fs.watchFile('./dist/index.html', data, err => {
        if (err){
            console.log(err, "Error here");
            return;
        } else {
            console.log("Team members have been successfully created in index.html");
        }
    })
};


addManager()
.then(addMembers)
.then(teamList => {
    return generateIndexHTML(teamList);
})
.then(indexHtml => {
    return writeFile(indexHtml);
})
.catch(err => {
    console.log(err, "Error!");
});

