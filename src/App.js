import React, { Component } from 'react';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';
import calculate from './logic/calculate';
import './App.css';

class App extends Component {
	state = {
		total: '0',
		next: null,
		operation: null,
	};

	handleClick = buttonName => {
		this.setState(calculate(this.state, buttonName));
	};

	render() {
		return (
			<div className="component-app">
				<Display value={this.state.next || this.state.total || '0'} />
				<Panel clickHandler={this.handleClick} />
			</div>
		);
	}
}

export default App;
/*

does it render?
does it render correctly?
are sub-components rendered, and how many of them.
Display, Panel - 2
are props handled correctly.
is state handled correctly.
does it handle events correctly?

*/
