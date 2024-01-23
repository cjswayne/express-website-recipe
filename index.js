// packages needed
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const questions = require('./lib/questions');

const readmePath = './readme-example/README.md'


// fxn that writes readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.log(err);
        }
    });
}
//fxn to open the readme file
function openFile(readmePath){
    import('open').then(open => {
        open.default(readmePath).catch(err => {
            console.error('Failed to open README:', err);
        });
    }).catch(err => {
        console.error('Failed to load module:', err);
    });
}

// fxn to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(readmePath, genMarkdown(answers));
        openFile(readmePath);
    });
}

// Function call to initialize app
init();