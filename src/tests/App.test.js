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

  it('should have a properly formatted state for calculate() to work with', () => {
    const shallowApp = shallow(<App />);
    expect(shallowApp.state('total')).toBeDefined();
    expect(shallowApp.state('next')).toBeDefined();
    expect(shallowApp.state('operation')).toBeDefined();
  });

  it('should render a single div called \'component-app\'', () => {
    const shallowApp = shallow(<App />);
    expect(shallowApp.find('.component-app')).toHaveLength(1);
  });
});
