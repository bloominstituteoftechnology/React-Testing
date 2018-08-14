import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
});

// it('button should click when clicked', () => {
//   const onClick = sinon.spy();
//   const wrapper = shallow(<Button clickHandler={onClick} />);
//   wrapper.find('button').simulate('click');
//   expect(onClick.calledOnce).toEqual(true);
// });