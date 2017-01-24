export default class DevProps extends React.Component {
	render() {
		return (
			<DevList data={this.props.data} />
		);
	}
}
export class DevList extends React.Component {
	render() {
		return (
			<ul>
				{Object.keys(this.props.data).map(key =>
					<li key={key}>{key}: {
						typeof this.props.data[key] !== "object"
							? this.props.data[key]
							: <DevList data={this.props.data[key]} />
					}</li>
				)}
			</ul>
		);
	}
}
