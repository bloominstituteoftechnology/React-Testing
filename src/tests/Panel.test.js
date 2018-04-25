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
  it('should contain a wrapping div named component-panel', () => {
    const wrapper = shallow(<Panel />);
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('component-panel')
    ).toEqual(true);
  });
  it('should have 5 sibling children divs', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div').children('div')).toHaveLength(5);
  });
  it('should have 19 Buttons', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div').children('Button')).toHaveLength(19);
  });
});
