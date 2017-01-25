import React from "react";
import {Container} from "flux/utils";
import LoginStore from "../../stores/LoginStore.jsx";
import LoginForm from "./LoginForm.jsx";
import LoginWait from "./LoginWait.jsx";
import StoresPool from '../../StoresPool.jsx';
/*
Здесь мы создаем LoginStore динамически - при создании экземпляра
Это имеет смысл поскольку мы хотим удалять LoginStore когда Login не будет активен
*/

class Login extends React.Component {
	constructor(props){
		super(props);
/*
Cоздаем Store
*/
		StoresPool.create('Login',LoginStore);
	}
	static getStores() {
		return StoresPool.arr('Login');
	}
	static calculateState(prevState) {
		return {
			loginStore: StoresPool.item('Login').getState(),
		}
	}
	componentWillUnmount(){
/*
Удаляем Store
*/
		StoresPool.remove('Login');
	}
	render() {
		const mode = this.state.loginStore.get("mode");
		switch(mode) {
			case "Form" :
				const message = this.state.loginStore.get("message");
				const email = this.state.loginStore.get("email");
				return <LoginForm message={message} email={email}/>
			case "Loading" :
				return <LoginWait />
			default :
				return <div>Panic, there is no {mode} cather.</div>
		}
	}
}

export default Container.create(Login);
