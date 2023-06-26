// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Square, Triangle } = require("./lib/shape.js");


const generateLogo = () => {
    inquirer.prompt([
        {
            name: 'shape',
            type: 'list',
            message: 'Select the shape you want to use for your logo',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            name: 'color',
            type: 'input',
            message: 'Enter a color or hexidecimal code (beginning with #) for the logo text',
        },
        {
            name: 'text',
            type: 'input',
            message: 'Enter up to three characters to include in the logo',
            validate: (input) => {
                if (input.length > 0 && input.length <= 3) {
                    return true;
                } else {
                    return 'Must include 1-3 characters'
                }
            }
        },
        {
            name: 'textColor',
            type: 'input',
            message: 'Enter a color or hexidecimal code (beginning with #) for the logo text',
        },

    ]).then((answers) => {
        console.log(answers);
        let shape = answers.shape;
        if (shape == "Circle") {
            shape = new Circle(answers.color, answers.text, answers.textColor);
        } else if (shape == "Triangle") {
            shape = new Triangle(answers.color, answers.text, answers.textColor);
        } else {
            shape = new Square(answers.color, answers.text, answers.textColor);
        }
        let svgData = shape.render();

        fs.writeFile('./examples/myLogo.svg',
           svgData
            , (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Generating your SVG Logo")
                }
            }
        )
    }
    )
}
generateLogo();