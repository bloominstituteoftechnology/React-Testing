import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });
  it('renders all Button Components', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button').length).toBe(19);
  });
});
