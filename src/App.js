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
        //added below
        isOn: false
    };

    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    }

    render() {
        //added below const s
        const title = this.props.title || "Welcome to React";
        const display = this.state.isOn ? 'on' : 'off';
        return (
            <React.Fragment>
                <div id="lecture">
                    {/* <p className="App-intro">Welcome to React</p> */}
                    <p className="App-intro">{title}</p>
                    <h3 className="display">{display}</h3>
                    <button onClick={this.toggle} className="toggle-btn">TOGGLE</button>
                    {/* added above <p> & <h3> & <button> */}                    
                </div>
                <div className='component-app'>
                    <Display value={this.state.next || this.state.total || '0'} />
                    <Panel clickHandler={this.handleClick} />
                </div>               
            </React.Fragment>
        );
    }
    //added below func from lecture
    toggle = () => {
        this.setState(prevState => {
            return { isOn: !prevState.isOn };            
        });
    }
}

export default App;
