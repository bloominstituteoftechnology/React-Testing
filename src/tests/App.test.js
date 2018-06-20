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
    // shallow(<App />);
  });

  it('should be the same as the snapshot', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('renders display and panel', () => {
    const app = shallow(<App />);

    const display = app.find('Display');
    expect(display.length).toBe(1);
    
    const panel = app.find('Panel');
    expect(panel.length).toBe(1);
  });
});