// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: userName => {
            if (userName) {
                return true;
            } else {
                console.log('Please enter your user name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name:'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project (Required)',
        validate: userDescription => {
            if (userDescription) {
                return true;
            } else {
                console.log('Please enter project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this repo?'
    },
    {
        type: 'input',
        name: 'packages',
        message: 'What packages do you need to install?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command to run in order to test?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license are you using for this project?',
        choices: ['MIT', 'Apache2.0', 'ISC', 'GNUGOLv3', 'none'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who is the contributor for this project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = index.js;
    return fs.writeFileSync(fileName,data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(getAnswers => {
            const readMe = generateMarkDown(getAnswers)
            fs.writeFile('./dist/README.md', readMe, err => {
                if (err) throw new Error(err);

                console.log("README page created!");
            })
        })
};

// Function call to initialize app
init();