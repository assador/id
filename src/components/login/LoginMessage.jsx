import React from "react";

class LoginMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: this.props.message,
		}
	}
	render() {
		let message='';
		if(this.props.message){
			message=<small>{this.props.message}<br/><br/></small>;
		}
		return (
				<div>{message}</div>
		);
	}
}

export default LoginMessage;
