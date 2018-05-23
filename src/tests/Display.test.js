import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  test('if display has the class name component-display', () => {
    const wrapDiv = shallow(<Display />);
    expect(wrapDiv.hasClass('component-display')).toBeTruthy();
  });
  test('value should render', () => {
    const wrapDiv = shallow(<Display />);
    expect(wrapDiv.find('value')).toBeTruthy();
  });
  test('value should be a number', () => {
    const wrapDiv = shallow(<Display value = {`number`}/>);
    expect(wrapDiv.props().children.props.children).toBe(`number`);
  });
  test('value should display a value if given one', () => {
    const wrapDiv = shallow(<Display value = "53" />);
    expect(wrapDiv.contains(<div>53</div>)).toBeTruthy();
  });
});