import React from "react";

class LoginWait extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<h1>Подождите…</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginWait;
