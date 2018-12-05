import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  // it('should handle click', () => {
  //   const wrapper = shallow(<Panel />);
  //   const instance = wrapper.instance();

  //   const button = wrapper.find('.component-panel');

  //   expect(button).toBe(true);
  // });
});
