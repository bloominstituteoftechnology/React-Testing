import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  const wrapper = shallow(<Display />);
  const instance = wrapper.instance();

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Display />, div);
    shallow(<Display />);
  });

  it('should have div "component-display"', () => {
    expect(wrapper.hasClass('component-display')).toBe(true);
  });

  it('should render children', () => {
    const childWrapper = shallow((
      <div className="component-display">
        <div />
      </div>
    ));
    expect(childWrapper.contains(<div />)).toBe(true);
  });
});
