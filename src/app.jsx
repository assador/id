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
			modules: {},
			moduleActiveId: "",
		};
	}
	componentWillMount() {
		this.setAppModule({
			id: "TestModule1_0",
			type: TestModule1,
			props: {
				prop1: "Какое-то свойство",
				prop2: "Ещё какое-то свойство",
			}
		});
	}
	/**
	 * Создаёт или, если уже создан, выбирает экземпляр модуля в хэше this.state.modules
	 * В другом модуле (предварительно прокинув функцию в его props) вызывается так:
	 * this.props.setAppModule({id: "<ID>", type: <CLASS>, props: {<PROPS>}, evt: <EVT>})
	 */
	setAppModule(p) {
		let modules = this.state.modules;
		if(!this.state.modules[p.id]) {
			modules[p.id] = React.createElement(p.type, p.props);
		}
		this.setState({
			modules: modules,
			moduleActiveId: p.id,
		});
	}
	render() {
		let activeModule = this.state.modules[this.state.moduleActiveId];
		return (
			<div>
				<Header module={activeModule} moduleId={this.state.moduleActiveId} />
				{activeModule}
				<TestSwitcher setAppModule={this.setAppModule.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("ewaiter-app"));
