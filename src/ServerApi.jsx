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
console.dir(data.session);
		if(data.session && data.session != this._session) {
			this._session = data.session;
			localStorage.setItem("session", this._session);
		}
		if(data.actions) {
			for(var action in data.actions) {
				var actionData = data.actions[action];
				if(action == "SYSTEM_INFO") {
					if(actionData.debug) console.log("DEBUG: " + actionData.debug);
					if(actionData.err) console.log("ERROR: " + actionData.err);
					continue;
				}
				var message = {};
				for(var fld in actionData) {
					message[fld] = actionData[fld];
				}
				message["type"] = action;
				AppDispatcher.dispatch(message);
			}
		};
	}
}

export default new ServerApi();
