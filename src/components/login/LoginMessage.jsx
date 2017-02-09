import React from "react";

class LoginMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: this.props.message,
		}
	}
	render() {
		return (
			(this.props.message
				? <div className="imp margin_bottom">{this.props.message}</div>
				: false
			)
		);
	}
}

export default LoginMessage;
