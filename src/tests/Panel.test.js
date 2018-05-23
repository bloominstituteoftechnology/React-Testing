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
  it('should have a div with class componentpanel', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.componentpanel')).toHaveLength(1);
  });
  it('main div should have 5 children divs', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.componentpanel').children('div')).toHaveLength(5);
  });
  
});