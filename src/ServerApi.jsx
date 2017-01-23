import AppDispatcher from './Dispatcher.jsx';

/**
 * Это класс, через который происходит весь обмен с сервером.
 * Он держит _session — и присобачивает её к каждому обмену.
 * И он знает _URL — куда, собственно, коннектиться.
 */

class ServerApi {
	constructor() {
		this._URL = "agate.php";
		this._session = localStorage.getItem("session");
		this.onReceiveData = this.onReceiveData.bind(this);
	}
/**
 * Для обмена с сервером нужно сделать import (./ или ../ или ещё чего:
 * зависит от того, откуда ты делаешь import, да? :)
 * import ServerApi from "./ServerApi.jsx";
 * ...
 * ServerApi.ajax("cls для сервера", {объект с параметрами для отправки})
*/
	ask(cls, params) {
		if(!params) params = {};
		params.cls = cls;
		params.ses = this._session;
		$.ajax({
			type: "POST",
			url: this._URL,
			data: params,
			success: this.onReceiveData,
		});
	}
/**
 * Когда данные получены — они парсятся.
 * Предполагается, что структура любого ответа сервера будет вроде:
 * {
 *     session: "111111", — ID сессии, опционально
 *     [
 *         {
 *             action: "APP_MODULE", — ID aкции (см. ниже)
 *             data: ....... — данные
 *         },
 *         ....
 *     ]
 * }
 * Акции передаются Dispatcher-у:
 * AppDispatcher.dispatch({
 *     type: action,
 *     item,
 * });
 * И все (все!) зарегистрированные Store их получают. И на нужные — реагируют.
*/
	onReceiveData(data) {
		console.dir(data);
		if(data.session && data.session != this.session) {
			this.session = data.session;
			localStorage.setItem("session", this.session);
		};
		if(data.actions) {
			for(var action in data.actions) {
				var data = data.actions[action];
				var message = {};
				for(var fld in data) {
					message[fld] = data[fld];
				};
				message["type"] = action;
				AppDispatcher.dispatch(message);
			}
		};
	}
}

export default new ServerApi();
