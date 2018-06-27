import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Button component', () => {
  it('shallow renders without crashing', () => {
      shallow(<Button />);
  });

  it("it render an button", () => { 
      const button = shallow(<Button />);
      const div1 = button.find('div')
      expect(div1.length).toEqual(1)
  });

  it('test for finding if button is clicked', () => {
    const snake = jest.fn(()=> {});
    const button = shallow(<Button clickHandler={snake} />);
    const instance = button.instance();

    instance.handleClick();
    expect(snake).toHaveBeenCalledTimes(1)
    instance.handleClick();
    expect(snake).toHaveBeenCalledTimes(2)
    instance.handleClick();
    expect(snake).toHaveBeenCalledTimes(3)
  });
});