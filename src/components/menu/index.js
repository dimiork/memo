import './index.less';
import printMe from '../../print.js';

export default function Menu() {
    var element = document.createElement('div');
    element.classList.add('b-menu');
    var btn = document.createElement('button');
    btn.classList.add('b-menu__button');

    element.innerHTML = ['Hello', 'webpack'].join(' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    element.appendChild(btn);

    return element;
  }


