const { Shape, Circle, Triangle, Rectangle } = require("./shapes")


describe("Shapes", () => {
    describe("Circle", () => {
        it("should take in a shape color input and the render method should give \
        out a string for the SVG file with the given shape color", () => {
            const newCircle = new Circle();
            newCircle.color = "blue";
            newCircle.textColor = "green";
            newCircle.text = "svg"
            expect(newCircle.render()).toContain('<circle cx="150" cy="100" r="80" fill="blue" />')
        })
    })
});

describe("Shapes", () => {
    describe("Triangle", () => {
        it("should take in a shape color input and the render method should give \
        out a string for the SVG file with the given shape color", () => {
            const newTriangle = new Triangle();
            newTriangle.color = "blue";
            newTriangle.textColor = "green";
            newTriangle.text = "svg"
            expect(newTriangle.render()).toContain('<polygon points="150,10 250,180 50,180" fill="blue" />')
        })
    })
});

describe("Shapes", () => {
    describe("Rectangle", () => {
        it("should take in a shape color input and the render method should give \
        out a string for the SVG file with the given shape color", () => {
            const newRectangle = new Rectangle();
            newRectangle.color = "blue";
            newRectangle.textColor = "green";
            newRectangle.text = "svg"
            expect(newRectangle.render()).toContain('<rect width="200" height="100" x="50" y="50" fill="blue" />')
        })
    })
})