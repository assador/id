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
		return (
			<div>
				<h1>Home залогинившегося</h1>
				<h2>Home.props (отладка)</h2>
				<DevProps data={this.props} />
				<button onClick={AppActions.logOut}>Отлогиниться</button>
			</div>
		);
	}
}

export default Home;
