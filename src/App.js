/** @format */

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Router } from "@reach/router";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<Router></Router>
		</div>
	);
}

export default App;
