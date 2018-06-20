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
    const app = shallow(<App />);
    const displays = app.find('Display');
    const panel = app.find('Panel');

    expect(displays.length).toBe(1)
    expect(panel.length).toBe(1)
  });
    it('should handle state of of handleClick', () => {
      const app = shallow(<App />);
      const instance = app.instance();
      const buttons = app.find('handleClick');

      expect(instance.state.total).toEqual('0');
      expect(instance.state.next).toEqual(null);
      expect(instance.state.operation).toEqual(null);
    });
});