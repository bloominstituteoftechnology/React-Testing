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

  it('returns the div with class of component display', () => {
    const display = shallow(<Display />);
    expect(display.find('.component-display')).toHaveLength(1);
  });

  it('should return its value', () => {
    const display = shallow(<Display value={'10'} />);
    expect(display.contains('10')).toEqual(true);
  });
});