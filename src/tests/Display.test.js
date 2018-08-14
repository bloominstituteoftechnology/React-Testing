import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display/>)
  });

  it('should display the value passed in as props', () => {
    const props = { value: '7' }
    const _Display = shallow(<Display {...props} />)
    const displayDiv = _Display.find('.component-display').closest('div')
    
    expect (displayDiv.text()).toEqual('7')
  })
});
