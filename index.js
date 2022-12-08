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
//teamList = JSON.stringify(employeeQs);

//starting adding the head of the employees = manager
const employeeQs = [
    {
        type: "input",
        name: "name",
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
    },
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
        name: "Engineer's name",
        message: "Enter engineers employee name",
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
    },
    {
        type: "input",
        name: "Enter engineer's email",
        message: "Enter employee's email"
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
        message: "Enter intern's name",
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
        }
    },
    {
        type: "input",
        name: "Intern's email",
        message: "Enter intern's email"
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
        
   const inputs = () => {
    //inputs
    let { name, id, email, github_username, role, school } = inputs;
    let employee;
    if (role === "Engineer") {
        employee = new Engineer(name, id, email, github_username);
        console.log(employee, "Engineer is in");

    } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee, "Intern in");
    }
    employeeQs.push(employee);
    console.log(employeeQs);

};

const data = JSON.stringify(employeeQs);





//defining next member function that will populate whatever team member needs to be filled out next
//needs work


function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(employeeQs)
        .then(function (inputs) {
            console.log('creating Index...')
            writeToFile("Index.hmtl", generateIndexHTML({ ...inputs }));
        });
};


init();

