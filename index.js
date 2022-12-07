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
                    console.log("Please enter a valid number")
                    return false;
                }else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, officeNumber, id, email} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

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
        let {name, id, email, github_username, role, school} = membersInput;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github_username);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamList.push(employee);
        console.log(teamList);

        })

    }


 


// //defining next member function that will populate whatever team member needs to be filled out next

// //needs work
const writeFile = data => {
    fs.watchFile('./dist/teamIndex.html', data, err => {
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
.then(indexHTML => {
    return writeFile(indexHTML);
})
.catch(err => {
    console.log(err, "BIG Error here!");
});

