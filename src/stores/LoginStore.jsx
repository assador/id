import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import LoginActionTypes from "../constants/LoginActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class LoginStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({mode: "Form", message: ""});
	}
	reduce(state, action) {
		switch(action.type) {
			case LoginActionTypes.LOGIN_SET_MODE :
				return state.set("mode", action.mode);
			case LoginActionTypes.LOGIN_SET_MESSAGE :
				return state.set("message", action.message);
			default :
				return state;
		}
	}
}

export default new LoginStore();
