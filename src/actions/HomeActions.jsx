import HomeActionTypes from "../constants/HomeActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const HomeActions = {
	addHomeModule(module, evt) {
		AppDispatcher.dispatch({
			type: HomeActionTypes.ADD_HOME_MODULE,
			module: module,
		});
	},
	setHomeModule(id, evt) {
		AppDispatcher.dispatch({
			type: HomeActionTypes.SET_HOME_MODULE,
			id: id,
		});
	},
};

export default HomeActions;
