import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, instance } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render Display component', () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true)
  });

  it('should render Panel component', () => {
    expect(wrapper.containsMatchingElement(<Panel />)).toEqual(true)
  });

  it('should update state when number is clicked', () => {
    wrapper.instance().handleClick('1');
    expect(wrapper.state('next')).toEqual('1');
  
  wrapper.instance().handleClick('+');
    expect(wrapper.state('operation')).toEqual('+');
  
  wrapper.instance().handleClick('2');
    expect(wrapper.state('next')).toEqual('2');
  
  wrapper.instance().handleClick('=');
    expect(wrapper.state('total')).toEqual('3');
  });

});

