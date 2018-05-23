import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('redners without crashing, using wrapper', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toHaveLength(1);
  });
  it('should have an initial value of zero', () => {
    const wrapper = shallow(<Display value="0" />);
    expect(wrapper.contains(<div>0</div>)).toEqual(true);
    expect(wrapper.type()).toEqual('div');
  });
  it('should have a div of class component-display', () => {
    const wrapper = shallow(<Display value="0" />);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.find('div.component-display')).toHaveLength(1);
  });
});
