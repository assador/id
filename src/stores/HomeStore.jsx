import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import HomeActionTypes from "../constants/HomeActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class HomeStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({
			modulesInstances: {},
			modulesInstancesNum: -1,
			modulesInstancesLastNum: -1,
			// Статичная заглушка: список модулей для конкретных ролей.
			modulesAvailableList : [
				{
					name: "Тестовый модуль №1",
					// Путь к модулю от /src. Другой корень можно задать в HomeActions.
					path: "test/TestModule1.jsx",
					// Свойства по умолчанию для инициализируемого модуля.
					params: {
						param_1_1: "Параметр 1 для Модуля 1",
						param_1_2: "Параметр 2 для Модуля 1",
					},
				},
				{
					name: "Тестовый модуль №2",
					path: "test/TestModule2.jsx",
					params: {
						param_2_1: "Параметр 1 для Модуля 2",
					},
				},
			],
		});
	}
	reduce(state, action) {
		switch(action.type) {
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
