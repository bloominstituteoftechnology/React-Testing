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
    shallow(<App />);
    //Lines 12 and 13 or lines 14 you don't need both
   });

   // it('should have a display that shows user input', () => {
   //   const app = shallow(<App />); //seems you need this almost every time
   //   const instance = app.instance; //remind me again what this line is for?
   //
   //   const display = app.find('.component-display');
   //   expect(display.text()).toEqual('0');
   // })
});
