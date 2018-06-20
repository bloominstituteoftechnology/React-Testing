import React from 'react';
import { shallow } from 'enzyme';
import Panel from './Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });
});
