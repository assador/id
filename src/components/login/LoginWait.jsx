import React from "react";

class LoginWait extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-lg-offset-3">
						<h1>Вход</h1>
						<p>Подождите…</p>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginWait;
