class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			destURL: "/agate.php",
			session: "",
			module: this.props.moduleInitial,
		};
	}
// Пока просто играюсь
	setModule(m) {
		this.setState({module: m});
	}
	render() {
		let currentModule = null;
		switch(this.state.module) {
			case 1 :
				currentModule = React.createElement(
					TestModule1, {text: "App.state.module = 1"}
				);
				break;
			case 2 :
				currentModule = React.createElement(
					TestModule2, {text: "App.state.module = 2"}
				);
				break;
			default :
				currentModule = React.createElement(
					TestModule3, {text: "App.state.module = 3"}
				);
		}
		return (
			React.createElement("div", {},
				currentModule,
				React.createElement(TestSwitcher, {setModule: this.setModule.bind(this)})
			)
		);
	}
}
class TestSwitcher extends React.Component {
	render() {
		return (
			<div>
				<button onClick={()=>this.props.setModule(1)}>TestModule1</button>
				<button onClick={()=>this.props.setModule(2)}>TestModule2</button>
				<button onClick={()=>this.props.setModule(3)}>TestModule3</button>
			</div>
		);
	}
}
class TestModule1 extends React.Component {
	render() {
		return (
			<h1>TestModule1, {this.props.text}</h1>
		);
	}
}
class TestModule2 extends React.Component {
	render() {
		return (
			<h1>TestModule2, {this.props.text}</h1>
		);
	}
}
class TestModule3 extends React.Component {
	render() {
		return (
			<h1>TestModule3, {this.props.text}</h1>
		);
	}
}
ReactDOM.render(React.createElement(
	App, {
		moduleInitial: 2,
	}
), document.getElementById("ewaiter-app"));
