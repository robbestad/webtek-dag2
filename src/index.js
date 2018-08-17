
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	render() {
		return <React.Fragment>
			<h1>Hallo verden!</h1>
			<div></div>
		</React.Fragment>
	}
}

const target = document.querySelector("#app");

ReactDOM.render(<App/>, target);
