import { App } from './App';
import { pureCss } from './styles/pureCss.styles';


const css = document.createElement('style');
css.innerHTML = `${pureCss}
html,
body {
	display: flow-root;
	height: 100vh;
	width: 100vw;
}`;

document.head.append(css);
document.body.append(new App());
