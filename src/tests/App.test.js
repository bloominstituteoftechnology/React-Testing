import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
   shallow(<App />);
  });

  it('should render a header element if there is one', () => {
    const app = shallow(<App />);
    const headers = app.find('header');
    expect(headers.length).toEqual(0);
  });

  it('should render a div', () => {
    const app = shallow(<App />);
    const div = app.find(".component-app");
    expect(div.length).toEqual(1);
  });

  it("should have state that is an object", () => {
    const app = shallow(<App />);
    const instance = app.instance();

    expect(typeof instance.state).toEqual('object');
  })







  
});
