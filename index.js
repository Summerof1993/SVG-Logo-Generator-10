const inquirer = require("inquirer");
const fs = require("fs");
const { Shape, Circle, Triangle, Rectangle } = require("./lib/shapes");



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
        let newCircleSvg = new Circle(
            data.shape,
            data.text,
            data.textColor,
            data.color
        );
        return newCircleSvg.render();
    }
    else if (data.shape.toLowerCase() === "triangle") {
        let newTriangleSvg = new Triangle(
            data.shape,
            data.text,
            data.textColor,
            data.color
        );
        return newTriangleSvg.render();
    }
    else if (data.shape.toLowerCase() === "rectangle") {
        let newRectangleSvg = new Rectangle(
            data.shape,
            data.text,
            data.textColor,
            data.color
        );
        return newRectangleSvg.render();
    };
};

function writeSvgFile(fileName, data) {
    fs.writeFile(fileName, generateSvgFile(data), (err) =>
        err ? console.error(err) : console.log("Generated logo.svg"))
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            if (data.text.length > 3) {
                throw new Error("text cannot be greater than 3 letters")
            }
            else {
                writeSvgFile("./logo.svg", data)
            }
        }
        )
};

init();