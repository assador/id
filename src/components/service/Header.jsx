export default class Header extends React.Component {
	render() {
		return (
			<div>
				<div>&lt;Header&gt;</div>
				<h2>{this.props.module.type.name} (текущий модуль App, ID: {this.props.moduleId})</h2>
				<hr />
			</div>
		);
	}
}
