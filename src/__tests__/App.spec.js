import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('<App />', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    shallow(<App />);
  });

  const wrapper = shallow(<App />);
  it('renders the calculator', () => {
    const elements = wrapper.find('div.component-app');
    expect(elements.length).toBe(1);
  });

  it('renders the calc display', () => {
    const elements = wrapper.find('Display');
    expect(elements.length).toBe(1);
  });
  it('renders the calc panel', () => {
    const elements = wrapper.find('Panel');
    expect(elements.length).toBe(1);
  });
  it('Should have state={totalt:0,next:null,operation:null}', () => {
    const instance = wrapper.instance();
    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  });
});
