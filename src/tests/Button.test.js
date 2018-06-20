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
  it('should render one button ', () => {
    // shallow render the component
    const button = shallow(<Button />)
    // find all elements that are buttons
    const buttons = button.find('button')
    // test if component renders only one button
    expect(buttons.length).toEqual(1)
  })
  it('should add the class orange to the button', () => {
    const props = {
      orange: true
    }
    const button = shallow(<Button {...props} />)
    const buttons = button.find('.orange')
    expect(buttons.length).toBe(1)
  })
  it('should add the class wide to the button', () => {
    const props = {
      wide: true
    }
    const button = shallow(<Button {...props} />)
    const buttons = button.find('.wide')
    expect(buttons.length).toBe(1)
  })
  it('After clicking the button, clickHandler should have been called once', () => {
    const props = {
      orange: true,
      clickHandler: jest.fn()
    }
    const button = shallow(<Button {...props} />)
    const buttons = button.find('button')
    buttons.simulate('click')

    expect(props.clickHandler).toHaveBeenCalledTimes(1)
  })
  it('Renders the correct name it is being passed in props', () => {
    const props = {
      name: 'KLAUS'
    }
    const button = shallow(<Button {...props} />)
    const buttons = button.find('button')

    expect(buttons.text()).toMatch(props.name)
  })
});