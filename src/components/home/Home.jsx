import React from "react";
import {Container} from "flux/utils";
import HomeStore from "../../stores/HomeStore.jsx";
import HomeActions from "../../actions/HomeActions.jsx";
import AppActions from "../../actions/AppActions.jsx";

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
		console.dir(localStorage);
		return (
			<div>
				<h1>Здесь Home залогинившегося админа</h1>
				<button onClick={AppActions.logOut}>Отлогиниться</button>
			</div>
		);
	}
}

export default Home;
