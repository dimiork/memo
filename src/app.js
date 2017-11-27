import Menu from './components/menu/';
import PG from './components/playGround/';
import printMe from './print.js';

var components = [Menu, PG];

components.forEach((component) => {
	
	componentAppend(component());
}) 

function componentAppend(component) {
    document.body.appendChild(component);
}

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}