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
        console.log('Total typeof', typeof this.state.total)
        console.log('Next typeof', typeof this.state.next)
        console.log('Operation typeof', typeof this.state.operation)
        return (
            <div className='component-app'>
                <Display value={this.state.next || this.state.total || '0'} />
                <Panel clickHandler={this.handleClick} />
            </div>
        );
    }
}

export default App;
