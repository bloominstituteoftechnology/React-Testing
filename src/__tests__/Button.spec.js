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

  it ('Only one div is present in Button component', () => {
    const wrapper = shallow(<Button />);

    const elements = wrapper.find('div');

    expect(elements.length).toBe(1)
  })

  it ('state is undefined', () => {
    const wrapper = shallow(<Button />);

    const instance = wrapper.instance();

    expect(instance.props.name).toBe(undefined);
  })

  test('component is stateful', () => {
    const wrapper = shallow(<Button />);

    const instance = wrapper.instance();

    expect(instance).not.to.be.instanceOf(Stateless);
  });

});
