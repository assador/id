import React from "react";
import AppActions from "../../actions/AppActions.jsx";

class Home extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
    return (
			<div>
				<h1>Здесь Home залогинившегося админа</h1>
				<button onClick={AppActions.logOut}>Отлогиниться</button>
			</div>
		)
	}
}

export default Home;
