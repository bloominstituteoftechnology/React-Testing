import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })

  it('renders a display value and a panel of buttons', () => {
    const component = shallow(<App />);
    expect(component.find('Display').length).toBe(1);
    expect(component.find('Panel').length).toBe(1);
  })

  it('should handle a click', () => {
    const component = shallow(<App />);
    const instance = component.instance();
    
    instance.handleClick('1');
    expect(instance.state.operation).toBe(null);

    instance.handleClick('+');
    expect(instance.state.operation).toBe('+');

    instance.handleClick('1');
    instance.handleClick('=');
    expect(instance.state.total).toBe('2');
  })
});