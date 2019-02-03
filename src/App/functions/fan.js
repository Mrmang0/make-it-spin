import Canvas from '../classes/Canvas'
import Line from '../classes/figures/Line'
import Iterator from '../classes/processing/Iterator'
import {
    setLineColor
} from '../functions/misceleneous'

export default function drawFan() {
    const lines = [];    
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('fan', 'regular-canvas', 800, 500,wrapper);
    const iterator = new Iterator(1, 100, 1);
    canvas.context.translate(400, 250);
    setLineColor(canvas.context,"255,255,255", 0.01);
    canvas.pipeline.setTickDelay(5);
    canvas.pipeline.add(() => {
        const line = new Line(canvas.context,{
            X: 0,
            Y: 0
        }, {
            X: iterator.peek(),
            Y: iterator.get()
        });

        if (lines.length >= 3) {

            new Line(canvas.context,lines[0], {
                X: (iterator.peek() + 100) * Math.cos(Math.PI / 2),
                Y: iterator.get()
            }).draw();
        } else {

        }

        if (iterator.peek() == 100) {
            canvas.context.rotate(Math.PI / 3);
            lines.push(line.endPoint);
        }


    }, 0, () => {
        return false
    })
}