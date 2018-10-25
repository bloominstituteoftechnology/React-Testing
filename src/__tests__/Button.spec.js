import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  const wrapper = shallow(<Button name={"7"} />);
  const instance = wrapper.instance();
  it('Should have name:7,orange:undefined,wide:undefined', () => {
    expect(instance.props.name).toBe("7");
    expect(instance.props.orange).toBe(undefined);
    expect(instance.props.wide).toBe(undefined);
  });
  it('Should render component button and button', () => {
    const elements = wrapper.find('div.component-button');
    expect(elements.length).toBe(1);
    const buttons = wrapper.find('button');
    expect(buttons.length).toBe(1);
  });
});
