const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test for triangle with red color", () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red"/>`
        );
    });
});

describe("Circle test", () => {
    test("test for circle with #ffffff color", () => {
        const shape = new Circle();
        shape.setColor("#ffffff");
        expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="pink"/>`);
    });
});

describe("Square test", () => {
    test("test for a square with a pink color", () => {
        const shape = new Square();
        shape.setColor("pink");
        expect(shape.render).toEqual(
            `<circle cx="150" cy="115" r="80" fill="#ffffff"/>`);
    });
});
