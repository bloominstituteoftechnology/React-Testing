import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

// describe('<App />', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//       shallow(<Panel />);
//   });

describe('App component', () => {
    it('renders without crashing', () => {
      shallow(<App />);
  });
    it('should render a panel of a calculator', () => {
    const display = shallow(<App />);

    const displays = display.find('panel')

    expect(displays.length).toEqual(1)
  });
});