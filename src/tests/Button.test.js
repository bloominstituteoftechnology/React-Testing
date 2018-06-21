import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
import { TokenBucket } from 'limiter';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  describe('Shallow renders', () => {
    let wrapper;
    let button;
    beforeAll(() => {
      // let mockFunction = name => console.log(name);
      let mockFunction = jest.fn();
      wrapper = shallow(<Button name="hola caracola" clickHandler={mockFunction} />);
      button = wrapper.find('button');
    });

    test('Should have a <button>', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });
    test('Render passed "name" prop', () => {
      expect(button.props().children).toBe('hola caracola');
    });
    test('Button is clicked', () => {
      const Button_ = shallow(<Button name="hola caracola" clickHandler={jest.fn(name => console.log(name))} />);

      const instance = Button_.instance();
      // console.log(Button_);
      // console.log(instance.props.clickHandler);
      instance.handleClick = instance.props.clickHandler;
      Button_.find('button').simulate('click');

      // console.log(wrapper.instance().handleClick);
      // const handleClick = (wrapper.instance().handleClick = jest.fn());
      // wrapper.instance().handleClick = () => console.log('Hola caracola');
      // console.log(handleClick);
      // button.simulate('click');
      expect(instance.handleClick).toHaveBeenCalledTimes(1);
      expect(instance.handleClick).toHaveBeenCalledWith('hola caracola');
      // expect().toHaveBeenCalledWith('hola caracola');
    });
  });
});
