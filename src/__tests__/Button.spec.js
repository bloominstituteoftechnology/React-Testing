import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('call clickHandler on click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button clickHandler={mock} />);

    const button = wrapper.find('button');
    button.simulate('click');
    expect(mock).toHaveBeenCalled();
  });

  it('call clickHandler on click', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button name="TrevorSucks" clickHandler={mock} />);

    const button = wrapper.find('button');
    button.simulate('click');
    expect(mock).toHaveBeenCalledWith('TrevorSucks');
  });
});
