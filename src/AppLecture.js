import React, { Component } from 'react';

import './App.css';

class App extends Component {
    state = {
        isOn: false,
    };

    render() {
        const title = this.props.title || 'Welcome to React';
        const display = this.state.isOn ? 'on' : 'off';

        return (
            <div className="App">
                <button onClick={this.toggle} className="toggle-btn">
                    Toggle
        </button>
                <h3 className="display">{display}</h3>
                <p className="App-intro">{title}</p>
            </div>
        );
    }

    toggle = () => {
        this.setState(prevState => {
            return { isOn: !prevState.isOn };
        });
    };
}

export default App;