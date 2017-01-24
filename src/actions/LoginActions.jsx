import LoginActionTypes from "../constants/LoginActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const LoginActions = {
	setMode(mode) {
		AppDispatcher.dispatch({
			type: LoginActionTypes.LOGIN_SET_MODE,
			mode: mode,
		});
	},
	setMessage(message) {
		AppDispatcher.dispatch({
			type: LoginActionTypes.LOGIN_SET_MESSAGE,
			message: message,
		});
	},
	sendForm(login, password) {
		this.setMode("Loading");

		ServerApi.ask("login", {
			"action": "in",
			"login": login,
			"password": password,
		});
	}
};

export default LoginActions;
