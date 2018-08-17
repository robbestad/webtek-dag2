import React from "react";
import Header from "src/sections/header";
import Nav from "src/sections/nav";
import Footer from "src/sections/footer";
import Section from "src/sections/section";

export default class App extends React.PureComponent {
	render() {
		return <React.Fragment>
			<Header/>
			<Nav/>
			<Section/>
			<Footer/>
		</React.Fragment>
	}
}
