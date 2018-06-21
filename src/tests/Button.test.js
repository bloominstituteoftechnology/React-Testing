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

  it('button name matches name prop', () => {
    const props = { name: '5' }
    const _Button = shallow(<Button {...props} />)
    const button = _Button.find('button')

    expect(button.text()).toEqual('5')
  })

  it('triggers click handler when clicked', () => {
    const exampleHandler = jest.fn()
    const props = { clickHandler: exampleHandler }
    const _Button = shallow(<Button {...props} />)
    const button = _Button.find('button')
    
    button.simulate('click')
    expect(exampleHandler).toHaveBeenCalledTimes(1)
  })
});
