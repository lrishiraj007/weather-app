import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './components/login';
import Registration from './components/Registration';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
	render() {
		return (
				<Router>
					<div className="App">
					<Switch>
					    <Route exact path="/register" component={Registration} /> 
						<Route exact path="/weather" component={Weather} />
						<Route exact path="/login" component={Login} />
						<Redirect from="/" to="login" />
					</Switch>
					</div>
				</Router>
		);
	}
}

export default App;
