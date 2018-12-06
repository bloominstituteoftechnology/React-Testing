import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
	});
	
	it('matches snapshot', () => {
    const snapshot = renderer.create(<Display />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it.skip('props should be value', () => {
    const wrapper = shallow(<Display value="0" />);
    console.log(wrapper.props.value);
    expect(wrapper.props().value).toEqual('0');
  });
});
