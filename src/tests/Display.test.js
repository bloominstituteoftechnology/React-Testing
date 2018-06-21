import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should render two divs', () => {
    const display = shallow(<Display />)
    const instance = display.instance()

    const div = display.find('div')

    expect(div.length).toEqual(2)
  })
  it('should render provided value', () => {
    const expected = "I are a value";
    const props = { value: expected }
    const display = shallow(<Display {...props} />)

    const div = display.find('.component-display')

    expect(div.text()).toEqual(expected)
  })
});