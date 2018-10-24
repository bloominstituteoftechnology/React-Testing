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
    const shallowWrapper = shallow(<App />);
    const elements = shallowWrapper.find(".component-app");
     expect(elements.length).toBe(1);
  });
   
  it("state value of total should be 0 for display by default", () => {
    const shallowWrapper = shallow(<App />);
    const instance = shallowWrapper.instance();
    expect(instance.state.total).toBe("0");
  });

});
