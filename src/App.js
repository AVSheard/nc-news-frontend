/** @format */

import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import FilteredHome from "./components/FilteredHome";
import Article from "./components/Article";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<Router>
				<Home path="/" />
				<FilteredHome path="/:topic" />
				<Article path="/article/:article" />
			</Router>
		</div>
	);
}

export default App;
