//Funtion to generate SVG logo

const generateSVG = data => {
    const shape = data.shape;
    const shapeColor = data.shapeColor;
    const textColor = data.textColor;
    const logoText = data.logoText;

    console.log(shape);
    console.log(shapeColor);
    console.log(textColor);
    console.log(logoText);
}


//Export funciton to be used by index.js

module.exports = generateSVG;