const inquirer = require("inquirer");
const fs = require("fs");


function promptResponse() {
    return inquirer.prompt([
    {   type: "input",
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
        message: "Please include a description of how this can be used...",
        name: "usage"
    },
    {   type: "list",
        message: "Please select a license type...",
        name: "license",
        choices: [
        'Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'BSD 3-Clause "New" or "Revised" license [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        'BSD 2-Clause "Simplified" or "FreeBSD" license [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        'MIT license [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'NONE'
    ]
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
    {   type: "input",
        message: "Enter the full link to your repository...",
        name: "repository"
    },

   
]);
};

function generateReadMe(data) {
    const badge = "https://img.shields.io/badge/Github-" + data.username + "-4cbbb9";
    const gitHub = "https://github.com/" + data.username + ".png?size=50";
    
    
    return `
  # ${data.title} 
  # ${data.repository}
  
  ## Table of Contents
  - [Description](#desctiption)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Description
    ${data.description}

  ## Installation
  Installation instructions for this project are: ${data.installation}
  
  ## Usage
  This program is to be used: ${data.usage}

  ## License
  The license selected: ${data.license}

  ## Contributing
  The contributors to this project include: ${data.contributing}

  ## Tests
  The test commands included in the project are: ${data.tests}

  ## Contact
  \n![Badge](${badge}) 
  \n![Profile Image](${gitHub})
  \nFor questions, contact the author at ${data.email}.`
   
}
module.exports = generateReadMe;

function printtoReadMe(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(err) {
        if (err) {
            throw err;
        }
        console.log("You have created a ReadMe file for your project titled" + data.title + ".");
    });
};

async function init() {
    try {
        const response = await promptResponse();
        generateReadMe(response);
        printtoReadMe("README.md", generateReadMe(response));

    } catch (err) {
        console.log(err);
    }
};

init();