import React from "react";
import {Container} from "flux/utils";
import StoresPool from "../../StoresPool.jsx";
import TestModule2Store from "../../stores/TestModule2Store.jsx";
import TestModule2Actions from "../../actions/TestModule2Actions.jsx";
import DevProps from "../service/DevProps.jsx";

class TestModule2 extends React.Component {
	constructor(props) {
		super(props);
		StoresPool.create("TestModule2", TestModule2Store);
	}
	static getStores() {
		return StoresPool.arr("TestModule2");
	}
	static calculateState(prevState) {
		return {
			TestModule2Store: StoresPool.item("TestModule2").getState(),
		}
	}
	render() {
		const n = "state1", v = 2;
		return (
			<div>
				<button
					onClick={evt => TestModule2Actions.setTestState(n, v, evt)}
				>Увеличить тестовое состояние “{n}” на {v}</button>
				<h3>TestModule2[{this.props.num}].state:</h3>
				<DevProps data={this.state.TestModule2Store._root.entries} />
				<h3>TestModule2[{this.props.num}].props:</h3>
				<DevProps data={this.props} />
				<hr />
			</div>
		);
	}
}

export default Container.create(TestModule2);
