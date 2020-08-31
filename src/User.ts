import { LayoutMode } from './Layout';
import { v4 as uuid } from 'uuid';


export class User {
	//* Properties and Getter/Setter
	id: string = uuid();

	displayName: string;

	layoutMode: LayoutMode;


	//* Constructor and static functions
	constructor(displayName?: string) {
		this.displayName = displayName || `User-${this.id.slice(0, 8)}`;
	}

	static save(val: User): void {
		try {
			window.localStorage.setItem('user', JSON.stringify(val));
		} catch (err) {
			console.error(err);
		}
	}
}
