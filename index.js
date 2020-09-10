const inquirer = require("inquirer")

function promptResponse() {
    return inquirer.prompt([{
        type: "input",
        message: "Enter your project's title...",
        name: "title"
    },
    {   type: "input",
        message: "Enter a description of your project...",
        name: "description"
    },
    {   type: "input",
        message: "Please include any installation instructions here...",
        name: "installation"
    },
    {   type: "input",
        message: "Please include a desctiption of how this can be used...",
        name: "usage"
    },
    {   type: "list",
        message: "Please select a license type...",
        name: "license",
    },
    {   type: "input",
        message: "Please list any and all contributors...",
        name: "contributing"
    },
    {   type: "input",
        message: "Please list test commands...",
        name: "tests"
    },
    {   type: "input",
        message: "Enter your GitHub username...",
        name: "username"
    },
    {   type: "input",
        message: "Enter your email...",
        name: "email"
    },
   


]);
};