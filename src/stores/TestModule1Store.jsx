import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import AppDispatcher from "../Dispatcher.jsx";
import TestModule1ActionTypes from "../constants/TestModule1ActionTypes.jsx";
import State from "../components/service/State.jsx";

class TestModule1Store extends ReduceStore {
	constructor(num, optional) {
		super(AppDispatcher);
		this.num = num;
	}
	getInitialState() {
		return Immutable.Map({});
	}
	reduce(state, action) {
		if(action.num !== this.num) return state;
		switch(action.type) {
			case TestModule1ActionTypes.ADD_MODULE_STATE :
				return state = state.set("", "");
			case TestModule1ActionTypes.SET_MODULE_STATE :
				if(typeof action.p.key !== "undefined"
				&& typeof action.p.value !== "undefined") {
					state = state.set(action.p.key, action.p.value);
				}
				if(typeof action.p.orphaned !== "undefined") {
					state = state.delete(action.p.orphaned);
				}
				return state;
			default :
				return state;
		}
	}
}

export default TestModule1Store;
