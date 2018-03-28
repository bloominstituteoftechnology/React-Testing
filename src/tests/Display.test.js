import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  const component = shallow(<Display />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('exists', () => {
    expect(component.exists());
  });
  it('returns two divs', () => {
    expect(component.find('div').length).toBe(2);
  });
  it('has no initial value', () => {
    const component = mount(<Display />);
    expect('value' in component.props()).toEqual(false);
  });
  it('properly passes props', () => {
    const wrap = mount(<Display value='test'/>);
    expect(wrap.text()).toEqual('test');
  });
  
});
