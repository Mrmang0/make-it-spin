import Iterator from '../classes/processing/Iterator'
import {
    setLineColor,
    setLineWidth
} from '../functions/misceleneous'
import Canvas from '../classes/Canvas'
import Line from '../classes/figures/Line'
import Arc from '../classes/figures/Arc'

export default function PartyTime() {
    const Circles = [];
    const canvas = new Canvas('tubes', 'regular-canvas', 800, 500);

    for (let i = 1; i < 3; i++) {
        Circles.push(
            new Arc(canvas.context, i * 40 * i, i * 40 * i, i * 10 + 5,
                new Iterator(Math.PI / 300, 2 * Math.PI, Math.PI / 300),
                () => {
                    setLineColor(canvas.context,`255,255,255`, 1)
                }))
    }



    canvas.context.translate(400, 250);
    for (let i = 0; i < 1; i++) {
        const it = new Iterator(0.3, 0.01, -0.01);
        canvas.pipeline.add(Circles[i].draw.bind(Circles[i]),0 ,()=>false);
        canvas.pipeline.add(Circles[i + 1].draw.bind(Circles[i + 1]), -2,()=>false);
        canvas.pipeline.add(() => {
            setLineWidth(canvas.context,10);
            setLineColor(canvas.context,"255,255,255", it.get());
            // canvas.misc.setRandomLineColor();
            new Line(canvas.context, Circles[i].getCurrentPoint(), {
                X: 200,
                Y: 400
            }).draw();
            canvas.context.rotate(Math.PI / 4);
        }, 0, ()=>false);

    }
}