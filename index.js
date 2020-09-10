// requirements for npm
const inquirer = require("inquirer");
const fs = require('fs');

//array containing questions for inquirer prompt
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions for users of this application."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter any necessary usage information for users."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter instructions/guidelines for contributing to this project."
    },
    {
        type: "input",
        name: "test",
        message: "Please enter instructions for testing this application."
    },
    {
        type: "input",
        name: "github",
        message: "Please enter you GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose the license you would like to use.",
        choices: [
            "Apache",
            "Boost",
            "BSD-3",
            "Eclipse",
            "GNU GPL v3",
            "IBM",
            "ISC",
            "MIT",
            "Mozilla",
            "Unlicense",
            "WTFPL"
        ]
    }
]

//array containing urls ofr license badges
const badges = [
    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
]

//function to prompt user in command line
inquirer.prompt(questions).then(function(data){
    
    //runs function to generate content of markdown and store it to a variable
    const markdown = generateMarkdown(data)

    //creates readme file using content created above
    fs.writeFile("README.md", markdown, function(err) {

        if (err) {
            return console.log(err);
        }

    })
})

//function to create markdown file with user inputs
function generateMarkdown(data){
    const badge = badges[questions[8].choices.indexOf(data.license)];
    return `
${badge}
# ${data.title}

${data.description}

## Table of Contents
[Installation] (#installation)


### Installation
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### Contributing
${data.contribution}

### Tests
${data.test}

### Questions
${data.github}
${data.email}
`
}
