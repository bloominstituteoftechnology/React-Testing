import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('displays a string that is passed', () => {
    const string = 'test test test';
    const wrapper = shallow(<Display value={string} />);
    const display = wrapper.find('.component-display > div');

    expect(display.text()).toEqual(string);
  });
});
