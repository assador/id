import React from "react";
import {Container} from "flux/utils";
import StoresPool from "../../StoresPool.jsx";
import HomeStore from "../../stores/HomeStore.jsx";
import HomeActions from "../../actions/HomeActions.jsx";
import AppActions from "../../actions/AppActions.jsx";
import DevProps from "../service/DevProps.jsx";

class Home extends React.Component {
	constructor(props) {
		super(props);
		StoresPool.create("Home", HomeStore);
	}
	static getStores() {
		return StoresPool.arr("Home");
	}
	static calculateState(prevState) {
		return {
			homeStore: StoresPool.item("Home").getState(),
		}
	}
	componentDidMount() {
		HomeActions.loadHomeModules("home", {action: "modules"});
	}
	render() {
		let modulesAvailable = null;
		switch(this.state.homeStore.get("modulesAvailableList")) {
			case null :
				modulesAvailable = <p>Идёт загрузка доступных вам модулей, подождите…</p>;
				break;
			case [] :
				modulesAvailable = <p>Доступных вам модулей нет.</p>;
				break;
			default :
				modulesAvailable =
					Object.keys(this.state.homeStore.get("modulesAvailableList")).map(key =>
						<span key={key}><button
							onClick={evt => HomeActions.addHomeModule(
								this.state.homeStore.get("modulesAvailableList")[key], evt
							)}
							className="btn btn-default"
						>
							{this.state.homeStore.get("modulesAvailableList")[key].name}
						</button> </span>
					);
		}
		let modulesActiveInstance =
			this.state.homeStore.get("modulesInstances")
				[this.state.homeStore.get("modulesInstancesNum")];
		return (
			<div>
				<h1>Home залогинившегося</h1>
				<button className="btn btn-default" onClick={AppActions.logOut}>Отлогиниться</button>
				<h2>Home.props (отладка)</h2>
				<DevProps data={this.props} />
				<hr />
				<h3>Доступные модули</h3>
				<p>(клик по кнопке модуля добавляет его экземпляр в Home и переключает на него)</p>
				<div>{modulesAvailable}</div>
				<hr />
				<h3>Экземпляры модулей</h3>
				<p>(клик по кнопке экземпляра модуля переключает на него)</p>
				<div>
					{Object.keys(this.state.homeStore.get("modulesInstances")).map(key =>
						<span key={key}><button
							onClick={evt => HomeActions.setHomeModule(key, evt)}
							disabled={key === String(this.state.homeStore.get("modulesInstancesNum")) ? true : false}
							className="btn btn-default"
						>
							Экземпляр (num: {this.state.homeStore.get("modulesInstances")[key].props.num}) модуля<br />
							«{this.state.homeStore.get("modulesInstances")[key].props.name}»<br />
							класса “{this.state.homeStore.get("modulesInstances")[key].type.name}”
						</button> </span>
					)}
				</div>
				<hr />
				<h2>Экземпляр модуля</h2>
				{modulesActiveInstance}
			</div>
		);
	}
}

export default Container.create(Home);
