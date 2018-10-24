import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('should render a div with the component-display class', () => {
    const panel = shallow(<Display />);
    const elements = panel.find('div.component-display');
    expect(elements.length).toBe(1);
  })

  it('should render a div inside of the div component-display class', () => {
    const panel = shallow(<Display />);
    const elements = panel.find('div.component-display div');
    expect(elements.length).toBe(1);
  })
});
