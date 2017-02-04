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
						<span key={key} className="col-12"><button
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
<div className="table">
	<div id="top" className={"app-row"
			+ " sbm-top-" + this.state.homeStore.get("sidebarMode").top
		}>
		<div id="top-left" className={"app-cell"
			+ " sbm-top-" + this.state.homeStore.get("sidebarMode").top
			+ " sbm-left-" + this.state.homeStore.get("sidebarMode").left
		}>
		</div>
		<div id="top-basic" className={"app-cell"
			+ " sbm-top-" + this.state.homeStore.get("sidebarMode").top
		}>
			<h1>Home залогинившегося</h1>
		</div>
		<div id="top-right" className={"app-cell"
			+ " sbm-top-" + this.state.homeStore.get("sidebarMode").top
			+ " sbm-right-" + this.state.homeStore.get("sidebarMode").right
		}>
			<button onClick={AppActions.logOut} title="Выйти">×</button>
		</div>
	</div>
	<div className="app-row" id="basic">
		<div id="basic-left" className={"app-cell"
			+ " sbm-left-" + this.state.homeStore.get("sidebarMode").left
		}>
			<h3>Доступные модули</h3>
			<p>(клик по кнопке модуля добавляет его экземпляр в Home и переключает на него)</p>
			<div className="row margin_bottom">{modulesAvailable}</div>
		</div>
		<div className="app-cell" id="basic-basic">
			<div className="sbas-top">
				<a href="javascript:void(0);" className="sba-u" onClick={() => {
					HomeActions.changeSidebarMode("top", "smaller");
					this.forceUpdate();
				}}></a>
				<a href="javascript:void(0);" className="sba-d" onClick={() => {
					HomeActions.changeSidebarMode("top", "bigger");
					this.forceUpdate();
				}}></a>
			</div>
			<div className={"sbas-right"
					+ (!this.state.homeStore.get("sidebarMode").right ? " sbas-0" : "")
				}>
				<a href="javascript:void(0);" className="sba-l" onClick={() => {
					HomeActions.changeSidebarMode("right", "bigger");
					this.forceUpdate();
				}}></a>
				<a href="javascript:void(0);" className="sba-r" onClick={() => {
					HomeActions.changeSidebarMode("right", "smaller");
					this.forceUpdate();
				}}></a>
			</div>
			<div className={"sbas-bottom"
					+ (!this.state.homeStore.get("sidebarMode").bottom ? " sbas-0" : "")
				}>
				<a href="javascript:void(0);" className="sba-u" onClick={() => {
					HomeActions.changeSidebarMode("bottom", "bigger");
					this.forceUpdate();
				}}></a>
				<a href="javascript:void(0);" className="sba-d" onClick={() => {
					HomeActions.changeSidebarMode("bottom", "smaller");
					this.forceUpdate();
				}}></a>
			</div>
			<div className="sbas-left">
				<a href="javascript:void(0);" className="sba-l" onClick={() => {
					HomeActions.changeSidebarMode("left", "smaller");
					this.forceUpdate();
				}}></a>
				<a href="javascript:void(0);" className="sba-r" onClick={() => {
					HomeActions.changeSidebarMode("left", "bigger");
					this.forceUpdate();
				}}></a>
			</div>
			<h2>Home.props (отладка)</h2>
			<DevProps data={this.props} />
			<h2>Экземпляры модулей</h2>
			<p>(клик по кнопке экземпляра модуля переключает на него)</p>
			<div className="row margin_bottom_0">
				{Object.keys(this.state.homeStore.get("modulesInstances")).map(key =>
					<span key={key} className="col-2 col-lg-3 col-md-4 col-sm-6 col-xs-12"><button
						onClick={evt => HomeActions.setHomeModule(key, evt)}
						disabled={key === String(this.state.homeStore.get("modulesInstancesNum")) ? true : false}
						className="fieldwidth_100"
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
			<hr />
			<h2>Экземпляр модуля</h2>
			{modulesActiveInstance}
		</div>
		<div id="basic-right" className={"app-cell"
			+ " sbm-right-" + this.state.homeStore.get("sidebarMode").right
		}>
		</div>
	</div>
	<div id="bottom" className={"app-row"
			+ " sbm-bottom-" + this.state.homeStore.get("sidebarMode").bottom
		}>
		<div id="bottom-left" className={"app-cell"
			+ " sbm-bottom-" + this.state.homeStore.get("sidebarMode").bottom
			+ " sbm-left-" + this.state.homeStore.get("sidebarMode").left
		}>
		</div>
		<div id="bottom-basic" className={"app-cell"
			+ " sbm-bottom-" + this.state.homeStore.get("sidebarMode").bottom
		}>
		</div>
		<div id="bottom-right" className={"app-cell"
			+ " sbm-bottom-" + this.state.homeStore.get("sidebarMode").bottom
			+ " sbm-right-" + this.state.homeStore.get("sidebarMode").right
		}>
		</div>
	</div>
</div>
		);
	}
}

export default Container.create(Home);
