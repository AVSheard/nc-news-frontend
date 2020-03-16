/** @format */

import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<Router>
				<Home path="/" />
			</Router>
		</div>
	);
}

export default App;
