import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

// describe('<Display />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Display />, div);
//   });
//   it('should display a string', () => {
//     const wrapper = shallow(<Display value="foo" />);
//     expect(wrapper.props().value).toEqual('foo');
//   });
// });

describe('<Display />', () => {
  it('should render properly', () => {
    expect(shallow(<Display />)).toHaveLength(1);
  });

  it('should be selectable by class component-display', () => {
    expect(shallow(<Display />).find('.component-display').length).toBe(1);
  });
});
