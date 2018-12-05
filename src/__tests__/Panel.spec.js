import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel/>)
  });

  it('renders the component-panel div', ()=>{
    const app = shallow(<Panel/>)
    const cPdiv = app.find('.component-panel')
    expect(cPdiv.length).toEqual(1)
  })

  it('renders all buttons', ()=>{
    const app = shallow(<Panel/>)
    const buttons = app.find('Button')
    expect(buttons.length).toEqual(19)
  })
});
 