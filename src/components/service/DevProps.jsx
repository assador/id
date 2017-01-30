export default class DevProps extends React.Component {
	render() {
		return (<DevList
			data={this.props.data}
			store={this.props.store}
			hide={this.props.hide}
		/>);
	}
}
export class DevList extends React.Component {
	render() {
		if(!this.props.data) return <span>нету</span>;
		let result = null;
		if(this.props.store) {
			result = {};
			Object.keys(this.props.data).map(idx => {
				result[this.props.data[idx][0]] = this.props.data[idx][1];
			});
		} else {result = this.props.data;}
		return (
			<ul>
				{Object.keys(result).map(key =>
					<li key={key}>{key}: {
						typeof result[key] !== "object"
							? result[key]
							: (key !== this.props.hide
								? <DevList data={result[key]} />
								: <span>скрыто</span>
							)
					}</li>
				)}
			</ul>
		);
	}
}
