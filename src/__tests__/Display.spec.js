import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('should display the value of its "value" prop', () => {
    const root = shallow(<Display value="3" />);
    expect(root.find('.value').text()).toEqual('3');
  });
});
