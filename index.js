// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Please provide a description of your application.",
  "Now provide any instructions for installing your application.",
  "Now provide necessary usage information for your application.",
  "Now provide any guidelines for contributing to your application.",
  "Now provide any instructions for testing your application.",
  "What is your preferred license for this application?",
  "What is your github username?",
  "What is your email address?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const {
    title,
    description,
    install,
    usage,
    contribute,
    test,
    license,
    github,
    address,
  } = data;
  let badge = "";
  switch (license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Open Data Commons":
      badge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  }
  const readMe =   `
  # ${title}
  ${badge}
  
  This application is licensed with ${license}.
  ## Description
  ${description}
  #### Table of Contents
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [How to Contribute](#how-to-contribute)
  * [Testing](#testing)
  * [Questions](#questions)
 
  # Installation Instructions
  ${install}
  # Usage Information
  ${usage}
  # How to Contribute
  ${contribute}
  # Testing
  ${test}
  # Questions
  Please contact the author with any questions by email at ${address} or via github at ${github}.
  `;
  fs.writeFile(
    fileName,
    readMe,
    (err) => (err ? console.log(err) : console.log("Success!"))
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "install",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "contribute",
      },
      {
        type: "input",
        message: questions[5],
        name: "test",
      },
      {
        type: "list",
        message: questions[6],
        name: "license",
        choices: ["MIT", "Mozilla", "Open Data Commons"],
      },
      {
        type: "input",
        message: questions[7],
        name: "github",
      },
      {
        type: "input",
        message: questions[8],
        name: "address",
      },
    ])
    .then((data) => {
      writeToFile("GENERATEDREADME.md", data);
    });
}

// Function call to initialize app
init();
