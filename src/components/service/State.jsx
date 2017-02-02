/**
 * Компонент для добавления, редактирования и удаления состояний родительского
 * компонента — по одному State на каждое состояние родительского компонента.
 * При создании (родителем) ему должны передаваться свойства (как минимум):
 * k={ключ_состояния}, v={значение_состояния}, parentModuleNum={ID_родителя},
 * setModuleState={функция_родителя_которая_меняет_сами_родительские_состояния}
 */
export default class State extends React.Component {
	changeKey(evt) {
		this.props.setModuleState(this.props.parentModuleNum, {
			key: evt.target.value,
			value: this.props.v,
			orphaned: this.props.k,
		});
	}
	changeValue(evt) {
		this.props.setModuleState(this.props.parentModuleNum, {
			key: this.props.k,
			value: evt.target.value,
		});
	}
	deleteState() {
		this.props.setModuleState(this.props.parentModuleNum, {
			orphaned: this.props.k,
		});
	}
	render() {
		return (
			<div className="form-group">
				<input type="text" value={this.props.k} placeholder="Имя состояния"
					onChange={this.changeKey.bind(this)} />&#160;:&#160;&#160;
				<input type="text" value={this.props.v} placeholder="Значение состояния"
					onChange={this.changeValue.bind(this)} />&#160;&#160;&#160;
				<input type="button" value="Удалить состояние"
					onClick={this.deleteState.bind(this)} />
			</div>
		);
	}
}
