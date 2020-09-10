function generateReadMe(data) {
    const badge = "https://img.shields.io/badge/Github-${data.username}-4cbbb9";
    const gitHub = "https://github.com/${data.username}.png?size=50";
    
    
    return '
        # ${data.title}

        ## Table of Contents
            - [Installation]
            - [Usage]
            - [License]
            - [Contributing]
            - [Tests]

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
            \n![Badge] (${badge})
            \n![Profile Image] (${gitHub})
            \nFor questions, contact author at ${data.email}.'
}
module.exports = generateReadMe;