import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import HomeActionTypes from "../constants/HomeActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class HomeStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({cls: ""});
	}
	reduce(state, action) {
		switch(action.type) {
			case HomeActionTypes.HOME_GET_ROLE :
				return state.set("cls", action.cls);
			default :
				return state;
		}
	}
}

export default new HomeStore();
