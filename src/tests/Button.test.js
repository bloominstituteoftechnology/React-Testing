import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should render the button element', () => {
    const button = shallow(<Button />);
    expect(button.find('button')).toHaveLength(1);
  });

  it('should check if clickHandler is functioning properly', () => {
    window.alert = jest.fn();
    const button = shallow(<Button clickHandler={window.alert} />);
    button.find("button").simulate("click");
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  it("should have orange button", () => {
    const props = "orange";
    const button = shallow(<Button orange />);
    expect(button.find(".orange")).toHaveLength(1);
  });

  it("should have wide button", () => {
    const props = "wide";
    const button = shallow(<Button wide />);
    expect(button.find(".wide")).toHaveLength(1);
  });
});