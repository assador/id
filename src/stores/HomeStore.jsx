import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import HomeActionTypes from "../constants/HomeActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class HomeStore extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({});
	}
	reduce(state, action) {
		switch(action.type) {
			default :
				return state;
		}
	}
}

export default new HomeStore();
