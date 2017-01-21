export default class DevProps extends React.Component {
	render() {
		let propsList = [];
		for(let key in this.props.data) {
			propsList.push(<li key={key}>{key}: {this.props.data[key]}</li>);
		}
		return (
			<ul>{propsList}</ul>
		);
	}
}
