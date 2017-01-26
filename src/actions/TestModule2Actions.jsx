import TestModule2ActionTypes from "../constants/TestModule2ActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";
import ServerApi from "../ServerApi.jsx";

const TestModule2Actions = {
	setTestState(name, value, evt) {
		AppDispatcher.dispatch({
			type: TestModule2ActionTypes.SET_STATE,
			name: name,
			value: value,
		});
	},
};

export default TestModule2Actions;
