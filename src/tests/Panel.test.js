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
  it('renders 19 buttons', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button')).toHaveLength(19);
  });
  it('every button calls click handler and passes its name as a prop', () => {
    const wrapper = shallow(<Panel clickHandler={sinon.spy()}/>);
    const buttons = wrapper.find('Button');
    buttons.forEach(button => {
      button.simulate('click');
    });
    expect(wrapper.props.clickHandler).toHaveBeenCalledTimes(20);
  });
});