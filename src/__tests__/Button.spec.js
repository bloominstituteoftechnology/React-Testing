import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
		shallow(<Button />);
  });
  it('tests display name', () => {
    const wrap = shallow(<Button name="test" />);
    expect(wrap.text()).toEqual('test');
  });
  it('button testing state change when clicked', () => {
    const wrap = shallow(<Button name="test2" clickHandler={ () => "fail" }/>);
    const inst = wrap.instance();
    const btn = wrap.find("button");
    btn.simulate("click");
    expect(inst.props.clickHandler()).toEqual("fail");
  });
});
