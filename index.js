const inquirer = require("inquirer");

const fs = require("fs");

// const { Triangle, Square, Circle} = require(); 

function writeToFile(filename, answers) {
    let svgString = "";

    svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    svgString += "<g>";

    svgString += '${answers.shape';


    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape = "Square") {
        shapeChoice = new Square();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "<g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo");
    });
}

function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What are your initials/company initials?",
                name: "text",
            },

            {
                type: "input",
                message: "Choose text color (color keyword",
                name: "textColor",
            },
            {
                type: "input",
                message: "What shape do you want your logo to be?",
                name: "shape",
            },
            {
                type: "input",
                message: "What color do you want your shape to be?",
                name: "shapeColor",
            },
        ])

        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Must enter no more than 3 characters");
                promptUser();
            } else {
                writeToFile("logo.svg", answers);
            }
        });
}

promptUser();