import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

import calculate from '../logic/calculate.js';
import App from '../App';
import Display from '../components/Display/Display';

jest.mock('../logic/calculate.js');

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

	
it('renders without crashing', () => {
        shallow(<App />);
});


it('should render a p tag with "Calculator text"', () => {

        const app = shallow(<App />);

        const paragraph = app.find('.calculator-title');
        expect(paragraph.text()).toEqual('Calculator');

});


it('should display total to be 0  by default', () => {
  	const app = shallow(<App />);
  	const instance = app.instance();

  	expect(instance.state.total).toEqual("0");
});	


it('should render the p tag"', () => {

        const app = shallow(<App />);

        const div = app.find('.component-app');
	expect(div.contains(<p className="calculator-title">Calculator</p>)).toEqual(true);

});

it('should render the Calculator Component', () => {
 	const app = shallow(<App />);

        const div = app.find('.component-app');	
    	expect(div.containsMatchingElement(<Display />)).toEqual(true);
  });



it('should pass the total to the Display component if next is null', () => {
    const app = shallow(<App />);
    const instance = app.instance();

    app.setState({ total: '809', next: null });
    const value = app.find({ value: instance.state.total });

    expect(value.length).toBe(1);
  });


it('handleClick()', ()=> {
 	const app = shallow(<App />);
	const instance =app.instance();

	const buttonName = '4';
	instance.handleClick(buttonName);
	
	expect(calculate).toHaveBeenCalledTimes(1);


});


it('should call "calculate" passing the state and buttonName', () => {
      
      const app= shallow(<App />);
      const instance = app.instance();
      const buttonName = '+';
      const stateObject = { total: '9', next: null, operation: null };

      app.setState(stateObject);
      instance.handleClick(buttonName);

      expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
    });

it('should render the Display and Panel components', () => {
      const app = shallow(<App />);

      const display = app.find('Display');
      const panel = app.find('Panel');

      expect(display.length).toBe(1);
      expect(panel.length).toBe(1);
    });

});


describe('Asynchronous tests', () => {
    it('async using callback', done => {
       axios.get('https://swapi.co/api/people/')
       .then(res => {
         
	       done();
       })
       .catch(err => {
	  	console.log(err);
	  
	  });  
});

});
