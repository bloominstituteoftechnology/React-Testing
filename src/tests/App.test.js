import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const app = shallow(<App />);
  it('renders without crashing', () => {
    expect(app).toHaveLength(1);
  });
  it('have three child components', () => {
    expect(app.find('div').children()).toHaveLength(2);
  })
});
