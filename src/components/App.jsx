import {Container} from "flux/utils";
import AppStore from "../stores/AppStore.jsx";
import AppActions from "../actions/AppActions.jsx";
import Login from "./login/Login.jsx";
import Home from "./home/Home.jsx";
import StoresPool from '../StoresPool.jsx';

/* Это компонент рута */
class App extends React.Component {
	constructor(props){
		super(props);
		/*А так мы создаем ему Store, который не собираемся убивать*/
		StoresPool.create('App',AppStore);
	}
	/**
	 * Эти две функции — чёрная магия. Они обязательны, когда компонент является
	 * Container — т.e., берет своё state у Store. В данном случае — мы говорим,
	 * что использует AppStore и что наше state — забирается из AppState.getState()
	*/
	static getStores() {
		return StoresPool.arr('App');
	}
	static calculateState(prevState) {
		return {
			appStore: StoresPool.item('App').getState(),
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
			case "" :
				return <div>Not inited yet.</div>
			case "Login" :
				return <Login />
			case "Home" :
				return <Home user={this.state.appStore.get("roles")} />
			default :
				return <div>Panic, there is no {cls} cather.</div>
		}
	}
}

export default Container.create(App);
