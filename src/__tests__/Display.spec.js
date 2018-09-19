import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
   shallow(<Display />);
  });

  it('should return two div elements', () => {
    const display = shallow(<Display />);

    expect(display.find('div')).toHaveLength(2);
  })
});
