import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import TestModule2ActionTypes from "../constants/TestModule2ActionTypes.jsx";
import AppDispatcher from "../Dispatcher.jsx";

class TestModule2Store extends ReduceStore {
	constructor(caffe_id,desc) {
		super(AppDispatcher);
		console.log(caffe_id);
		console.log(desc);
		this.caffe_id=caffe_id;
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
