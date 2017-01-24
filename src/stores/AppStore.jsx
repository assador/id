import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import AppActionTypes from "../constants/AppActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class AppStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({cls: ""});
	}
	reduce(state, action) {
		switch(action.type) {
			case AppActionTypes.SET_APP_MODULE :
				return state.set("cls", action.cls);
			default :
				return state;
		}
	}
}

export default new AppStore();
