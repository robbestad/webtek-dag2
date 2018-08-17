
import React from "react";
import ReactDOM from "react-dom";
import "src/style.css";

class App extends React.Component {
	render() {
		return <React.Fragment>
			<h1>Hallo verden!</h1>
			<div className="hero">
				Ønsker dere alle velkommen til Acando!
			</div>
		</React.Fragment>
	}
}

const target = document.querySelector("#app");

ReactDOM.render(<App/>, target);
