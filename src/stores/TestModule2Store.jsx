import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import TestModule2ActionTypes from "../constants/TestModule2ActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class TestModule2Store extends ReduceStore {
	constructor() {
		super(AppDispatcher);
	}
	getInitialState() {
		return Immutable.Map({
			state1: 0,
		});
	}
	reduce(state, action) {
		switch(action.type) {
			case TestModule2ActionTypes.SET_STATE :
				return state.update(action.name, i => i + action.value);
			default :
				return state;
		}
	}
}

export default TestModule2Store;
