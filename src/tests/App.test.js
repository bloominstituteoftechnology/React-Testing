import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should have two children siblings', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').children()).toHaveLength(2);
  });
  it('should render the tag Display', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Display')).toHaveLength(1);
  });
  it('should render the tag Panel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Panel')).toHaveLength(1);
  });
  it('should have handleClick method that updates state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('0');
    expect(wrapper.state('next')).toEqual('0');
    expect(wrapper.state('total')).toEqual('0');
    expect(wrapper.state('operation')).toBeNull();
  });
});


