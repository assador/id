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
						>
							{this.state.homeStore.get("modulesAvailableList")[key].name}
						</button> </span>
					);
		}
		let modulesActiveInstance =
			this.state.homeStore.get("modulesInstances")
				[this.state.homeStore.get("modulesInstancesNum")];
		return (
<div className="app-table">
	<div className="app-row" id="top">
		<div className="app-cell" id="top-left">
		</div>
		<div className={"app-cell app-sbm-top-" + this.state.homeStore.get("sidebarMode").top} id="top-basic">
			<h1>Home залогинившегося</h1>
		</div>
		<div className="app-cell" id="top-right">
			<button onClick={AppActions.logOut} title="Выйти">×</button>
		</div>
	</div>
	<div className="app-row" id="basic">
		<div className={"app-cell app-sbm-left-" + this.state.homeStore.get("sidebarMode").left} id="basic-left">
			<h3>Доступные модули</h3>
			<p>(клик по кнопке модуля добавляет его экземпляр в Home и переключает на него)</p>
			<div>{modulesAvailable}</div>
			<h3>Экземпляры модулей</h3>
			<p>(клик по кнопке экземпляра модуля переключает на него)</p>
			<div>
				{Object.keys(this.state.homeStore.get("modulesInstances")).map(key =>
					<span key={key}><button
						onClick={evt => HomeActions.setHomeModule(key, evt)}
						disabled={key === String(this.state.homeStore.get("modulesInstancesNum")) ? true : false}
					>
						Экземпляр (num: {this.state.homeStore.get("modulesInstances")[key].props.num}) модуля<br />
						«{this.state.homeStore.get("modulesInstances")[key].props.name}»<br />
						класса “{
							this.state.homeStore.get("modulesInstances")[key].type.displayName
							|| this.state.homeStore.get("modulesInstances")[key].type.name
						}”
					</button> </span>
				)}
			</div>
		</div>
		<div className="app-cell" id="basic-basic">
			<a href="javascript:void(0);" className="app-sba-up"
				onClick={() => HomeActions.changeSidebarMode("top", "smaller")}></a>
			<a href="javascript:void(0);" className="app-sba-down"
				onClick={() => HomeActions.changeSidebarMode("top", "bigger", 3)}></a>
			<a href="javascript:void(0);" className="app-sba-left"
				onClick={() => HomeActions.changeSidebarMode("left", "smaller")}></a>
			<a href="javascript:void(0);" className="app-sba-right"
				onClick={() => HomeActions.changeSidebarMode("left", "bigger")}></a>
			<h2>Home.props (отладка)</h2>
			<DevProps data={this.props} />
			<hr />
			<h2>Экземпляр модуля</h2>
			{modulesActiveInstance}
		</div>
		<div className={"app-cell app-sbm-right-" + this.state.homeStore.get("sidebarMode").right} id="basic-right">
		</div>
	</div>
	<div className="app-row" id="bottom">
		<div className="app-cell" id="bottom-left">
		</div>
		<div className={"app-cell app-sbm-bottom-" + this.state.homeStore.get("sidebarMode").bottom} id="bottom-basic">
		</div>
		<div className="app-cell" id="bottom-right">
		</div>
	</div>
</div>
		);
	}
}

export default Container.create(Home);
