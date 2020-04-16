/** @format */

import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import FilteredHome from "./components/FilteredHome";
import Article from "./components/Article";
import Login from "./components/Login";
import Error from "./components/Error";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Login />
			<Header />
			<Router>
				<Home path="/" />
				<FilteredHome path="/:topic" />
				<Article path="/article/:id" />
				<Error default />
			</Router>
		</div>
	);
}

export default App;
