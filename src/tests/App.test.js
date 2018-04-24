import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });
const wrapperApp = shallow(<App />);
describe('<App />', () => {
  it('renders with crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should have two children', () => {
    expect(wrapperApp.find('div').children()).toHaveLength(2);
  })
});
