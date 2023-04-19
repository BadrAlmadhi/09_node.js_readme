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
        name: 'description',
        message: 'Describe the project  (required)',
    },
    {
        type: 'input',
        name: 'what',
        message: 'What was your motivation?  (required)',
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project? (required)',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve? (required)',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did your learn? (required)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        // This not added in the generatemarkdown
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your project?'
        // provide screenshots
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for the project?',
        choices: ['MIT', 'qpl-2.0', 'qpl-3.0', 'lqpl', 'lqpl-2.1', 'non'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you test your app?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  
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
