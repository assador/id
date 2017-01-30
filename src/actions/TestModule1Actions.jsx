import TestModule1ActionTypes from "../constants/TestModule1ActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const TestModule1Actions = {
	addModuleState(num) {
		AppDispatcher.dispatch({
			type: TestModule1ActionTypes.ADD_MODULE_STATE,
			num: num,
		});
	},
	setModuleState(num, p) {
		AppDispatcher.dispatch({
			type: TestModule1ActionTypes.SET_MODULE_STATE,
			num: num,
			p: p,
		});
	},
};

export default TestModule1Actions;
