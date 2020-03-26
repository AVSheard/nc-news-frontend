/** @format */
import { decorate, observable } from "mobx";

export class UserInfo {
	constructor() {
		this.user = null;
		this.loggedIn = false;
	}
}

decorate(UserInfo, {
	user: observable,
	loggedIn: observable
});

export const userInfo = new UserInfo();
