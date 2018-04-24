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
  it('contains 1 component-panel div.', () => {
  	const wrapper = shallow(<Panel/>);
  	expect(wrapper.find('.component-panel')).toHaveLength(1);
  });
  it('contains 19 Buttons.', () => {
  	const wrapper = shallow(<Panel/>);
  	expect(wrapper.find('Button')).toHaveLength(19);
  });
});