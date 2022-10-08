// Required packages
const inquirer = require("inquirer");
const fs = require("fs");

// Required module exports
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern");
const { inherits } = require("util");

// Employee Array
const employeesArray = [];

// Questions Array for all Employees
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id"
    },
    {
        type: "input",
        message: "what is your email?",
        name: "email"
    },
    {
        type: "list",
        message: "What is your title?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }
];

// Questions for manager role
// Questions for Engineer role
// Questions for intern role

// Function to initialize the application

// Function to create new employees

// Function that asks if you would like to add an employee. This will keep coming up until you are finished. Then it will generate the index.html file

// function call to initialize the app
// init();