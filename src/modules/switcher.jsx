import TestModule1 from "./test.jsx";
import TestModule2 from "./test2.jsx";

export default class TestSwitcher extends React.Component {
	render() {
		return (
			<div>
				<p>&lt;Тестовый селектор&gt;</p>
				<p>
					<button onClick={evt => this.props.setAppModule({
						id: "TestModule1_0",
						type: TestModule1,
						props: {
							text: "Свойство text",
							someprop: "Свойство someprop",
							number: 3,
						},
						evt: evt,
					})}>
						TestModule1<br />
						создать со свойствами<br />
						(text: "Свойство text", someprop: "Свойство someprop", number: 3)<br />
						или активировать, если уже создан
					</button>
					&#160;&#160;
					<button onClick={evt => this.props.setAppModule({
						id: "TestModule2_0",
						type: TestModule2,
						props: {
							someprop1: "Свойство 1",
							array: [1, 2, 3],
							someprop2: "Свойство 2",
						},
						evt: evt,
					})}>
						TestModule2<br />
						создать со свойствами<br />
						(someprop1: "Свойство 1", array: [1, 2, 3], someprop: "Свойство 2")<br />
						или активировать, если уже создан
					</button>
				</p>
			</div>
		);
	}
}
