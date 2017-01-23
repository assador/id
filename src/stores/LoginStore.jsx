import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import LoginActionTypes from "../constants/LoginActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class LoginStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({mode: "form"});
	}
	reduce(state, action) {
		switch(action.type) {
			case LoginActionTypes.SET_FORM_MODE :
				return state.set("mode", action.mode);
			default :
				return state;
		}
	}
}

export default new LoginStore();
