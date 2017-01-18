class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>eWaiter app entry:<br />/index.htm ← /build/app.js ← /src/app.jsx</h1>
		);
	}
}
ReactDOM.render(React.createElement(
	App, {
	}
), document.getElementById("ewaiter-app"));
