import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Display />, div);
  // });

  it('should renders without crashing', () => {
    shallow(<Display />)
  })

  it('should render one display class', () => {
    const display = shallow(<Display />)
    const foundDisplay = display.find('.component-display');
    expect(foundDisplay.length).toEqual(1);
  });

  it('should render provided value', () => {
    const expected = 'A/C';
    const props = { value: expected };
    const display = shallow(<Display {...props} />);
    const foundDisplay = display.find('.component-display');
    expect(foundDisplay.text()).toEqual(expected)
  })
});

