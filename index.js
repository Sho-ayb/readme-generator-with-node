const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    question: "What is the title of the project?",
  },
  {
    question: "Please provide a description of the project.",
  },
  {
    question: "Please provide details if any, on installing the application.",
  },
  {
    question: "Please provide details for using the application.",
  },
  {
    question:
      "Please choose a licence for the project from the list below. Here are useful links providing details on licences https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#licenses and https://choosealicense.com/",
  },
  {
    question: "Please provide details on contribution guidelines.",
  },
  {
    question: "Please provide a details on how to test the application.",
  },
  {
    question: "Please provide your Github URL.",
  },
  {
    question:
      "Please provide your email address: so users who have questions can contact you.",
  },
];

// creating a function to ask the user questions on the command line

const askUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0].question,
      },
      {
        type: "input",
        name: "description",
        message: questions[1].question,
      },
      {
        type: "input",
        name: "installation",
        message: questions[2].question,
      },
      {
        type: "editor",
        name: "usage",
        message: questions[3].question,
      },
      {
        type: "list",
        name: "licence",
        message: questions[4].question,
        choices: [
          "MIT License",
          "Apache License 2.0",
          "GPL License (aka GNU General Public License v3.0)",
          "BSD License",
          "The Unlicense",
        ],
        default: "MIT license",
      },
      {
        type: "editor",
        name: "guidelines",
        message: questions[5].question,
      },
      {
        type: "editor",
        name: "testapp",
        message: questions[6].question,
      },
      {
        type: "input",
        name: "githuburl",
        message: questions[7].question,
      },
      {
        type: "input",
        name: "emailaddress",
        message: questions[8].question,
      },
    ])
    .then((answers) => {
      console.log(answers);

      writeFile("readmeSample.md", generateMarkdown(answers));
    });
};

// function to write README file
const writeFile = (fileName, rawData) => {
  const data = Buffer.from(rawData, "utf8");

  fs.writeFile(fileName, data, (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The file has the following contents: ");
      console.log(fs.readFileSync(fileName, "utf8"));
    }
  });
};

// function to initialize program
const init = () => {
  askUser();
};

// function call to initialize program
init();
