import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should have state defined', () => {
  		const component = shallow(<App />); 
  		expect(component.state('total', 'next', 'operation')).toBeDefined();
  });
});

//git TITLE AND BODY commit testing...
// git test
// another test
// slkdjf