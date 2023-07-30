// Jest tests for shapes

// Importing Triangle, Square, Circle classes from shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Testing for a black triangle with white text
describe("Test - Circle", () => {
    test("Test for a circle with a black background", () => {
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

// Unit testing -> testing for a square with a purple background to render
describe("Test - Square", () => {
    test("Test for a square with an orange background", () => {
        const shape = new Square();

        shape.setColor("Orange");
        textColor.setColor("Black");

        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="purple" />'
        );
        expect(textColor.render()).toEqual(
            '<text x="150" y="115" fill="Black" font-size="30" font-family="Arial">Test</text>'
        );
  });
});

// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Test - Triangle", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle();
    shape.setColor("#ca00ca");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});