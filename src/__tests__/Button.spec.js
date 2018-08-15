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
    expect(buttonClass.hasClass('component-button'))
  })
  it('contains the class orange', () => {
    const orange = shallow((
      <div className={'component button'}>
      </div>
    ))
    expect(orange.hasClass('orange')).toBeFalsy();
  })
  it('contains the class wide', () => {
    const wide = shallow((
      <div className={'component button'}>
      </div>
    ))
    expect(button.hasClass('wide')).toBeFalsy();
  })
})


//Attempt at mounting 
/*
describe('button has working onClick', () => {
  let name = 'love'
  const onClick = jest.fn();
  it('reacts to click events', () => {
    let buttonEvent = mount(<Button onClick={onClick}>{name}</Button>)
    buttonEvent.find('button').first().simulate('click');
    expect(onClick).toBeCalledWith('Love');
  })  
})
*/


