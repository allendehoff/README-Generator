const inquirer = require("inquirer");
const fs = require('fs');
// const generate = require("./generateMarkdown")

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
inquirer.prompt(questions).then(function(data){
    const markdown = generateMarkdown(data)
    fs.writeFile("README.md", markdown, function(err) {

        if (err) {
            return console.log(err);
        }
    })
    // console.log(markdown)
})

function generateMarkdown(data){
    return `
# ${data.title}

${data.description}

## Table of Contents
[Installation] (#installation)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
${data.github}
${data.email}
`
}

// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions