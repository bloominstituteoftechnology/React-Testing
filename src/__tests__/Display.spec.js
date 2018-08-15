import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

it('should have a prop named `value` that displays to the screen', () => {
  const wrapper = shallow(<Display value={'1'} />);
  const value = wrapper.find('.component-display');

  expect(value.text()).toEqual('1');
})
