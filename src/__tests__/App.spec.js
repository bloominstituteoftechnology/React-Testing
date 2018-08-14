import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const app = shallow(<App />);
  const instance = app.instance();

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    shallow(<App />);
  });

  it('initial total is 0', () => {
    expect(instance.state.total).toBe('0');
  });

  it('initial next is null', () => {
    expect(instance.state.next).toBe(null);
  });

  it('initial operation is null', () => {
    expect(instance.state.operation).toBe(null);
  });
  
  it('should have div "component-app"', () => {
    expect(app.hasClass('component-app')).toBe(true);
  });
});
