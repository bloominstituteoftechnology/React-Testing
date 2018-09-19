import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  
  it('renders without crashing', () => {
  shallow(<Button />);
  });

  it('should return one div', () => {
    const button = shallow(<Button />);

    expect(button.find('div').children()).toHaveLength(1);
  });

  it('should return buttons component', () => {
    const buttons = shallow(<Button />);
    expect(buttons.find('.component-button').exists()).toBeTruthy();
  });

  it('should return orange-button', () => {
    const buttons = shallow(<Button orange/>);
    expect(buttons.find('.orange').exists()).toBeTruthy();
    expect(buttons.find('.component-button').exists()).toBeTruthy();
    expect(buttons.find('.wide').exists()).toBeFalsy();
  });

  it('should return wide-button', () => {
    const buttons = shallow(<Button wide/>);
    expect(buttons.find('.wide').exists()).toBeTruthy();
    expect(buttons.find('.component-button').exists()).toBeTruthy();
    expect(buttons.find('.orange').exists()).toBeFalsy();
  });
 
});
