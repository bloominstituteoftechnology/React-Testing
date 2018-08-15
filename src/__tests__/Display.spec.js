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

  it('should have a display that shows user input', () => {
    const app = shallow(<Display />); //seems you need this almost every time
    const instance = app.instance; //remind me again what this line is for?

    const display = app.find('.component-display');
    expect(display.state.total).toEqual(0);
  })
});
