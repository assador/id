import React from "react";
import LoginActions from "../../actions/LoginActions.jsx";
import LoginMessage from "./LoginMessage.jsx";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: this.props.message,
			email:this.props.email
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit() {
		if(!this.emailObj.value || !this.pasObj.value) {
			this.setState({message: "Обязательно укажите E-mail и Пароль!"});
		} else {
			LoginActions.sendForm(this.emailObj.value, this.pasObj.value);
		}
	}
	handleChange() {
		if(this.state.message != "") {
			this.setState({message: ""});
		}
		this.setState({email:this.emailObj.value});
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 col-lg-offset-3">
						<h1>Вход</h1>
						<form className="form-horizontal">
							<div className="form-group">
								<input
									type="email"
									onChange={this.handleChange}
									ref={(input) => this.emailObj = input}
									placeholder="E-mail"
									value={this.state.email}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									onChange={this.handleChange}
									ref={(input) => this.pasObj = input}
									placeholder="Пароль"
								/>
							</div>
							<LoginMessage message={this.state.message} />
							<div className="form-group">
								<button
									type="submit"
									onClick={this.handleSubmit}
								>Войти</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginForm;
