import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const component = shallow(<App />);  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should store total in state', () => {
    expect(component.state('total')).toBeDefined();
  });
  it('should store next in state', () => {
    expect(component.state('next')).toBeDefined();
  });
  it('should contain a handleClick function', () => {
    expect(App.prototype).toInclude('handleClick');
  });
});
