
// Establishes a Shape class. 
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color
    }

    render() {
        return '';
    }

}

// Each below extends the shape class into three different shapes, formatted as listed below. 
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 10 244, 182 56,182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

module.exports = { Circle, Triangle, Square };

