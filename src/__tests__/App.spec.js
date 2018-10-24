import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('matches snapshot', () => {
    expect(renderer.create(<App />).toJSON()).toMatchSnapshot;
  })
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    shallow(<App />);
  });
  it('renders correct UI', () => {
    expect(shallow(<App />).find('div.component-app').length).toBe(1);
  });
  it('initial state should be... total: "0", next: null, operation: null', () => {
    expect(shallow(<App />).instance().state.total).toBe('0');
    expect(shallow(<App />).instance().state.next).toBe(null);
    expect(shallow(<App />).instance().state.operation).toBe(null);
  });
});
