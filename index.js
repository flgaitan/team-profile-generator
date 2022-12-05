//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//page creation
const profileMarkdown = require ('./src/profileMarkdown');

//required team members 
const Manager = require ('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//team array
const teamList = [];

//Manager array
const promptManager = () => {
    console.log('\n\n-- Manager --');

    return inquirer.prompt ([

    {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the team manager',
        
        },

    {
        type: 'input',
        name: 'id',
        message: 'Provide manager ID',
        
    },
  
    {
        type: 'input',
        name: 'email',
        message: 'Provide manager email',
        
    },
    
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please provide office number',
        
    },

    ])
    .then(teamManager => {
        const {name, id, email, officeNumber} = teamManager;
        const manager = new Manager (
            name, 
            id, 
            email, 
            officeNumber
            );
        
        teamList.push(manager);
        console.log(manager, "Manager added to the list");

    })

};
 
const promptEngineer = () => {
    console.log('\n\n-- Engineer --');

    return inquirer.prompt ([

    {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the team enginner',
        
        },
   
    {
        type: 'input',
        name: 'id',
        message: 'Provide engineer ID',
        
    },
 
    {
        type: 'input',
        name: 'email',
        message: 'Provide engineer email',
        
    },
   
    {
        type: 'input',
        name: 'github_username',
        message: 'Please provide the engineer github username',
        
    },

    ])
    .then(teamEngineer => {
        const {name, id, email, github_username} = teamEngineer;
        const engineer = new Engineer (
            name, 
            id, 
            email, 
            github_username
            );
        
        teamList.push(engineer);
        console.log(engineer, "Engineer added to the list");

        nextMember();
    })

};

const promptIntern = () => {
    console.log('\n\n-- Intern --');

    return inquirer.prompt ([

    {
        type: 'input',
        name: 'name',
        message: 'Please provide the name of the team intern',
        
        },
   
    {
        type: 'input',
        name: 'id',
        message: 'Provide intern ID',
        
    },
 
    {
        type: 'input',
        name: 'email',
        message: 'Provide intern email',
        
    },
   
    {
        type: 'input',
        name: 'school',
        message: 'Please provide school attended for intern',
        
    },

    ])
    .then(teamIntern => {
        const {name, id, email, school} = teamIntern;
        const intern = new Intern (
            name, 
            id, 
            email, 
            school
            );
        
        teamList.push(intern);
        console.log(intern, "Intern added to the list");

        nextMember();
    })

};

//defining next member function that will populate whatever team member needs to be filled out next

//needs work
const nextMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextUp',
            message: 'Choose one of the following:',
            members: ['Add en Engineer', 'Add an Intern', 'Finish adding team members'],
        },
     ]),
     then.((makeChoice) => {
        if (makeChoice.nextUp == "Add Engineer") {
            promptEngineer();
         }else if (makeChoice.nextUp == "Add Intern") {
             promptIntern();
            }else {
                generateMarkdown();
            }
            //console.log(chooseOne);
    })
}
    function generateMarkdown(){
        employeeData = profileMarkdown(teamList);
        fs.writeFile('./dist/genIndex.html', employeeData, (err) => {
            if (err) throw new Error(err);
            console.log("HTML file has been successfully created! Team List is up and running.");
        })
    }

promptManager.then(nextMember);
 

 
    
       