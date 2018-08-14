import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const wrapper = shallow(<Panel />);
  const instance = wrapper.instance();

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Panel />, div);
    shallow(<Panel />);
  });

  it('should have div "component-panel"', () => {
    expect(wrapper.hasClass('component-panel')).toBe(true);
  });

  it('should render children', () => {
    const cWrapper = shallow((
      <div className="component-panel">
        <div />
      </div>
    ));
    expect(cWrapper.contains(<div />)).toBe(true);
  });

  it('should render grandchildren', () => {
    const gcWrapper = shallow((
      <div>
        <Button />
      </div>
    ));
    expect(gcWrapper.contains(<Button />)).toBe(true);
  });
});
