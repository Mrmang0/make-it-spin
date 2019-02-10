import './style.css'
import drawFan from './App/functions/fan'
import tubes from './App/functions/tubes'
import third from './App/functions/third'
import fourth from './App/functions/fourth'
import circle from './App/functions/circle';
import spin from './App/functions/spin';
import majesticRotation, {
    majesticDuoRotation,
    fixedMajesticRotation,
} from './App/functions/majestickRotation'




majesticRotation();
majesticDuoRotation();
fixedMajesticRotation();
spin();
drawFan(1, 1, 12);
drawFan(2, 1, 3);
drawFan(2, 1, 8);
circle();
tubes();
third();
fourth();