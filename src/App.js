/** @format */

import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import FilteredHome from "./components/FilteredHome";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<Router>
				<Home path="/" />
				<FilteredHome path="/:topic" />
			</Router>
		</div>
	);
}

export default App;
