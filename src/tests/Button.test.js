import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should have a class component-button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.hasClass('component-button')).toEqual(true);
  });
  it('should have a working button', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<Button clickHandler={onClick}/>);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);

  });
  it('should render a button', () => {
    const button = shallow(<Button />);
    // expect(button.props().children.props).contains('onClick');
    expect(button.contains(
      <div>
        <button onClick>
          </button>
        </div>
     ));
    // console.log(button.props().children.props);
  })


});