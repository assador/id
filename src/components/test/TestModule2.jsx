import DevProps from "../service/DevProps.jsx";

export default class TestModule2 extends React.Component {
	render() {
		return (
			<div>
				<div>&lt;Активный модуль&gt;</div>
				<h3>TestModule2.props:</h3>
				<DevProps data={this.props} />
				<hr />
			</div>
		);
	}
}
