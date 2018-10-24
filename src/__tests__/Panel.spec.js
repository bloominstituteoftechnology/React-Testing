import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {


  describe('render()', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Panel />, div);
    });

    it('should render div with a className of component-panel', () => {
      const wrapper = shallow(<Panel />);
      const elements = wrapper.find('div.component-panel');

      expect(elements.length).toEqual(1);
    });

    it('should render each child div of the component-panel div', () => {
      const wrapper = shallow(<Panel />);
      const elements = wrapper.find('div.panel-row');

      expect(elements.length).toEqual(5);
    });

    it('should render all Button components', () => {
      const wrapper = shallow(<Panel />);
      const elements = wrapper.find('Button');

      expect(elements.length).toEqual(19);
    });
  });
  
});
