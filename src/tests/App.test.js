import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have a state with the properties `total`, `next`, and `operation`', () => {
    const component = shallow(<App />);
    expect(component.state('total')).toBeDefined();
    expect(component.state('next')).toBeDefined();
    expect(component.state('operation')).toBeDefined();
  });
});
