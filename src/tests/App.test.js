import React from 'react';
import ReactDOM from 'react-dom';
// import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders without crashing', () => {
    shallow(<App />);
  })
  it('should have Display and Panel component', () => {
    let app = shallow(<App />);
    expect(app.find("Display").length).toBe(1);
    expect(app.find("Panel").length).toBe(1);
  })
});
