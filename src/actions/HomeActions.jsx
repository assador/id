import HomeActionTypes from "../constants/HomeActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const HomeActions = {
	getRole() {
		AppDispatcher.dispatch({
			type: HomeActionTypes.HOME_GET_ROLE,
		});
	},
};

export default HomeActions;
