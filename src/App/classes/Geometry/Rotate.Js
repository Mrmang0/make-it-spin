import Point from '../additional/Point'

 class Rotate {
    constructor() {

    }

    spinAroundCenter(point, center, angle) {
        let newX = center.X + (point.X - center.X) * Math.cos(angle) - (point.Y - center.Y) * Math.sin(angle);
        let newY = center.Y + (point.Y - center.Y) * Math.cos(angle) + (point.X - center.X) * Math.sin(angle);
        return new Point(newX, newY);
    }

    spinAroundSelf(point, angle) {
        let newX = point.X * Math.cos(angle) - point.Y * Math.sin(angle);
        let newY = point.Y * Math.cos(angle) + point.X * Math.sin(angle);
        return new Point(newX, newY);
    }
}

const rotate = new Rotate();
export default rotate;