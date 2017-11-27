import './index.less';
import printMe from '../../print.js';
import { cube } from '../../math.js';

export default function Menu() {
    var element = document.createElement('div');
    element.classList.add('b-pg');

    var pre = document.createElement('pre');
    pre.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    var btn = document.createElement('button');
    btn.classList.add('b-pg__button');

    element.innerHTML = ['Hello', 'webpack'].join(' ');

    btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = () => console.log('Hi, Dude and Lol!');
    btn.onclick = printMe;
    
    element.appendChild(pre);
    element.appendChild(btn);


    return element;
  }


