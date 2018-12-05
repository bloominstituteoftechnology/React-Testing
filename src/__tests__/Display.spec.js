import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display/>)
  });

  it('renders the component-display div', ()=>{
    const app = shallow(<Display/>)
    const cDdiv = app.find('.component-display')
    expect(cDdiv.length).toEqual(1)
  })

  it('renders the value prop', ()=>{
    const app = shallow(<Display value='0'/>)
    expect(app.text()).toEqual('0')
  })
});
