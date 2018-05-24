import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should not differ from snapshot', () => {
    const button = shallow(<Button />);

    expect(button).toMatchSnapshot();
  });

  it('should fire button prop clickhandler when clicked', () => {
    const clickHandler = jest.fn();
    const button = shallow(<Button clickHandler={clickHandler} />);

    button.children().simulate('click');
    expect(clickHandler.mock.calls.length).toBe(1);
  });

  it('should have class orange when passed orange prop', () => {
    const button = shallow(<Button />);
    const orangeButton = shallow(<Button orange />);

    expect(button.is('.orange')).toBe(false);
    expect(orangeButton.is('.orange')).toBe(true);
  })

  it('should have class wide when passed wide prop', () => {
    const button = shallow(<Button />);
    const wideButton = shallow(<Button wide />);

    expect(button.is('.wide')).toBe(false);
    expect(wideButton.is('.wide')).toBe(true);
  })

  it('should display props name passed to it', () => {
    const button = shallow(<Button name="blah" />);

    expect(button.text()).toBe("blah");
  })
});
