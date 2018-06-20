import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {

  describe('Presentation:', () => {
    it('shallow renders without crashing', () => {
      shallow(<Panel />);
    });

    it('renders "component-panel" div', () => {
      const panel = shallow(<Panel />);
      const componentPanel = panel.find('.component-panel');
      
      expect(componentPanel.length).toEqual(1);
    });

    it('renders ALL THE BUTTONS! I <3 BUTTONS F*** YEAH!!!', () => {
      const panel = shallow(<Panel />);
      const panelButtons = panel.find('.component-panel').children().find('Button');
      
      expect(panelButtons.length).toEqual(19);
    });
  });


});