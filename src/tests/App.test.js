import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const component = shallow(<App />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders a component-app div', () => {
    expect(component.find('div').length).toBe(1);
  });
  it('renders a display tag', () => {
    expect(component.find('Display').length).toBe(1);
  });
  it('renders a panel tag', () => {
    expect(component.find('Panel').length).toBe(1);
  });
});
