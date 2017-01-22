import LoginActions from './LoginActions.jsx';
import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			message:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(){
		if(!this.emailObj.value || !this.pasObj.value) {
			this.setState({'message':<h3>Обязательно укажите E-mail и Пароль</h3>});
		} else {
			console.log("Send Form!");
			LoginActions.sendForm(this.emailObj.value,this.pasObj.value);
		}
	}

	handleChange(){
		if(this.state.message!=''){
			this.setState({'message':''});
		}
	}

	render() {
		return (
      <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h1>Login!</h1>
              <form className="form-horizontal">
                <div className="form-group"><input type="email" className="form-control" onChange={this.handleChange} ref={(input) => this.emailObj = input} placeholder="E-mail"/></div>
                <div className="form-group"><input type="password" className="form-control" onChange={this.handleChange} ref={(input) => this.pasObj = input} placeholder="Пароль"/></div>
								{this.state.message}
								<div className="form-group"><button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Войти</button></div>
              </form>
            </div>
          </div>
      </div>
		);
	}
}

export default LoginForm;
