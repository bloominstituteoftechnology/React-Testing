import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

  // linked to first question in notes.md

  // it('should have a div with two children', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.children()).toHaveLength(2);
  // });

  // is this test case below reading the same data as the test case above?
  it('should have a div with two children', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').children()).toHaveLength(2);
  });
});
