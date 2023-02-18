const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    question: "What is the title of your project?",
  },
  {
    question: "Please provide a description of your project.",
  },
  {
    question: "What installation requirements are there if any?",
  },
  {
    question: "Please provide details of usage for your application.",
  },
  {
    question: "Do you wish to provide a liscence details?",
  },
  {
    question: "Please provide the names of any contributors.",
  },
  {
    question: "Please provide a details on how to test your application.",
  },
  {
    question:
      "Please provide your email address so users who have questions can contact you.",
  },
];

// creating a function to ask the user questions on the command line

const askUser = () => {
  inquirer.createPromptModule([
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
      type: "input",
      name: "usage",
      message: questions[3].question,
    },
    {
      type: "input",
      name: "",
    },
  ]);
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
