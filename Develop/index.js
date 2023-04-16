// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        //titleInput ? true : console.log(message)
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write your project description',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for the project?',
        choices: ['MIT', 'qpl-2.0', 'qpl-3.0', 'lqpl', 'lqpl-2.1', 'non'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What did you for your installation?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is your GitHub u',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What this project is used for?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What user need to know about contributing?'
    }
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
