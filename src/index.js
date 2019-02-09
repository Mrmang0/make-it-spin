import './style.css'
import Canvas from './App/classes/Canvas'
import Arc from './App/classes/figures/Arc'
import Iterator from './App/classes/processing/Iterator'
import drawFan from './App/functions/fan'
import tubes from './App/functions/tubes'
import third from './App/functions/third'
import fourth from './App/functions/fourth'
import circle from './App/functions/circle';
import spin from './App/functions/spin'




spin();
drawFan(1,1,12);
drawFan(2,1,3);
drawFan(2,1,8);
circle();
tubes();
third();
fourth();