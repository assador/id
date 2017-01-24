import AppActionTypes from "../constants/AppActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const AppActions = {
	/**
	 * cls — is an ID of requested module
	 * data — is an Object with params to send {'param1': 'val1', 'param2': 'val2'...}
	*/
	loadModule(cls, data) {
		ServerApi.ask(cls, data);
		AppActions.setModule("Loading");
	},
	setModule(cls, data) {
		AppDispatcher.dispatch({
			type: AppActionTypes.SET_APP_MODULE,
			cls: cls,
			data: data,
		});
	},
	logOut() {
		ServerApi.ask("login", {action: "out"});
		AppActions.setModule("Loading");
	}
};

export default AppActions;
