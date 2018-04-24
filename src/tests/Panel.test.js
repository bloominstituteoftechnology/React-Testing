import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should have 24 children', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div').children()).toHaveLength(24);
  });
  it('should have 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button')).toHaveLength(19);
  });
});
