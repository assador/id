import React from "react";

class LoginWait extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="center cw_g2">
				<h1>Вход</h1>
				<p>Подождите…</p>
			</div>
		);
	}
}

export default LoginWait;
