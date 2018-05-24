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
  it('Should render a panel component', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.component-panel').length).toBe(1);
  })
  it('Should render five divs as children', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('.component-panel').children('div')).toHaveLength(5);
  })
});