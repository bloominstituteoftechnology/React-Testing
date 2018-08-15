import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//import { shallow } from 'enzyme';

import App from '../App';

//added below 2 lines to run calculate function
import calculate from '../logic/calculate';
jest.mock('../logic/calculate.js');

//bringing in axios
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should pass the total to the Display component if next is null', () => {
    const root = shallow(<App />);
    const instance = root.instance();
    root.setState({ total: '7', next: null });
    const value = root.find({ value: instance.state.total });
    expect(value.length).toBe(1);

  });


  describe('handleClick()', () => {
    it('should call "calculate" extactly one time', () => {
      //to know how many times a function is called
      const root = shallow(<App />);
      const instance = root.instance();
      //below line may not be needed which includes a name
      const buttonName = 'logan';    
      instance.handleClick(buttonName);
      // instance.handleClick();
      expect(calculate).toHaveBeenCalledTimes(1);

    });
    it('should call "calculate" passing the state and buttonName', () => {
      //checks state
      const root = shallow(<App />);
      const instance = root.instance();
      const buttonName = 'logan'; 
      const stateObject = { total: '3', next: null, operation: null };
      root.setState(stateObject);   
      instance.handleClick(buttonName);
      //below will fail 3 != 2
      // expect(calculate).toHaveBeenCalledWith({ total: '2', next: null, operation: null }, buttonName);
      //better way below
      expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
    });
    it('should render the Display and Panel Components', () => {
      const root = shallow(<App />);
      const display = root.find('Display');
      const panel = root.find('Panel');
      expect(display.length).toBe(1);
      expect(panel.length).toBe(1);
    });
  });


  //test asynchronous code
  describe('Asynchronous tests', () => {
    //DONE
    it('async using callback', done => {
      axios.get('https://swapi.co/api/people').then(res => {
        done();
      })
      //// if done is not called, the test will fail
      //setTimeout(done, 1000); // setTimeout will call done after 1s
    });
    //PROMISE
    it('async with promises', () => {
      // don't forget the return
      return new Promise(resolve => setTimeout(resolve, 1000));
    });
    //ASYNC
    it('async with async/await', async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    });    
  });
});
