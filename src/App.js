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
                {/* so both Display and Panel are children of App in this case */}
                {/* so it will be either next, total, or '0' */}
                {/* but why does it need a third or for '0' if the state starts at '0'?*/}
                <Display value={this.state.next || this.state.total || '0'} />
                <Panel clickHandler={this.handleClick} />
            </div>
        );
    }
}

export default App;
