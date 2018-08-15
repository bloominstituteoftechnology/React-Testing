import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  let wrapper = shallow(<Display />);

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Display />, div);
    shallow(<Display />);
  });

  it('should have div "component-display"', () => {
    expect(wrapper.hasClass('component-display')).toBe(true);
  });

  // it('should render children', () => {
  //   wrapper = shallow((
  //     <div className="component-display">
  //       <div />
  //     </div>
  //   ));
  //   expect(wrapper.contains(<div />)).toBe(true);
  // });

  it('should render children', () => {
    wrapper = shallow(<div className="component-display" />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render value', () => {
    wrapper = shallow(<Display value={'1'} />);
    expect(wrapper.contains(<div>1</div>)).toBe(true);
  });
});
