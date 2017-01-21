import DevProps from "../service/dev_props.jsx";

export default class TestModule1 extends React.Component {
/*
 * 1. Массив компонентов State (поля редактирования состояний этого модуля)
 *    в свою очередь сам является состоянием этого модуля. Поэтому:
 *    1.1. Он также показывается (и даже тоже работает) в дебажном <DevProps />,
 *         что смотрится диковато, но вполне логично (всё равно же лишь дебаг)
 *    1.2. Если ввести в двух разных компонентах State один и тот же ключ,
 *         само состояние будет, ясен пень, в одном экземпляре, а значение будет
 *         браться, введённое последним; тоже логично, хотя и визуально странно.
 * 2. Ёлки растут иголками наружу, но это не является проявлением конформизма.
 */
	constructor(props) {
		super(props);
		this.state = {
			states: [],
		};
	}
	addremoveModuleState(remove) {
		let states = this.state.states.slice();
		if(typeof remove !== "undefined") {
			for(let i = states.length - 1; i >= 0; i--) {
				if(states[i].props.id === remove) {
					states.splice(i, 1);
					break;
				}
			}
		} else {
			states.push(<State
				setModuleState={this.setModuleState.bind(this)}
				id={states.length}
				key={states.length}
			/>);
		}
		this.setState({states: states});
	}
	setModuleState(p) {
		if(typeof p.key !== "undefined" && typeof p.value !== "undefined") {
			this.setState({[p.key]: p.value});
		}
		if(typeof p.orphaned !== "undefined") {
			delete this.state[p.orphaned];
			this.forceUpdate();
		}
		if(typeof p.id !== "undefined") {
			this.addremoveModuleState(p.id);
		}
	}
	componentWillMount() {
		this.addremoveModuleState();
	}
	render() {
		return (
			<div>
				<div>&lt;Активный модуль&gt;</div>
				<h3>TestModule1.props:</h3>
				<DevProps data={this.props} />
				<h3>Редактирование TestModule1.state:</h3>
				{this.state.states}
				<input type="button" value="Добавить ещё"
					onClick={()=>this.addremoveModuleState()} />
				<h3>TestModule1.state:</h3>
				<DevProps data={this.state} />
				<hr />
			</div>
		);
	}
}
export class State extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			key: "",
			value: "",
		};
	}
	changeKey(evt) {
		if(evt.target.value !== "states") { // Можно и убрать, пасхалочка получится :)
			this.props.setModuleState({
				key: evt.target.value,
				value: this.state.value,
				orphaned: this.state.key,
			});
			this.setState({key: evt.target.value});
		}
	}
	changeValue(evt) {
		this.props.setModuleState({
			key: this.state.key,
			value: evt.target.value,
		});
		this.setState({value: evt.target.value});
	}
	deleteState(evt) {
		this.props.setModuleState({
			orphaned: this.state.key,
			id: this.props.id,
		});
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.key} placeholder="Имя состояния"
					onChange={this.changeKey.bind(this)} />
				<input type="text" value={this.state.value} placeholder="Значение состояния"
					onChange={this.changeValue.bind(this)} />
				<input type="button" value="Удалить состояние"
					onClick={this.deleteState.bind(this)} />
			</div>
		);
	}
}
