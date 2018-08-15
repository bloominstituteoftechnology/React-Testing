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

        /****/
        // isOn: false,
    }

    handleClick = (buttonName) => {
        this.setState(calculate(this.state, buttonName));
    }

    // toggle = (e) => {
    //     this.setState((prevState) => {
    //         return { isOn : !prevState.isOn }
    //     })
    // }

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





            // <div className="App">
            //     <h3 className="display">{display}</h3>
            //     <p className="App-intro">{title}</p>
            //     <button className="toggle-btn"
            //             onClick={this.toggle}>Off/On</button>
            // </div>