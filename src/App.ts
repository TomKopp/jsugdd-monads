import { CSSResult, LitElement, TemplateResult, customElement } from 'lit-element';
import { Layout, LayoutMode } from './Layout';
import { LayoutCtx, renderLayout, selectLayout, UserCtx, selectUser } from './helpers';
import { pureCss } from './styles/pureCss.styles';
import Result from 'folktale/result';
import { User } from './User';
import { appStyles, hostStyles, generalStyles } from './styles/styles';
import { Single } from './layouts/Single';
import { Grid } from './layouts/Grid';


/**
 * App Shell
 *
 * Handles User registration and hydration.
 * Handles Layout selection and hydration.
 */
@customElement('mcv-app')
export class App extends LitElement implements UserCtx, LayoutCtx {
	//* Properties and Getter/Setter
	private _user: User;

	get user(): User {
		return this._user;
	}

	set user(val: User) {
		this._user = val;
		this.requestUpdate();
	}

	get layoutMode(): LayoutMode {
		return this.user.layoutMode;
	}

	set layoutMode(val: LayoutMode) {
		this.user.layoutMode = val;
		this.requestUpdate();
	}

	private _layout: Layout;
	private _layoutMap = { [LayoutMode.Single]: Single, [LayoutMode.Grid]: Grid };

	get layout(): Layout {
		if (!(this._layout instanceof Layout) && this.layoutMode !== undefined) {
			this._layout = new this._layoutMap[this.layoutMode]();
		}
		return this._layout;
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			pureCss
			, hostStyles
			, generalStyles
			, appStyles
		];
	}

	//* Callbacks and EventListener
	onUserSelector(ev: Event): void {
		ev.preventDefault();
		const name = (ev.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement;
		this.user = new User(name.value);
	}

	onLayoutSelector(ev: Event): void {
		ev.preventDefault();
		const layoutMode = (ev.target as HTMLFormElement).elements.namedItem('layout') as RadioNodeList;
		this.layoutMode = Number(layoutMode.value) as LayoutMode;
	}


	//* Render methods
	render(): TemplateResult {
		return Result.of(this)
			.chain(selectUser)
			.chain(selectLayout)
			.chain(renderLayout)
			.merge();
	}
}
