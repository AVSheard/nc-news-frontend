import { decorate, observable } from "mobx";

export class UserInfo {
	constructor() {
		this.user = null;
	}
}

decorate(UserInfo, {
	user: observable,
	loggedIn: observable,
});

export const userInfo = new UserInfo();
