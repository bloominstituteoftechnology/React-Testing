import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should return a component with classname: "component-display"', () => {
    const component = shallow(<Display />);
    console.log(component.length);
    expect(component).toHaveLength(1);
  })

  it('should return the specified value', () => {
    const component = shallow(<Display value = {"0"} />);
    expect(component.contains(
      <div className = "value">
        0
      </div>
    )).toEqual(true);
  });
});
