import Canvas from '../classes/Canvas'
import Iterator from '../classes/processing/Iterator';
import rotate from '../classes/Geometry/Rotate'
import Point from '../classes/additional/Point';
import Circle from '../classes/additional/Circle';

export default function majesticRotation() {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('spin', 'regular-canvas', 1000, 800, wrapper)
    const iterator = new Iterator(Math.PI / 720, 2 * Math.PI, Math.PI / 720)
    const opIT = new Iterator(0.01, 1, 0.00005)
    const radius = 200;
    const circles = [
        new Circle(new Point(500, 400), radius),
    ];
    canvas.pipeline.setTickDelay(30);

    canvas.pipeline.add(() => {
      
        canvas.beginPath();
        // canvas.clear();
        let angle = iterator.get()
        canvas.setOpacity(opIT.get());
        circles[0].currentPoint = rotate.spinAroundCenter(circles[0].currentPoint, circles[0].center, angle,-1);
        canvas.moveTo(circles[0].currentPoint);
        let p = rotate.spinAroundCenter(circles[0].currentPoint, circles[0].center, angle,-1)
        canvas.lineTo(p);
        canvas.stroke();
    }, 10, x => false)
}

export function majesticDuoRotation() {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('spin', 'regular-canvas', 1000, 800, wrapper)
    const iterator = new Iterator(Math.PI / 360, 2 * Math.PI, Math.PI / 360)
    const radius = 200;
    const circles = [
        new Circle(new Point(500, 400), radius),
    ];

    canvas.pipeline.setTickDelay(35);
    canvas.pipeline.add(() => {
        canvas.beginPath();
        canvas.clear();
        let angle = iterator.get()

        canvas.moveTo(circles[0].currentPoint);
        circles[0].currentPoint = rotate.spinAroundCenter(circles[0].currentPoint, circles[0].center, angle);
        canvas.moveTo(circles[0].currentPoint);
        let p = rotate.spinAroundCenter(circles[0].currentPoint, circles[0].center, angle)
        canvas.lineTo(p);
        canvas.stroke();
    }, 10, x => false)
}

export function fixedMajesticRotation() {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('spin', 'regular-canvas', 1000, 800, wrapper)
    const iterator = new Iterator(Math.PI / 120, 2 * Math.PI, Math.PI / 120)
     const opIT = new Iterator(0.01, 0.5, 0.000005)
    const radius = 200;
    
    canvas.pipeline.setTickDelay(17);

    canvas.pipeline.add(() => {
        const circles = [
            new Circle(new Point(500, 400), radius),
        ];
        canvas.beginPath();
        // canvas.clear();
        let angle = iterator.get()
        canvas.setOpacity(opIT.get());
        circles[0].currentPoint = rotate.spinAroundCenter(circles[0].currentPoint, circles[0].center, angle,1);
        canvas.moveTo(circles[0].currentPoint);
        let p = rotate.spinAroundCenter(circles[0].currentPoint, circles[0].center, angle,1)
        canvas.lineTo(p);
        canvas.stroke();
    }, 10, x => false)
}