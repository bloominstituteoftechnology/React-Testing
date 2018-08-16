import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />)
  });
  it('should have a value prop that displays on the screen', () => {
    let display = shallow(<Display value = {'44'}/>);
    const valueHolder = display.find('.component-display');

    expect(valueHolder.text()).toEqual('44');




  });
});
