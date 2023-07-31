// Jest tests for shapes

// Importing Triangle, Square, Circle classes from shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Testing for a black circle with white text
describe("Test - Circle", () => {
    test("Test for a circle with a black background and white text", () => {
        const shape = new Circle();
        
        shape.setColor("Black");
        textColor.setColor("White");
        
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="Black" />'
        );
        expect(textColor.render()).toEqual(
            '<text x="150" y="115" fill="White" font-size="30" font-family="Arial">Test</text>'
        );
  });
});

// Testing for a orange square with black text
describe("Test - Square", () => {
    test("Test for a square with an orange background and black text", () => {
        const shape = new Square();

        shape.setColor("Orange");
        textColor.setColor("Black");

        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="orange" />'
        );
        expect(textColor.render()).toEqual(
            '<text x="150" y="115" fill="Black" font-size="30" font-family="Arial">Test</text>'
        );
  });
});

// Testing for a blue triangle with gray text
describe("Test - Triangle", () => {
  test("Test for a triangle with a blue background and gray text", () => {
    const shape = new Triangle();
    
    shape.setColor("Blue");
    textColor.setColor("Gray");

    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="Blue" />'
    );
    expect(textColor.render()).toEqual(
        '<text x="150" y="115" fill="Gray" font-size="30" font-family="Arial">Test</text>'
    );
  });
});