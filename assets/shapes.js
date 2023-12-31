// Exports `Triangle`, `Circle`, and `Square` classes

// Shape class with constructor to define each shape
class Shape {
    constructor() {
      this.shapeColor = "";
    }
    setColor(color) {
      this.shapeColor = color;
    }
  }

  class TextColor {
    constructor() {
      this.textColor = "";
    }
    setColor(color) {
      this.textColor = color;
    }
    render() {
      return `<text x="150" y="115" fill="${this.textColor}" font-size="30" font-family="Arial">Test</text>`;
    }
  }
  
  // Triangle, Square, and Circle classes inherits Shape class
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />`;
    }
  }
  
  // Exports Square, Triangle, and Circle classes to index.js
  module.exports = {Triangle, Square, Circle, TextColor};