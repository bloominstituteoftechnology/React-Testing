import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
 
  it('renders a div correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it("correctly renders the component-app div specifically", () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find(".component-app");
     expect(elements.length).toBe(1);
  });
   
  it("state value of total should be 0 for display by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe("0");
  });

});
