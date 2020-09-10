const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt([
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
        name: "Please enter your email address.",
        message: ""
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
])

// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions