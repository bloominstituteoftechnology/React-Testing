import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });
  it('should render 19 buttons', () => {
    const wrapper = render(<Panel />);
    expect(wrapper.find('Button')).toHaveLength(19);
  });
  it('each button calls a callback on click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Panel clickHandler={onButtonClick} />);
    wrapper.find('button').forEach(button => button.simulate('click'));
    expect(onButtonClick.callCount).toEqual(19);
  });
});
