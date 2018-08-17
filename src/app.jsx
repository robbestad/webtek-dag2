import React from "react";
import Header from "src/sections/header";
import Nav from "src/sections/nav";
import Footer from "src/sections/footer";
import Home from "src/sections/home";
import Images from "src/sections/images";
import { Router } from "@reach/router";

export default class App extends React.PureComponent {
	render() {
		return <React.Fragment>
			<Header/>
			<Nav/>
			<Router>
				<Home path="/" />
				<Images path="/images" />
			</Router>
			<Footer/>
		</React.Fragment>
	}
}
