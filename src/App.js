import React, { Component } from 'react';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';
import calculate from './logic/calculate';
import './App.css';

class App extends Component {
    state = {
        total: '0',
        next: null,
        operation: null
    }

    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    }

    render() {
        return (
            <div className='component-app'>
                <Display value={this.state.next || this.state.total || '0'} />
                <Panel clickHandler={this.handleClick} />
            </div>
        );
    }
}

export default App;

/*
- it should render the Display and Panel components.
- should have a default value of '0' for total.
- passes '0' to the Display component if 'total' and next are null.
- handleClick calls 'calculate' exactly one time.
- handleClick should pas the state and buttonName to calculate
*/