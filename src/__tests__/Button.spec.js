import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button/>)
  });

  it('renders the name prop', ()=>{
    const app = shallow(<Button name='0'/>)
    expect(app.text()).toEqual('0')
  })

  it('renders the orange prop', ()=>{
    const app = shallow(<Button orange/>)
    expect(app.prop('className')).toEqual('component-button orange')
  })

  it('renders the wide prop', ()=>{
    const app = shallow(<Button wide/>)
    expect(app.prop('className')).toEqual('component-button  wide')
  })
});