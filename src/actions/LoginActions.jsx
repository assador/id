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
	sendForm(login, password) {
		this.setMode("loading");
		ServerApi.ask("login", {
			"mode": "in",
			"login": login,
			"password": password,
		});
	}
};

export default LoginActions;
