import TestModule1 from "./test.jsx";
import TestModule2 from "./test2.jsx";

export default class TestSwitcher extends React.Component {
	render() {
		return (
			<div>
				<p>&lt;Тестовый селектор&gt;</p>
				<button onClick={()=>this.props.setAppModule(
					TestModule1, {
						text: "Свойство text",
						someprop: "Свойство someprop",
						number: 3,
					}
				)}>TestModule1 (text: "Свойство text", someprop: "Свойство someprop", number: 3)</button>
				<br />
				<button onClick={()=>this.props.setAppModule(
					TestModule2, {
						someprop1: "Свойство 1",
						array: [1, 2, 3],
						someprop2: "Свойство 2",
					}
				)}>TestModule2 (someprop1: "Свойство 1", array: [1, 2, 3], someprop: "Свойство 2")</button>
			</div>
		);
	}
}
