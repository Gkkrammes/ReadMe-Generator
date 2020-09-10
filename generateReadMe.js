function generateReadMe(data) {
    return
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

}

module.exports = generateReadMe;