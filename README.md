# SVG Logo Maker
A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

## User Story
>AS a freelance web developer <br>
>I WANT to generate a simple logo for my projects <br>
>SO THAT I don't have to pay a graphic designer <br>

## Acceptance Criteria
> GIVEN a command-line application that accepts user input <br>
> WHEN I am prompted for text <br>
> THEN I can enter up to three characters <br>
> WHEN I am prompted for the text color <br>
> THEN I can enter a color keyword (OR a hexadecimal number) <br>
> WHEN I am prompted for a shape <br>
> THEN I am presented with a list of shapes to choose from: circle, triangle and square <br>
> WHEN I am prompted for the shape's color <br>
> THEN I can enter a color keyword (OR a hexadecimal number) <br>
> WHEN I have entered input for all the prompts <br>
> THEN an SVG file is created named `logo.svg` <br>
> AND the output text "Generated logo.svg" is printed in the command line <br>
> WHEN I open the `logo.svg` file in a browser <br>
> THEN I am shown a 300x200 pixel image that matches the criteria I entered <br>

## Usage
The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a SVG file.

![alt text](./assets/repovideo.gif)

## Installation
1. Clone the SVG Logo Maker github repository
2. CLI: Install node.js
3. CLI: npm init -y
4. CLI: npm i inquirer@8.2.4
5. CLI: node index.js


## Tests
There is one test suite associated with three separate tests for shape, shape color, and text color for all three shapes.

1. Open CLI terminal
2. CLI: npm run test


