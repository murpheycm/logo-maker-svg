//Function to generate SVG logo

const generateSVG = data => {
    const shape = data.shape;
    const shapeColor = data.shapeColor;
    const textColor = data.textColor;
    const logoText = data.logoText;

    console.log(shape);
    console.log(shapeColor);
    console.log(textColor);
    console.log(logoText);

    let svgString = "";
    // Sets width and height of logo container
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag sets text input layer on top of shape
    svgString += "<g>";
    // Takes user input for shape choice for svg file
    svgString += `${data.shape}`;
}


//Export function to be used by index.js

module.exports = generateSVG;