import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('should render a div with the component-button class', () => {
    const button = shallow(<Button />);
    const elements = button.find('div.component-button');
    expect(elements.length).toBe(1);
  })

  it('should render a button ', () => {
    const button = shallow(<Button />);
    const elements = button.find('div button');
    expect(elements.length).toBe(1)
  })
});
