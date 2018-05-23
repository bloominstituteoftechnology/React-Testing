import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  const wrapper = shallow(<Panel />);
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should render 19 buttons', () => {
    expect(wrapper.find('Button')).toHaveLength(19);
  });

  it('should have 5 child elements', () => {
    expect(wrapper.find('div').children('div')).toHaveLength(5);
  });

  it('should call handleClick passed from props', () => {
    const myFunction = jest.fn();
    const wrapper = shallow(<Panel clickHandler={myFunction} />);
    // wrapper.find('Button').simulate('click'); // same as above
    //wrapper.find('.AC').prop('onClick')();
    expect(wrapper.instance().handleClick).toBeDefined();
    expect(myFunction).toHaveBeenCalledTimes(0);
  });

  it('should contain a component panel', () => {
    // expect(wrapper.equals('component-panel')).toBeTruthy();
    expect(wrapper.find("div").first().hasClass('component-panel')).toBeTruthy();
  });
});
