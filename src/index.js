import './style.css'
import Canvas from './App/classes/Canvas'
import Arc from './App/classes/figures/Arc'
import Iterator from './App/classes/processing/Iterator'
import drawFan from './App/functions/fan'

// const iterator = new Iterator(
//     0.01*Math.PI,
//     2*Math.PI,
//     0.01*Math.PI)
// const canvas = new Canvas('main-canvas', 'main-canvas', 800, 500);
// const arc = new Arc(canvas.context,10,10,50,iterator);

// canvas.context.translate(400,250);
// canvas.pipeline.add(arc.draw.bind(arc),0,()=>false);

drawFan()