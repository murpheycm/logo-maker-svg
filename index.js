//Packages needed for application

const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const generateSVG = require("./assets/generateSVG.js");
const { Triangle, Square, Circle } = require("./assets/shapes.js");

//Application questions for SVG creation

const questions = [
    {
        type: "list",
        name: "shape",
        message: "What shape would you like for your logo?",
        choices: ["square", "circle", "triangle"],
    },
    {
        type: "list",
        name: "shapeColor",
        message: "What color would you like the logo shape to be?",
        choices: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray"],
    },
    {
        type: "list",
        name: "textColor",
        message: "What color would you like the logo text to be?",
        choices: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray"],
    },
    {
        type: "input",
        name: "logoText",
        message: "Please enter up to three letters for your logo:",
        validate: function (input) {
            if (input.length > 3) {
                            return console.log("Please provide three or less characters:");
                        } else {
                            return true;
                        }
        }
    }
];

//Function to write the SVG file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Your SVG file has been created!");
        }
    });
};

//Function to initialize the application

function init() {
    inquirer.prompt(questions).then(function (data) {        
        writeToFile("logo.svg", generateSVG(data));
    });
};

init();