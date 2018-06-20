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

  it('display shouls start at 0', () => {
    const display = shallow(<Display value='0'/>)
    const texts = display.find('.AC')
    

    expect(texts.text()).toEqual('0')

  })

});