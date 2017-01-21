import Header from "./service/header.jsx";
import TestSwitcher from "./modules/switcher.jsx";
import TestModule1 from "./modules/test.jsx";
import TestModule2 from "./modules/test2.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			destURL: "/agate.php",
			session: "",
			module: this.props.initialModule,
			moduleProp: this.props.initialModuleProp ? this.props.initialModuleProp : {},
		};
	}
	setAppModule(m, p) {
		this.setState({module: m, moduleProp: p});
	}
	render() {
		let Module = this.state.module;
		return (
			<div>
				<Header module={this.state.module} />
				<Module {...this.state.moduleProp} />
				<TestSwitcher setAppModule={this.setAppModule.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(React.createElement(
	App, {
		initialModule: TestModule1,
		initialModuleProp: {
			prop1: "Какое-то свойство",
			prop2: "Ещё какое-то свойство",
		},
	}
), document.getElementById("ewaiter-app"));
