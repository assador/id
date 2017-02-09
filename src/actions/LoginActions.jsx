import LoginActionTypes from "../constants/LoginActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const LoginActions = {
	setData(data) {
		AppDispatcher.dispatch({
			type: LoginActionTypes.LOGIN_SET_DATA,
			data: data,
		});
	},
	sendForm(login, password) {
		this.setData({
			mode: "Loading",
			email: login,
		});
		ServerApi.ask("login", {
			"action": "in",
			"login": login,
			"password": password,
		});
	}
};

export default LoginActions;
