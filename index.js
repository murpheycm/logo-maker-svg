//Packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const { Triangle, Square, Circle } = require("./assets/shapes.js");


//Application questions for SVG creation
const questions = [
    {
        type: "list",
        name: "shape",
        message: "What shape would you like for your logo?",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like the logo shape to be?",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like the logo text to be?",
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
    const shape = data.shape;
    const shapeColor = data.shapeColor;
    const textColor = data.textColor;
    const logoText = data.logoText;

    //Start of SVG string to creat SVG logo
     let svgHTML = "";
     svgHTML = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
     svgHTML += "<g>";
     svgHTML += `${shape}`;
 
     
     //User input --> logo shape
     if (shape === "Triangle") {
         shapeChoice = new Triangle();
         svgHTML += `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`;
     }
     if (data.shape === "Square") {
         shapeChoice = new Square();
         svgHTML += `<rect x="73" y="40" width="160" height="160" fill="${shapeColor}"/>`;
     };
     if (data.shape === "Circle") {
         shapeChoice = new Circle();
         svgHTML += `<circle cx="150" cy="115" r="80" fill="${shapeColor}"/>`;
     };
 
     //End of SVG string; User input --> logo text
     svgHTML += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${textColor}">${logoText}</text>`;
     svgHTML += "</g>";
     svgHTML += "</svg>";
    
    
    
    fs.writeFile(fileName, svgHTML, function (err) {
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
        console.log("Hit init function!");
        writeToFile("logo.svg", data);

    });
};


//Initialization of app upon CLI call
init();
