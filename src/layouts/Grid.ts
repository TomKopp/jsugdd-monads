import { CSSResult, TemplateResult, customElement, html } from 'lit-element';
import { hostStyles, maxSize, grid } from '../styles/styles';
import { pureCss } from '../styles/pureCss.styles';
import { Layout } from '../Layout';
import { generalStyles } from '../styles/styles';

@customElement('mcv-grid')
export class Grid extends Layout {
	//* Properties and Getter/Setter
	static get styles(): CSSResult | CSSResult[] {
		return [
			pureCss
			, hostStyles
			, generalStyles
			, maxSize
			, grid
		];
	}


	//* Callbacks and EventListener
	connectedCallback(): void {
		super.connectedCallback();

		for (let i = 0; i < 4; i++) {
			this.requestDUI();
		}
	}


	//* Render methods
	render(): TemplateResult {
		const duis = Array.from(this.duis);

		return html`
<div class="grid">
	<div class="dragHandle-1">&nbsp;</div>
	<div class="dragHandle-2">&nbsp;</div>
	${duis.length
		? duis.map(([, dui], i) => html`<div class="item ${i}">${dui}</div>`)
		: html`<div class="item">No DUIs are set</div>`}
</div>`;
	}
}
