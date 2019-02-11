import Canvas from '../classes/Canvas'
import Iterator from '../classes/processing/Iterator';
import rotate from '../classes/Geometry/Rotate'
import Point from '../classes/additional/Point';
import Circle from '../classes/additional/Circle';
import Line from '../classes/geometry/Line'
import {
    getRndInteger
} from './misceleneous';


export default function eclipse() {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('spin', 'regular-canvas', 1000, 800, wrapper)
    const iterator = new Iterator(Math.PI / 720,2* Math.PI, Math.PI / 720)
    const rI = new Iterator(1,300,1);
    const radius = 100;
    // canvas.setColor(`255,192,203`);

    canvas.pipeline.setTickDelay(16)
    canvas.pipeline.add(() => {
        const circles = [
            new Circle(new Point(300, 300), radius),
            new Circle(new Point(600, 600), radius/4),

        ];

        const circlePoints = [];
        let bl = 1
        canvas.setOpacity(0.01);
        // canvas.clear();
        circles.map(x => {
            x.currentPoint = rotate.spinAroundCenter(x.currentPoint, canvas.center, iterator.getSmooth(), 1)
            circlePoints.push(x.currentPoint);
        })

        const lines = Line.GetLineArray(circlePoints);
        canvas.beginPath();
        lines.map(x => {
            canvas.moveTo(x.startPoint);
            canvas.lineTo(x.endPoint);
        })
        canvas.stroke();
    }, 10, x => iterator.rounds == 1);

}