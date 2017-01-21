export default class Header extends React.Component {
	render() {
		return (
			<div>
				<div>&lt;Header&gt;</div>
				<h2>{this.props.module.name} (текущий модуль App)</h2>
				<hr />
			</div>
		);
	}
}
