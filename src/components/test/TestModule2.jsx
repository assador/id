import React from "react";
import {Container} from "flux/utils";
import StoresPool from "../../StoresPool.jsx";
import TestModule2Store from "../../stores/TestModule2Store.jsx";
import TestModule2Actions from "../../actions/TestModule2Actions.jsx";
import DevProps from "../service/DevProps.jsx";

class TestModule2 extends React.Component {
	constructor(props) {
		super(props);
		StoresPool.create("TestModule2_" + props.num, TestModule2Store, props.num, "mytest");
	}
	static getStores(props) {
		return StoresPool.arr("TestModule2_" + props.num);
	}
	static calculateState(prevState,props) {
		return {
			TestModule2Store: StoresPool.item("TestModule2_" + props.num).getState(),
		}
	}
	render() {
		const n = "state1", v = 2;
		return (
			<div>
				<div className="margin_bottom"><button
					onClick={evt => TestModule2Actions.setTestState(this.props.num, n, v, evt)}
				>Увеличить тестовое состояние “{n}” на {v}</button></div>
				<h3>TestModule2[{this.props.num}].state:</h3>
				<DevProps data={this.state.TestModule2Store._root.entries} store />
				<h3>TestModule2[{this.props.num}].props:</h3>
				<DevProps data={this.props} />
			</div>
		);
	}
}

export default Container.create(TestModule2, {withProps: true});
