import React from "react";
import {Container} from "flux/utils";
import HomeStore from "../../stores/HomeStore.jsx";
import HomeActions from "../../actions/HomeActions.jsx";
import AppActions from "../../actions/AppActions.jsx";
import DevProps from "../service/DevProps.jsx";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	static getStores() {
		return [HomeStore];
	}
	static calculateState(prevState) {
		return {
			homeStore: HomeStore.getState(),
		}
	}
	render() {
		console.dir(this.state.homeStore.get("components"));
		let activeModule = this.state.homeStore.get("components")[this.state.homeStore.get("componentActiveId")];
		return (
			<div>
				<h1>Home залогинившегося</h1>
				<button onClick={evt => HomeActions.addHomeModule(this.state.homeStore.get("modules")[0], evt)}>Кнопка 1</button>
				<button onClick={evt => HomeActions.addHomeModule(this.state.homeStore.get("modules")[1], evt)}>Кнопка 2</button>
				{activeModule}
				<h2>Home.props (отладка)</h2>
				<DevProps data={this.props} />
				<button onClick={AppActions.logOut}>Отлогиниться</button>
			</div>
		);
	}
}

export default Container.create(Home);
