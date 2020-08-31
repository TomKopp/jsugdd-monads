import { LitElement, property } from 'lit-element';


export enum LayoutMode {
	Single
	, Grid
}

export enum LayoutEvents {
	RequestDUI = 'requestDUI'
	, RemoveDUI = 'removeDUI'
}


export abstract class Layout extends LitElement {
	//* Properties and Getter/Setter
	@property({ attribute: false })
	duis: Map<string | number | symbol, object> = new Map();


	//* Callbacks and EventListener
	requestDUI(): boolean {
		return this.dispatchEvent(new CustomEvent(LayoutEvents.RequestDUI, {
			detail: this
			, bubbles: true
			, composed: true
		}));
	}

	removeDUI(DUIToRemove: string): boolean {
		return this.dispatchEvent(new CustomEvent(LayoutEvents.RemoveDUI, {
			detail: DUIToRemove
			, bubbles: true
			, composed: true
		}));
	}
}
