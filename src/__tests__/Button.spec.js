import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('snapshot of button', () => {
    const tree = renderer.create(<Button />);
    expect(tree).toMatchSnapshot();
  });

  it('mount button', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
  });
});
