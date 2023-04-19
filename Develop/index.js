// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project? (required)',
        //titleInput ? true : console.log(message)
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username? (required)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (required)',
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem will it solve? (required)',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project? (required)',
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please explained the installation instructions for your project?',
    },
    {
        // This not added in the generatemarkdown
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for the project?',
        choices: ['MIT', 'qpl-2.0', 'qpl-3.0', 'lqpl', 'lqpl-2.1', 'non'],
    },
    {
        type: 'confirm',
        name: 'confirmation',
        message: 'Would your like to allow other developers to contribute?',
        default: 'yes'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please explain how would your like to contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you test your app?',
        default: 'npm test',
    }

    
    
];

// fs allow me to do file changes such as generate, delete, add

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// ask tutor about fs
fs.writeFileSync(fileName, data)
// (sync) make the parameter two instead of three.
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile('README.md', generateMarkdown(data))
    }) 
}

// Function call to initialize app
init();
