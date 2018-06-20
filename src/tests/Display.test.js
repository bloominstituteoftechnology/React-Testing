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

  it('should return the div with the class of component-display', () => {
    const display = shallow(<Display />);
    expect(display.find('.component-display')).toHaveLength(1);
  });

  it('should return the value in which it contains', () => {
    const display = shallow(<Display value={'Hello!'} />);
    expect(display.contains('Hello!')).toEqual(true);
  });
});
