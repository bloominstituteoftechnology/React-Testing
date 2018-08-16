import React, { Component } from 'react';
import Display from './components/Display/Display';
import Panel from './components/Panel/Panel';
import calculate from './logic/calculate';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        total: '0',
        next: null,
        operation: null,
        data: []
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people`)
        .then(({data}) => {
            this.setState({data: data.results});
        })
        .catch((err) => console.log(err));
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
