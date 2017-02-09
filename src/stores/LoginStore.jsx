import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import LoginActionTypes from "../constants/LoginActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class LoginStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({mode: "Form", message: "", email: ""});
	}
	reduce(state, action) {
		switch(action.type) {
			case LoginActionTypes.LOGIN_SET_DATA :
				let ret = state;
				let d = action.data;
				for(var o in d) {
					ret = ret.set(o, d[o]);
				}
				return ret;
			default :
				return state;
		}
	}
}

/*
Здесь мы возвращаем класc, а не инстанс.
Потому что собираемся использовать его в StoresPool.
*/

export default LoginStore;
