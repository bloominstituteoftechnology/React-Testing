import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('renders without crashing, using wrapper', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper).toHaveLength(1);
  });
  it('should have five children divs', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div.component-panel').children()).toHaveLength(5);
  });
  it('should have nineteen Buttons', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button')).toHaveLength(19);
  });
});
