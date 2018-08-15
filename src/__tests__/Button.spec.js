import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />)
  });


  it('has a "orange" prop', () => {
        const orange = { name: '+' };
        const button = shallow(<Button {...orange} />).find('button');
        expect(button.text()).toBe('+');

});
  it('button name matches name prop', () => {
    const props = { name: '5' }
    const _Button = shallow(<Button {...props} />)
    const button = _Button.find('button')

    expect(button.text()).toEqual('5')
  });
});
