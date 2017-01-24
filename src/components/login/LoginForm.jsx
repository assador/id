import LoginActions from "../../actions/LoginActions.jsx";
import React from "react";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: this.props.message,
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
	}
	render() {
		let message='';
		if(this.state.message){
			message=<small>{this.state.message}<br/><br/></small>;
		}
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<h1>Вход</h1>
						<form className="form-horizontal">
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									onChange={this.handleChange}
									ref={(input) => this.emailObj = input}
									placeholder="E-mail"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									onChange={this.handleChange}
									ref={(input) => this.pasObj = input}
									placeholder="Пароль"
								/>
							</div>
							{message}
							<div className="form-group">
								<button
									type="button"
									className="btn btn-primary"
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
