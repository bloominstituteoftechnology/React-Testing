import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Panel/>)
  })

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it ('check for handler prop', () => {
    const wrapper = mount(<Panel clickHandler={jest.fn()}/>)
    expect(wrapper.props().clickHandler).toBeDefined()
  })
});
