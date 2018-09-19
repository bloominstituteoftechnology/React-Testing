import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });
function wrapperFunc () {
  const wrapper = shallow(<Button />);
  const instance = wrapper.instance(); 
  return instance; 
}

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('handleClick is a function', () => {
    expect(typeof wrapperFunc().handleClick).toEqual('function');
  });

});
