import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
});

describe('Button components features test', () => {
  const button = shallow(<Button />)
  const buttonClass = button.find('div')
  it('contains the class component button', () => {
    expect(buttonClass.hasClass('component-button')).toEqual(true);
  })
  it('contains the class orange', () => {
    const orange = shallow((
      <div className={'component button'}>
      </div>
    ))
    expect(orange.hasClass('orange')).toEqual(false);
  })
  it('contains the class wide', () => {
    const wide = shallow((
      <div className={'component button'}>
      </div>
    ))
    expect(button.hasClass('wide')).toEqual(false);
  })
})

describe('button has working onClick', () => {
  const onClick = jest.fn();
  name = 'Love'
  it('reacts to click events', () => {
    let buttonEvent = mount(<Button name={name} onClick={onClick} />)
    buttonEvent.find('button.component-button').simulate('click');
    expect(onClick).toEqual(true);
  })
})


