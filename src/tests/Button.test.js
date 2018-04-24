import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
import App from '../App.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should trigger onclick events', () => {
    const onClick = sinon.spy();
    const wrapperButton = shallow(<Button clickHandler={onClick} />);
    wrapperButton.find('button').prop('onClick')();
    expect(onClick.calledOnce).toEqual(true);
  })
});