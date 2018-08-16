import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  let wrapper = shallow(<Panel />);

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Panel />, div);
    shallow(<Panel />);
  });

  it('should have div "component-panel"', () => {
    expect(wrapper.hasClass('component-panel')).toBe(true);
  });

  // it('should render children', () => {
  //   const wrapper = shallow((
  //     <div className="component-panel">
  //       <div />
  //     </div>
  //   ));
  //   expect(wrapper.contains(<div />)).toBe(true);
  // });

  it('should render children', () => {
    expect(wrapper.find('div')).toHaveLength(6);
  });

  // it('should render grandchildren', () => {
  //   const wrapper = shallow((
  //     <div>
  //       <Button />
  //     </div>
  //   ));
  //   expect(wrapper.contains(<Button />)).toBe(true);
  // });

  it('should render grandchildren', () => {
    expect(wrapper.find(Button)).toHaveLength(19);
  });
});
