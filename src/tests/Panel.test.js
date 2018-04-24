import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should return 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button')).toHaveLength(19);
  });
  it('should have an event handler called handleClick', () => {
    const handleClick = sinon.spy();
    const wrapper = shallow(<Panel clickHandler={handleClick} />);
    const inst = wrapper.instance();
    expect(inst.handleClick).toBeDefined();
  });
});
