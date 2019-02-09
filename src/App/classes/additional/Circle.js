import Point from "./Point";

export default class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
        this.cornerPoint = new Point(center.X - radius, center.Y - radius);
        this.currentPoint = this.cornerPoint;
    }
}