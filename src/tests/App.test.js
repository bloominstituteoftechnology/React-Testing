import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders the <Display /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Panel)).toHaveLength(1);
  });
  it('renders the <Display /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Display)).toHaveLength(1);
  });
  it('initial state for "total" should be null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toBeNull();
  });
  it('initial state for "next" should be null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('next')).toBeNull();
  });
  it('initial state for "operation" should null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('operation')).toBeNull();
  });
  it('initial state for "operation" should null', () => {
    const wrapper = shallow(<App />);
    expect(typeof(wrapper.instance().handleClick)).toBe('function');
  });
});
