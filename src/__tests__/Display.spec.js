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
});

describe('Display has styling for value display', () => {
  it('has className component-display', () => {
    const display = shallow(<Display />);
    const componentDisplay = shallow.first().find('div')

    expect(componentDisplay.hasClass('component-display'))
  })
})
