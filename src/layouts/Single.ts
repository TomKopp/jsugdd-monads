import { CSSResult, TemplateResult, customElement, html } from 'lit-element';
import { generalStyles, hostStyles, maxSize } from '../styles/styles';
import { pureCss } from '../styles/pureCss.styles';
import { Layout } from '../Layout';

@customElement('mcv-single')
export class Single extends Layout {
	//* Properties and Getter/Setter
	static get styles(): CSSResult | CSSResult[] {
		return [
			pureCss
			, hostStyles
			, generalStyles
			, maxSize
		];
	}


	//* Callbacks and EventListener
	connectedCallback(): void {
		super.connectedCallback();
		this.requestDUI();
	}


	//* Render methods
	render(): TemplateResult {
		const firstDUI = this.duis?.values().next()?.value;

		return html`${firstDUI
			? html`${firstDUI}`
			: html`No DUIs are set`}`;
	}
}
