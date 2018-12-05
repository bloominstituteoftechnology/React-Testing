import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App/>)
  });
  it('renders the component-app div', ()=>{
    const app = shallow(<App/>)
    const cAdiv = app.find('.component-app')
    expect(cAdiv.length).toEqual(1)
  })

  it('renders the Display component', ()=>{
    const app = shallow(<App/>)
    const display = app.find('Display')
    expect(display.length).toEqual(1)
  })

  it('renders the Panel component', ()=>{
    const app = shallow(<App/>)
    const panel = app.find('Panel')
    expect(panel.length).toEqual(1) 
  })
});
