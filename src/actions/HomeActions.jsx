import HomeActionTypes from "../constants/HomeActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const HomeActions = {
	loadHomeModules(cls, data) {
		ServerApi.ask(cls, data);
	},
	addHomeModule(moduleAvialable, evt) {
		System.import("../components/" + moduleAvialable.path).then(m => {
			AppDispatcher.dispatch({
				type: HomeActionTypes.ADD_HOME_MODULE,
				moduleComponents: m,
				moduleName: moduleAvialable.name,
				moduleParams: moduleAvialable.params,
			});
		}).catch(err => {
			console.log(err);
		});
	},
	setHomeModule(num, evt) {
		AppDispatcher.dispatch({
			type: HomeActionTypes.SET_HOME_MODULE,
			num: num,
		});
	},
};

export default HomeActions;
