const inquirer = require("inquirer");
const fs = require("fs");
const Shapes = require("./lib/shapes");
const Circle = require("./lib/shapes")
const Triangle = require("./lib/shapes")
const Rectangle = require("./lib/shapes")


const questions = [
    {
        type: "input",
        message: "Choose 3 letters or less for your SVG logo",
        name: "text",
    },
    {
        type: "input",
        message: "Enter the color of your text as a color keyword or hexadecimal",
        name: "textColor",
    },
    {
        type: "input",
        message: "What color would you like your SVG to be. Enter a color keyword or hexadecimal",
        name: "color",
    },
    {
        type: "list",
        message: "What shape would you like your SVG to be?",
        choices: [
            "circle",
            "triangle",
            "rectangle"
        ],
        name: "shape",
    }
];

function generateSvgFile(data) {
    if (data.shape.toLowerCase() === "circle") {
        const newCircleSvg = new Circle(
            data.shape,
            data.text,
            data.textColor,
            data.color
        );
    }
    else if (data.shape.toLowerCase() === "triangle") {
        const newCircleSvg = new Triangle(
            data.shape,
            data.text,
            data.textColor,
            data.color
        );
    }
    else if (data.shape.toLowerCase() === "rectangle") {
        const newCircleSvg = new Rectangle(
            data.shape,
            data.text,
            data.textColor,
            data.color
        );
    };
};

function writeSvgFile (fileName, data) {
    fs.writeFile(fileName, generateSvgFile(data), (err) => {
        err ? console.error(err) : console.log( "Generated logo.svg")
    })
}

function init() {
    inquirer.prompt(questions)
    .then((data) => 
        writeSvgFile("logo.svg", data)
    )
};

init();