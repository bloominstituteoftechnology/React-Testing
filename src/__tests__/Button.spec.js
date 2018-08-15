import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
});

describe('Button', () => {
  it('Renders button element', () => {
    const button = shallow(<Button/>);
    const componentButton = button.find('.component-button');
    expect(componentButton.length).toBe(1);
  })
});
