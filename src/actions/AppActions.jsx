import AppActionTypes from "../constants/AppActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const AppActions = {
	/**
	 * cls — is an ID of requested modeule
	 * data — is an Object with params to send {'param1': 'val1', 'param2': 'val2'...}
	*/
	loadModule(cls, data) {
		ServerApi.ask(cls, data);
		this.setModule("Loading");
	},
	setModule(cls, data) {
		AppDispatcher.dispatch({
			type: AppActionTypes.SET_APP_MODULE,
			cls: cls,
			data: data,
		});
	}
};

export default AppActions;
