import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';
import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Display/>)
    expect(wrapper).toMatchSnapshot()
  });

  it ('value props check', () => {
    const wrapper = mount(<Display value="30"/>)
    expect(wrapper.props().value).toBeDefined()
    expect(wrapper.props().value).toBe('30')
  })
});
