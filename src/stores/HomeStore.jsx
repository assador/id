import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import AppDispatcher from "../Dispatcher.jsx";
import HomeActionTypes from "../constants/HomeActionTypes.jsx";

class HomeStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({
			modulesInstances: {},
			modulesInstancesNum: -1,
			modulesInstancesLastNum: -1,
			modulesAvailableList : null,
		});
	}
	reduce(state, action) {
		switch(action.type) {
			case HomeActionTypes.HOME_MODULES_LIST :
				return state.set("modulesAvailableList", action.modulesAvailableList);
			case HomeActionTypes.ADD_HOME_MODULE :
				const newNum = state.get("modulesInstancesLastNum") + 1;
				state = state.set("modulesInstancesLastNum", newNum);
				state = state.set("modulesInstancesNum", newNum);
				action.moduleParams.key = action.moduleParams.num = newNum;
				action.moduleParams.name = action.moduleName;
				state = state.update("modulesInstances", i => {
					i[state.get("modulesInstancesLastNum")] = React.createElement(
						// Если у модуля есть default, то default. Если нет, то первый.
						action.moduleComponents.default
							? action.moduleComponents.default
							: action.moduleComponents[Object.keys(action.moduleComponents)[0]]
						, action.moduleParams
					);
					return i;
				});
				return state;
			case HomeActionTypes.SET_HOME_MODULE :
				return state.set("modulesInstancesNum", action.num);
			default :
				return state;
		}
	}
}

export default HomeStore;
