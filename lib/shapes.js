// inquirer will ask questions
// will return data object that will be used to generate markdown for svg using shape classes in shapes.js
// and a method called render() part of the shape classes. Use a Shape class constructor and create 
// triangle, circle, and rectangle classes that inherit most of their properties from parent Shape
// will write test using jest for a render function

class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
};

class Circle extends Shape {
    constructor(shape, text, textColor, color) {
        super(text, textColor, color);
        this.shape = shape;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    };
};

class Triangle extends Shape {
    constructor(shape, text, textColor, color) {
        super(text, textColor, color);
        this.shape = shape;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,10 250,180 50,180" fill="${this.color}" />
        
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    };
};

class Rectangle extends Shape {
    constructor(shape, text, textColor, color) {
        super(text, textColor, color);
        this.shape = shape;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="100" x="50" y="50" fill="${this.color}" />
        
        <text x="150" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
    };
};

module.exports = { Shape, Circle, Triangle, Rectangle };