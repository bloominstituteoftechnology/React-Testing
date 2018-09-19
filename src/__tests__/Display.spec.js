import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
   shallow(<Display />);
  });

  it('should return two div elements', () => {
    const display = shallow(<Display />);

    expect(display.find('div')).toHaveLength(2);
  });

  it('Display a value being passed to display', () => {
    const value1 = shallow(<Display value='1' />);
    const value2 = shallow(<Display value='2' />);
    const value3 = shallow(<Display value='3' />);
    const value4 = shallow(<Display value='4' />);
    const value5 = shallow(<Display value='5' />);
    const value6 = shallow(<Display value='6' />);
    const value7 = shallow(<Display value='7' />);
    const value8 = shallow(<Display value='8' />);
    const value9 = shallow(<Display value='9' />);
    const value0 = shallow(<Display value='0' />);

    expect(value1.contains(<div>1</div>)).toBeTruthy();
    expect(value2.contains(<div>2</div>)).toBeTruthy();
    expect(value3.contains(<div>3</div>)).toBeTruthy();
    expect(value4.contains(<div>4</div>)).toBeTruthy();
    expect(value5.contains(<div>5</div>)).toBeTruthy();
    expect(value6.contains(<div>6</div>)).toBeTruthy();
    expect(value7.contains(<div>7</div>)).toBeTruthy();
    expect(value8.contains(<div>8</div>)).toBeTruthy();
    expect(value9.contains(<div>9</div>)).toBeTruthy();
    expect(value0.contains(<div>1</div>)).toBeFalsy();

  })
});
