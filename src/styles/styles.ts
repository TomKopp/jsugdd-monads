import { CSSResult, css } from 'lit-element';

export const generalStyles: CSSResult = css`
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.full-width {
	width: 100%;
}
h1 {
	font-size: 3rem;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 400;
	margin: 1rem 0;
}
`;

export const hostStyles: CSSResult = css`
:host { display: block; }
:host([hidden]) { display: none; }
`;

export const maxSize: CSSResult = css`
:host {
	height: 100%;
	width: 100%;
}`;

export const appStyles: CSSResult = css`
:host {
	display: flex;
	height: 100vh;
	width: 100vw;
	align-items: center;
	justify-content: center;
}
.pure-form {
	background-color: #EEE;
	border-radius: 3px;
	border: 1px solid #666;
	color: #666;
	display: flex;
	height: 80%;
	max-height: 475px;
	max-width: 632px;
	width: 80%;
    align-items: center;
    flex-direction: column;
}
.pure-form > * {
	width: 380px;
}
.layout-selector {
	display: flex;
	padding: 0;
}
.layout-selector > li {
	display: block;
}
`;

export const grid = css`
.grid {
	display: grid;
	grid-template-columns: 1fr .5em 1fr;
	grid-template-rows: 1fr .5em 1fr;
	width: 100%;
	height: 100%;
}
[class^="dragHandle"] {
	background-color: #EEE;
}
.dragHandle-1 {
	grid-column: 2 / 3;
	grid-row: 1 / -1;
}
.dragHandle-2 {
	grid-column: 1 / -1;
	grid-row: 2 / 3;
}`;

export const tab = css`
.wrapper {
	display: grid;
	grid-template-columns: minmax(5em, 20%) auto;
	height: 100%;
	width: 100%;
}

.pure-menu {
	background-color: #EEE;
	overflow: hidden auto;
}
.pure-menu-selected > .pure-menu-link {
	border: 1px solid #666;
}
`;
