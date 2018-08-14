import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  test('All buttons should have a wide or orange class', () => {
    const orangeButton = shallow(<Button orange />);
    const wideButton = shallow(<Button wide />);
    const orangeBtn = orangeButton.find('.component-button .orange');
    const wideBtn = wideButton.find('.component-button .wide');
    expect(orangeBtn.hasClass("orange")).toEqual(true);
    expect(wideBtn.hasClass("wide")).toEqual(true);
  });
  test('Should have a function called handleClick', () => {
    const button = shallow(<Button />);
    const instance = button.instance();
    expect(instance.handleClick).toBeDefined();
  });
});
