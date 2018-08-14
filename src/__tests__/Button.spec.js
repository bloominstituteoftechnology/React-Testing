import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const wrapper = shallow(<Button />);
  const instance = wrapper.instance();

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Button />, div);
    shallow(<Button />);
  });

  it('should have div "component-button"', () => {
    expect(wrapper.hasClass('component-button')).toBe(true);
  });

  it('should render children', () => {
    const childWrapper = shallow((
      <div className="component-button">
        <button />
      </div>
    ));
    expect(childWrapper.contains(<button />)).toBe(true);
  });
});
