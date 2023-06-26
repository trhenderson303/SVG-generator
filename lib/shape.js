class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
};

class Circle extends Shape {
    constructor(color, text, textColor) {
    super(color, text, textColor);
    }

    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="75px" fill="${this.textColor}"> ${this.text} </text>
        </svg>`;
    }
};

class Square extends Shape {
    constructor(color, text, textColor) {
    super(color, text, textColor);
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="50" y="0" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="75px" fill="${this.textColor}"> ${this.text} </text>
        </svg>`;
    }
};

class Triangle extends Shape {
    constructor(color, text, textColor) {
    super(color, text, textColor);
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 250,200 50,200" fill="${this.color}" />
        <text x="50%" y="66%" dominant-baseline="middle" text-anchor="middle" font-size="75px" fill="${this.textColor}"> ${this.text} </text>
        </svg>`
    }
};


module.exports = { Shape, Circle, Square, Triangle } 
