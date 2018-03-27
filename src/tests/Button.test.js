import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('calls handleClick function on click', () => {
    const func = sinon.spy();
    const button = shallow(<Button clickHandler={func}/>);
    button.find('button').simulate('click');
    expect(func.calledOnce).toEqual(true);
  })
});
