import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('should render a div with class `component-display`', () => {
    const component = shallow(<Display />);
    expect(component.find('.component-display')).toHaveLength(1);
  });

  it('should render whatever value gets passed', () => {
    const component = shallow(<Display value={'8'} />);
    expect(component.contains(
      <div className="component-display">
      8
      </div>
    )).toEqual(true);
  });


});
