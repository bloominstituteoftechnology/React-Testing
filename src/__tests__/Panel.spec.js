import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('should render a div with the component-panel class', () => {
    const panel = shallow(<Panel />);
    const elements = panel.find('div.component-panel');
    expect(elements.length).toBe(1);
  })

  it('should render 5 divs for rows inside of the component-panel div', () => {
    const panel = shallow(<Panel />);
    const elements = panel.find('div.component-panel > div');
    expect(elements.length).toBe(5);
  })

  it('should render 19 buttons total', () => {
    const panel = shallow(<Panel />);
    const elements = panel.find('div.component-panel > div').children(Button);
    expect(elements.length).toBe(19);
  })
});
