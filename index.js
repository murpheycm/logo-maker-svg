// Runs the application using imports from lib/
// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
// 
// You may need to add additional files in the lib folder for handling user input, writing to a file, etc. Writing tests for these additional files is optional.

//Packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const generateSVG = require("./assets/generateSVG");
const shapes = require("./assets/shapes");

//Application questions for SVG creation

const questions = [
    {
        type: "select",
        name: "shape",
        message: "What shape would you like for your logo?",
        choices: ["square", "circle", "triangle"],
    },
    {
        type: "select",
        name: "colorShape",
        message: "What color would you like the logo shape to be?",
        choices: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray"],
    },
    {
        type: "select",
        name: "colorText",
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
    fs.writeFile('logo.svg', data, function (err) {
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