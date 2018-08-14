import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
});

describe('should render numbers and operators', () => {
  it('renders 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find('Button');

    expect(buttons).toHaveLength(19);
  })
})

