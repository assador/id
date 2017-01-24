import React from "react";
import {Container} from "flux/utils";
import LoginStore from "../../stores/LoginStore.jsx";
import LoginActions from "../../actions/LoginActions.jsx";
import LoginForm from "./LoginForm.jsx";
import LoginWait from "./LoginWait.jsx";

class Login extends React.Component {
	constructor(props){
		super(props);
		//LoginActions.setMode("Form");
	}
	static getStores() {
		return [LoginStore];
	}
	static calculateState(prevState) {
		return {
			loginStore: LoginStore.getState(),
		}
	}

	render() {
		const mode = this.state.loginStore.get("mode");
		switch(mode) {
			case "Form" :
				const message = this.state.loginStore.get("message");
				return <LoginForm message={message}/>
			case "Loading" :
				return <LoginWait />
			default :
				return <div>Panic, there is no {mode} cather.</div>
		}
	}
}

export default Container.create(Login);
