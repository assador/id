import {Container} from "flux/utils";
import AppStore from "../stores/AppStore.jsx";
import AppActions from "../actions/AppActions.jsx";
import Login from "./login/Login.jsx";

/* Это компонент рута */

class App extends React.Component {
	/**
	 * Эти две функции — чёрная магия. Они обязательны, когда компонент является
	 * Container — т.e., берет своё state у Store. В данном случае — мы говорим,
	 * что использует AppStore и что наше state — забирается из AppState.getState()
	*/
	static getStores() {
		return [AppStore];
	}
	static calculateState(prevState) {
		return {
			appStore: AppStore.getState(),
		}
	}
	/**
	 * Когда он видит, что его вставили в дерево — он делает запрос на сервер
	 * на cls = home. Это проверка прав. Если у юзера валидная session — сервер
	 * определит права, подключит нужный вариант home и скажет, что рисовать.
	 * Если session не валидна — сервер выдаст команду рисовать Login.
	*/
	componentDidMount() {
		AppActions.loadModule("home");
	}
	render() {
		const cls = this.state.appStore.get("cls");
		switch(cls) {
			case "Loading" :
				return <div>Loading…</div>
			case "":
				return <div>Not inited yet.</div>
			case "Login" :
				return <Login />
			default :
				return <div>Panic, there is no {cls} cather.</div>
		}
	}
}

export default Container.create(App);
