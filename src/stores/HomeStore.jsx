import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import AppDispatcher from "../Dispatcher.jsx";
import HomeActionTypes from "../constants/HomeActionTypes.jsx";

/**
 * Основная архитектура — организация инстансов модулей в приложении — здесь.
 * Хомяк хранит в своём сторе в объекте modulesInstances создаваемые в процессе
 * работы приложения инстансы модулей, каждый с уникальным числом props.num,
 * которое одновременно является ключом инстанса в modulesInstances.
 * Число modulesInstancesNum — номер активного в данных момент времени инстанса.
 * Массив modulesAvailableList — список доступных текущему пользователю модулей.
 */
class HomeStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({
			sidebarMode: {top: 2, right: 1, bottom: 1, left: 2},
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
			case HomeActionTypes.SET_HOME_SBM :
				let modeCurrent = state.get("sidebarMode")[action.sidebar];
				let modeToSet = null;
				let ceiling = action.ceiling ? action.ceiling : 3;
				if(action.mode === "bigger") {
					if(modeCurrent < ceiling) {
						modeToSet = modeCurrent + 1;
					} else {
						modeToSet = ceiling;
					}
				} else if(action.mode === "smaller") {
					if(modeCurrent > 0) {
						modeToSet = modeCurrent - 1;
					} else {
						modeToSet = 0;
					}
				}
				if(modeToSet === null) {modeToSet = action.mode;}
				state = state.update("sidebarMode", sb => {
					sb[action.sidebar] = modeToSet;
					return sb;
				});
				return state;
			default :
				return state;
		}
	}
}

export default HomeStore;
