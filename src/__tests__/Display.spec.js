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

  it('validate that a value that is passed is rendered', ()=> {
    const value = '5';

    //Make a shallow render of Display
    //Pass in the prop.value
    //Find the div with className = 'component-display'
    //Get the first child
    const divUnderTest = shallow(<Display value={value} />).find('.component-display').childAt(0)

    expect(divUnderTest.text()).toEqual(value)
  })
});
