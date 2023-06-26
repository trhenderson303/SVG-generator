const Circle = require("./../lib/circle");

describe("Circle", () => {
it("renders a green circle", () => {
    const shape = new Circle("green");
    const renderShape = shape.render();
    expect(renderShape).toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
    <circle cx="50%" cy="50%" r="100" fill="green" />`);
});
});