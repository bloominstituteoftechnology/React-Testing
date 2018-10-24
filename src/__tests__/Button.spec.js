import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';
import Panel from '../components/Panel/Panel';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('has the component-button class', () => {
    const wrapper = shallow(<Button />);

    const compButton = wrapper.find('.component-button');

    expect(compButton.length).toBe(1);
  });

  it('props being passed correctly', () => {
    const wrapper = shallow(<Button name="AC" />);

    const butProp = wrapper.find('button');

    expect(butProp.text()).toEqual('AC');
  });

  it('has the component-button class', () => {
    const wrapper = shallow(<Button orange />);

    const orange = wrapper.find('.orange');

    expect(orange).toHaveLength(1);
  });

  it('has the component-button class', () => {
    const wrapper = shallow(<Button wide />);

    const wide = wrapper.find('.wide');

    expect(wide).toHaveLength(1);
  });
});
