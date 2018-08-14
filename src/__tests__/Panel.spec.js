import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  const panel = shallow(<Panel />)
 
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('has component-panel className', () => {
    expect(panel.hasClass('component-panel')).toBe(true)
  })

  describe('buttons', () => {
    const children = panel.children()
    const buttons = []
    children.forEach(div => {
      div.children().forEach(button => {
        buttons.push(button)
      })
    })
   
    it('has 19 buttons', () => {
      expect(buttons.length).toBe(19)
    })
    
    it('has 5 orange buttons', () => {
      const orangeButtons = buttons.filter(btn =>
        btn.prop('orange')
      )
      expect(orangeButtons.length).toBe(5)
    })

    it('has 1 wide button', () => {
      const wideButtons = buttons.filter(btn =>
        btn.prop('wide')
      )
      expect(wideButtons.length).toBe(1)
    })
  })
});
