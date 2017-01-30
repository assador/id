import React from "react";
import {Container} from "flux/utils";
import StoresPool from "../../StoresPool.jsx";
import TestModule1Store from "../../stores/TestModule1Store.jsx";
import TestModule1Actions from "../../actions/TestModule1Actions.jsx";
import State from "../service/State.jsx";
import DevProps from "../service/DevProps.jsx";

class TestModule1 extends React.Component {
/**
 * Расколбас. Опишу позже.
 */
	constructor(props) {
		super(props);
		StoresPool.create("TestModule1_" + props.num, TestModule1Store, props.num);
	}
	static getStores(props) {
		return StoresPool.arr("TestModule1_" + props.num);
	}
	static calculateState(prevState,props) {
		return {
			TestModule1Store: StoresPool.item("TestModule1_" + props.num).getState(),
		}
	}
	render() {
		let states = {}, im = this.state.TestModule1Store._root, keyIdx = -1;
		if(typeof im !== "undefined") {
			Object.keys(im.entries).map(idx => {
				states[im.entries[idx][0]] = im.entries[idx][1];
			});
		}
		return (
			<div>
				<h3>TestModule1[{this.props.num}].props:</h3>
				<DevProps data={this.props} />
				<h3>Редактирование TestModule1[{this.props.num}].state:</h3>
				{Object.keys(states).map(key => {
					keyIdx++;
					return <State
						key={keyIdx}
						k={key}
						v={states[key]}
						parentModuleNum={this.props.num}
						setModuleState={TestModule1Actions.setModuleState}
					/>
				})}
				<input type="button" value="Добавить ещё"
					onClick={evt => TestModule1Actions.addModuleState(this.props.num)} />
				<h3>TestModule1[{this.props.num}].state:</h3>
				{typeof im !== "undefined" &&
					<DevProps data={im.entries} store hide="states" />
				}
				<hr />
			</div>
		);
	}
}

export default Container.create(TestModule1, {withProps: true});
