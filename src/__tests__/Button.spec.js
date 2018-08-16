import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let wrapper = shallow(<Button />);

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Button />, div);
    shallow(<Button />);
  });

  it('should have div "component-button"', () => {
    expect(wrapper.hasClass('component-button')).toBe(true);
  });

  it('should have "component-button wide"', () => {
    wrapper = shallow(<Button wide />);
    expect(wrapper.find('.wide')).toHaveLength(1);
  });

  it('should have "component-button orange"', () => {
    wrapper = shallow(<Button orange />);
    expect(wrapper.find('.orange')).toHaveLength(1);
  });

  // it('should render children', () => {
  //   const wrapper = shallow((
  //     <div className="component-button">
  //       <button />
  //     </div>
  //   ));
  //   expect(wrapper.contains(<button />)).toBe(true);
  // });

  it('should render children', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
