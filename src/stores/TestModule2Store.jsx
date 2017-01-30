import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import TestModule2ActionTypes from "../constants/TestModule2ActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class TestModule2Store extends ReduceStore {
	constructor(num, optional) {
		super(AppDispatcher);
		this.num = num;
	}
	getInitialState() {
		return Immutable.Map({
			state1: 0,
		});
	}
	reduce(state, action) {
		if(action.num !== this.num) return state;
		switch(action.type) {
			case TestModule2ActionTypes.SET_STATE :
				return state.update(action.name, i => i + action.value);
			default :
				return state;
		}
	}
}

export default TestModule2Store;
