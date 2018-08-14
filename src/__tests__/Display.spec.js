import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('renders a div with className `component-display`', () => {
    const component = shallow(<Display />);
    expect(component.find('.component-display')).toHaveLength(1);
  });

  it('renders the passed value', () => {
    const component = shallow(<Display value={"6"} />);
    expect(component.contains(
      <div className="component-display">
        <div>
          6
        </div>
      </div>
    )).toBe(true);
  });
});
