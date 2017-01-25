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
			components: {},
			componentLastId: -1,
			componentActiveId: -1,
			// Статичная заглушка: список модулей для конкретных ролей.
			modules : [
				{
					type: "TestModule1",
					// Свойства по умолчанию для инициализируемого модуля.
					props: {
						prop_1_1: "Параметр 1 для Модуля 1",
						prop_1_2: "Параметр 2 для Модуля 1",
					},
				},
				{
					type: "TestModule2",
					props: {
						prop_2_1: "Параметр 1 для Модуля 2",
					},
				},
			],
		});
	}
	reduce(state, action) {
		switch(action.type) {
			case HomeActionTypes.ADD_HOME_MODULE :
				state = state.update("componentLastId", n => n + 1);
				state = state.update("componentActiveId", n => n + 1);
				state = state.update("components", components => {
					components[state.get("componentLastId")] = React.createElement(
						action.module.type,
						action.module.props,
					);
					return components;
				});
				return state;
			default :
				return state;
		}
	}
}

export default new HomeStore();
