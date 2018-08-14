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

describe('Button components features test', () => {
  const button = shallow(<Button />)
  it('contains the class component button', () => {
    expect(button.hasClass('component-button'))
  })
  it('contains the class orange', () => {
    expect(button.hasClass('orange'))
  })
  it('contains the class wide', () => {
    expect(button.hasClass('wide'))
  })
})

describe('Button has onclick working', () => {
  const button = shallow(<Button />)
  expect(button.find('component-button').length).to.equal(1);
  button.simulate('click');
  expect(button.find('Randy')).to.equal('Randy')
})