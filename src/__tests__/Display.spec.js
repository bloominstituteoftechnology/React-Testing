import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it ('display contains one component-display element', () => {
    const wrapper = shallow(<Display />);

    const elements = wrapper.find('.component-display');

    expect(elements.length).toBe(1)
  })

  test('state has correct initial value', () => {
    const wrapper = shallow(<Display />);

    const instance = wrapper.instance();

    expect(instance).not.to.be.instanceOf(Stateless);
  });

});
