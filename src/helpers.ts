import { Layout, LayoutMode } from './Layout';
import Result from 'folktale/result';
import { User } from './User';
import { html } from 'lit-element';


const userForm = (handler) => html`
<form @submit="${handler}" autocomplete="on" class="pure-form" name="UserSelector">
<h1>Welcome to MCV</h1>
<label>
<p>Who are you?<br>
Please enter your name, so others know who you are.
</p>
<input class="input full-width" name="name" type="text" placeholder="Your name here" required>
</label>
<button type="submit" class="pure-button pure-button-primary">Ok</button>
</form>`;

const layoutForm = (handler) => html`
<form @submit="${handler}" autocomplete="on" class="pure-form" name="LayoutSelector">
<h1>Welcome to MCV</h1>
<p>Please choose a layout to work with.</p>
<div class="pure-menu">
<ul class="pure-menu-list">
<li class="pure-menu-item"><label class="pure-radio"><input name="layout" type="radio" value="${LayoutMode.Single}">Single View</label></li>
<li class="pure-menu-item"><label class="pure-radio"><input name="layout" type="radio" value="${LayoutMode.Grid}">Grid View</label></li>
</ul>
</div>
<button type="submit" class="pure-button pure-button-primary">Ok</button>
</form>`;


export type UserCtx = {
	user: User | null | undefined;
	onUserSelector: (e: Event) => void;
};

export type LayoutCtx = {
	layout: Layout | null | undefined;
	onLayoutSelector: (e: Event) => void;
};


export const selectUser = (ctx: UserCtx): Result => (
	ctx.user instanceof User
		? Result.Ok(ctx)
		: Result.Error(userForm(ctx.onUserSelector))
);

export const selectLayout = (ctx: LayoutCtx): Result => (
	ctx.layout instanceof Layout
		? Result.Ok(ctx)
		: Result.Error(layoutForm(ctx.onLayoutSelector))
);

export const renderLayout = (ctx: LayoutCtx): Result => Result.Ok(html`${ctx.layout}`);
