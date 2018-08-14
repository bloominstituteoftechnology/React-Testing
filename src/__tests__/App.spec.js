import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  // it('render a p tag with "Welcome to React"' , () => {
  //   const div = document.createElement('div');
  //   const app = shallow(<App />);
  //   const paragraph = app.find('App.intro');
  //   expect(paragraph.text()).toEqual('Welcome to React')
  // });
  it('render a p tag with "Welcome to React"' , () => {
    const div = document.createElement('div');
    const app = shallow(<App />);
    const paragraph = app.find('App.intro');
    expect(paragraph.text()).toEqual('Welcome to React')
  });
});
